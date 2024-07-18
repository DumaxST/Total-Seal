import { getSession } from 'next-auth/react';

const URLS = {
    SEAL_DEVICES :'seal_devices',
    SEAL_SETTINGS: 'users/settings',
    LAST_CONNECTION: 'devices/2/list'
}

export async function fetchDevices(token: string) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_MAPI_SG_URL}/${URLS.SEAL_DEVICES}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': token,
            'Content-Type': 'application/json',
            'Uuid': 'RESTFul-API',
            "App": 'RESTFul API'        }
    })
    const data = await res.json();
    
    return data.seal_devices
}
export async function getLastConnection(token:string,imei: string){
    const response =  await fetch(`${process.env.NEXT_PUBLIC_MAPI_SG_URL}/${URLS.LAST_CONNECTION}`, {
        method: 'POST',
        headers: {
          'X-Api-Key': token,
          'Content-Type': 'application/json',
          'Uuid': 'RESTFul-API',
          "App": "RESTFul API"
        },
        body: JSON.stringify({
            "imeis": [imei]
        }),
      });
        const data = await response.json();
        return data.devices[0]
}
