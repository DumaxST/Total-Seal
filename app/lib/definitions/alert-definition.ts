type PriorityAlert = 'LOW' | 'HIGH';
type Compartment = 'ONE' | 'TWO' | 'THREE';

export interface Alert {
  id: string;
  device: string;
  idDevice: string;
  createdAt: Date;
  codeSeal: string;
  priority: PriorityAlert;
  compartment: Compartment;
  event: string;
}

export { PriorityAlert, Compartment };
