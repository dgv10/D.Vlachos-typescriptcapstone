import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { DevicesdetailsComponent } from './devicesdetails/devicesdetails.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesdetailsComponent } from './employeesdetails/employeesdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DevicesdetailsComponent,
    EmployeesComponent,
    EmployeesdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
