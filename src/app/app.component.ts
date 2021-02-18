import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from './device';
import { ManagementService } from './management.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typescriptcapstone';
  myemployees=[];
  mydevices=[];

  constructor(private http:HttpClient, private management:ManagementService){

  }

  getdata(){
    this.http.get("https://showhttp-d010a-default-rtdb.firebaseio.com/Employees.json")
    .subscribe((response:any)=>{

    for(let key in response){
    this.myemployees.push(new Employee (response[key].id, response[key].name, response[key].email))

  }
})
}


  getdevices(){
    this.http.get("https://showhttp-d010a-default-rtdb.firebaseio.com/Ds.json")
    .subscribe((response:any)=>{

    for(let key in response){
      this.mydevices.push(new Device (response[key].serial, response[key].description, response[key].type))
  }
})
}



}
