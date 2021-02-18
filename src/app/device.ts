export class Device {
  serial:string;
  description:string;
  type:any;
  
  constructor(serial: string, description: string, type:any){
    this.serial=serial;
    this.description=description;
    this.type=type;
  }
}
