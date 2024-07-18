"use server"
import {cookies} from 'next/headers';
import { Device } from '../lib';


export async function getItemFromCookies(searchImei: string, cookieToSearch:string){
    
    const cookieStore = cookies();

    const cookieValue =cookieStore.get(cookieToSearch)?.value ;

    if (!cookieValue) {
        return null
    }
    try {
        const parsedValue = await JSON.parse(cookieValue)
        
        // If parsedValue is an array, search it directly
        return parsedValue.find((device:Device) => device.imei === searchImei) || null;

      } catch (error) {
        console.error('Error parsing cookie value:', error)
        return null
      }
}
export async function validateImeiFromCookie(imei:string, cookieToSearch:string){

  const cookieStore = cookies();
  const cookieValue = cookieStore.get(cookieToSearch)?.value;

  if (!cookieValue) {
    return null
  }
  try {
    const parsedValue = await JSON.parse(cookieValue)
    // If parsedValue is an array, search it directly
  
    return parsedValue.find((device:Device) => device.imei === imei) || null;
  } catch (error) {
    console.error('Error parsing cookie value:', error)
    return null
  }
  

}