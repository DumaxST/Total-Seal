import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth";
import jwt from "jsonwebtoken"

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session:{
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {}
      },
      async authorize(credentials, req) {
      
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password
          })
        })
        
        const data = await response.json();
       
        if(data){
          return {
            user: data.user.username,
            apiToken: data.user.token,
          }
        }
        return null
      }
    })
    ],
  
  }
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST } 