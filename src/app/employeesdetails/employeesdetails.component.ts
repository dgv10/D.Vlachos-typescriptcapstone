import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../management.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeesdetails',
  templateUrl: './employeesdetails.component.html',
  styleUrls: ['./employeesdetails.component.css']
})
export class EmployeesdetailsComponent implements OnInit {
employeeid:any;
myemployee:any;

  constructor(private activatedroute:ActivatedRoute, private management:ManagementService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
this.employeeid=param.get('id')
this.myemployee=this.management.employees.filter(
  (employee)=>{
    return employee.id==this.employeeid
  }
)[0]

      }
    )
  }


}
