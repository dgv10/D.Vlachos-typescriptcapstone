import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Device } from './device';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
  employees:Employee[]=[];
  devices:Device[]=[];

  @Output() deviceselected= new EventEmitter<Device>()
  @Output() employeeselected= new EventEmitter<Employee>()

  constructor(private http:HttpClient) { }

  getdevices() {
    this.http.get('https://showhttp-d010a-default-rtdb.firebaseio.com/Ds.json').subscribe((Device:any)=>{
      for(let key in Device){
        this.devices.push(new Device(Device[key].serial, Device[key].description, Device[key].type))
      }
  })
}



  getemployees() {
    this.http.get('https://showhttp-d010a-default-rtdb.firebaseio.com/Employees.json').subscribe((Employee:any)=>{
      for(let key in Employee){
        this.employees.push(new Employee(Employee[key].id, Employee[key].name, Employee[key].email))
      }
  })
  }

  deleteemployee(id:number) {
    this.http.get('https://showhttp-d010a-default-rtdb.firebaseio.com/Employees.json').subscribe((Employee:any)=>{
      for(let key in Employee){
        this.employees.splice(id, 1);
      }
  })
  }
}
