export interface SealDevices {
    seal_devices: SealDevice[];
}

export interface SealDevice {
    imei:             string;
    report:           string;
    device:           string;
    tanks:            Tank[];
    additionalfields: Additionalfields;
    datetime:         Date;
}

export interface Additionalfields {
    tankstatus: string;
    tag:        string;
}

export interface Tank {
    tanknumber:    number;
    seal:          string;
    valvebox:      string;
    oblea:         string;
    domo:          string;
    productstatus: string;
}
