
export interface DeviceDropdown {
    name: string
    code: string
}
export interface DetailDevice{
    id: string | number
    date: string
    codeSeal: string
    numberCompartment: number,
    motorStatus: string
    capacityDevice: string
    lastLocation: number[]
   
}
interface DetailDeviceB{
    date: string
    codeSeal: string
    numberCompartment: number,
    motorStatus: string
    capacityDevice: string
    lastLocation: number[]
   
 }
 // AddDevice

 export interface DeviceOption {
    name : string
    code : string
 }

export interface SensorStatus {
    name : string
    code : string
}
export interface DeviceForm{
    name: string
    valve_box: string
    wafer: string
    dome: string
    content: string
    codeSeal : string
}
export interface ColumnsProps{
    id:string;
    field: string;
    header: string;
}

export interface ParsedString {
    id: string;
    number: string;
    hash: string;
  }
export interface Item {
    id:string
    name: string;
}
export interface Tank {
    tanknumber: number;
    seal:string;
    valvebox:string;
    oblea: string;
    domo:string;
    productstatus:string;
}
export interface Device {
    imei: string;
    report :string;
    device:string;
    tanks: Tank[];
}
