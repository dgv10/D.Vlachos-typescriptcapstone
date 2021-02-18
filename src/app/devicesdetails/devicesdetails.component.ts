import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../management.service';
import { Device } from '../device';

@Component({
  selector: 'app-devicesdetails',
  templateUrl: './devicesdetails.component.html',
  styleUrls: ['./devicesdetails.component.css']
})
export class DevicesdetailsComponent implements OnInit {
deviceserial:any;
mydevice:any;

  constructor(private activatedroute:ActivatedRoute, private management:ManagementService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
this.deviceserial=param.get('serial')
this.mydevice=this.management.devices.filter(
  (device)=>{
    return device.serial==this.deviceserial
  }
)[0]

      }
    )
  }


}
