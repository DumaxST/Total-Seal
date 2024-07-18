import { getSession } from 'next-auth/react';

const URLS = {
    SEAL_DEVICES :'seal_devices',
    SEAL_SETTINGS: 'users/settings'
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
export async function fetchCode(){
    const session = await getSession();
    console.log(session)
    const response =  await fetch("https://lite.dumaxst.com/v1/users/settings", {
        method: 'GET',
        headers: {
          'X-Api-Key': "KFQ6sVywS7dG2in8FUEy27dRu3AYmlqR/HgpUOgVAVA=",
          'Content-Type': 'application/json',
          'Uuid': 'RESTFul-API',
          "App": "RESTFul API"
        }
      });
        const data = await response.json();    
}
export async function getLastConnection(token:string,imei: string){
    const response =  await fetch(`https://lite.dumaxst.com:5000/v1/devices/2/list`, {
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
