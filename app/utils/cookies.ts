import {cookies} from 'next/headers';
import { Device, Item } from '../lib/definitions';


export function getItemFromCookies(searchImei: string, cookieToSearch:string): Device | null{
    
    const cookieStore = cookies();

    const cookieValue =cookieStore.get(cookieToSearch)?.value ;

    if (!cookieValue) {
        return null
    }
    try {
        const parsedValue = JSON.parse(cookieValue)
        
        // If parsedValue is an array, search it directly
        
        console.log(typeof parsedValue)
        console.log(parsedValue)
        return parsedValue.find((device:Device) => device.imei === searchImei) || null;

      } catch (error) {
        console.error('Error parsing cookie value:', error)
        return null
      }
    


}