import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { Device } from '../device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  devices:Device[]=[];

  constructor(private management:ManagementService, private router:Router) { }

  ngOnInit(): void {
    this.devices=this.management.devices
  }


  navigate(alldevices){
    this.router.navigate(['device',alldevices])
  }
}
