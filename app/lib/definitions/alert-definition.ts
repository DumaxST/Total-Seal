type Priority = 'LOW'|'HIGHT';
type Compartment = 'ONE'|'TWO'|'THREE' ;

export interface Alert{
    id:string
    device:string;
    idDevice:string;
    createdAt: Date;
    codeSeal: string;
    priority: Priority;
    compartment: Compartment;
    event: string;
}