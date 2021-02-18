import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[]=[];

  constructor(private management:ManagementService, private router:Router) { }

  ngOnInit(): void {
    this.employees=this.management.employees
  }

  navigate(employeedevices){
    this.router.navigate(['device',employeedevices])
  }

  navigate2(employeedetails){
    this.router.navigate(['employee',employeedetails])
  }
}
