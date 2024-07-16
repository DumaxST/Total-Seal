import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth";


import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session:{
    strategy: 'jwt',
  },
  pages:{
    signIn: '/auth/login',
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
            id: data?.id,
            name: data?.name,
            email: data?.email
          }
        }
        return null
      }
    })
    ],
    callbacks :{
      async signIn({user, account}){
       
        return true
      },
      async jwt({token}){
        console.log("token")
        console.log({token})
        return token
      },
      async session({session, token}){
        console.log("session")
        console.log({session})
        return session;
      }
    }
  
  }
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST } 