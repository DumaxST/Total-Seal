"use server"
import { LoginFormSchema } from "../definitions/auth-definitons";
import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createSession } from "../sesion";

export async function login(prevState:any ,formData:FormData) {
    
    const validatedFields = LoginFormSchema.safeParse({
        username: formData.get('username'),
        password: formData.get('password')
    })
    const errorMessage = {message: 'Usuario y/o contaseña inválida'};
    // If any form fields are invalid, return early
    //if (!validatedFields.success) {
      //  return { message: "Error fields" }; 
        // return {
        // errors: validatedFields.error.flatten().fieldErrors,
        // };
    //}
    // Made request to login
 
      const response = await fetch('https://lite.dumaxst.com/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username:  formData.get('username'),
          password: formData.get("password")
        }),
      });
       const res = await response.json();

      
      console.log(res.user)
      
      if(!res.user){
          console.log("Error ")
      }
      return {success: true, token: res.user.token}
       
    


}