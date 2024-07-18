import { Device } from "../definitions";

export interface LastConnection {
    devices: DeviceDetail[];
}

export interface DeviceDetail {
    id:                    string;
    imei:                  string;
    name:                  string;
    driver:                Driver;
    trailer:               Trailer;
    vehicle_brand:         string;
    vehicle_model:         string;
    vehicle_serial_number: string;
    insurance_policy:      InsurancePolicy;
    brand:                 string;
    serie:                 string;
    code:                  string;
    car_image:             number;
    connection_id:         string;
    speed:                 number;
    engine_stopped:        boolean;
    event_type:            number;
    temperature:           number;
    altitude:              number;
    coordinates:           number[];
    odometer:              number;
    engine_status:         number;
    battery:               number;
    orientation:           number;
    last_connection:       Date;
    satellites:            number;
    params:                Params;
    dynamic_params:        DynamicParams;
    created_at:            Date;
    polygonal_geofences:   any[];
    circular_geofences:    any[];
    linear_geofences:      any[];
    device_status:         string;
    device_status_id:      number;
    marker_icon:           string;
    icon_path_format:      string;
    shortcuts:             Shortcut[];
    plates:                string;
    temperature_sensor:    boolean;
    total_seal:            boolean;
}

export interface Driver {
    id:              number;
    license:         string;
    expedition:      Date;
    expiration:      Date;
    profile_picture: string;
    name:            string;
    user_id:         number;
    client_id:       number;
}

export interface DynamicParams {
    Altitud:               Altitud;
    "Estado de motor":     Altitud;
    "Intensidad de señal": Altitud;
    bateria:               Altitud;
    "cant de satelites":   Altitud;
}

export interface Altitud {
    color: string;
    icon:  string;
    time:  Date;
    value: string;
}

export interface InsurancePolicy {
    id:              number;
    name:            string;
    client_id:       number;
    expedition_date: Date;
    expiration_date: Date;
    account_holder:  string;
    policy_number:   string;
    contacts:        any[];
}

export interface Params {
    altitude:                          number;
    battery_level:                     number;
    ble_1_temperature:                 number;
    dallas_temperature:                number;
    digital_input_status_3:            number;
    digital_output_1_state:            number;
    engine_stopped:                    boolean;
    "escort_lls_fuel_level_#1":        number;
    "escort_lls_fuel_level_#1_liters": number;
    event:                             string;
    external_power_voltage:            number;
    gps_status:                        number;
    gsm_level:                         number;
    ignition:                          number;
    lat:                               number;
    lng:                               number;
    movement_sensor:                   number;
    orientation:                       number;
    priority:                          number;
    sattelites:                        number;
    sg_event_id:                       number;
    speed:                             number;
    timestamp:                         Date;
    total_distance:                    number;
    total_seal?:                        Device;
}

export interface Shortcut {
    id:        number;
    name:      string;
    shortcut:  string;
    password:  boolean;
    data:      boolean;
    icon:      string;
    gprs_only: boolean;
}

export interface Trailer {
    id:              number;
    name:            string;
    user_id:         number;
    description:     string;
    code:            string;
    exclusive:       boolean;
    assigned:        boolean;
    extra_data:      ExtraData;
    profile_picture: string;
}
export interface ExtraData {
}