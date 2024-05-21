export interface Device {
    id: string | number
    name: string
    trailer: string
    date: string
    status: string
    codeSeal: string
}

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