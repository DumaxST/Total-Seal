export interface Notification {
    id: string;
    deviceName: string;
    imei?: string;
    unidad?: string;
    seal: string;
    tankNumber?: number;
    valvebox?: string
    oblea?: string;
    domo?: string;
    productStatus?: string;
    userId?: number;
    createdAt: Date;
}