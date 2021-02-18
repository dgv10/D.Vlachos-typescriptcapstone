import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesdetailsComponent } from './employeesdetails/employeesdetails.component';
import { DevicesComponent } from './Devices/Devices.component';
import { DevicesdetailsComponent } from './Devicesdetails/Devicesdetails.component';

const routes: Routes = [
  {path:'employees', component:EmployeesComponent},
  {path:'devices', component:DevicesComponent,
children:[{path:'devicesdetails/:serial', component:DevicesdetailsComponent}]
},
  {path:'employeesdetails/:id', component:EmployeesdetailsComponent},
  {path:'devicesdetails/:serial', component:DevicesdetailsComponent},
  {path:'', redirectTo:'/employee', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
