
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    pages: {
      signIn: "/auth/login",
    },
    providers: [
      CredentialsProvider({
        credentials: {
          username: {},
          password: {},
        },
        async authorize(credentials): Promise<{id:string; token: string; username: string; password?: string | undefined; } | null> {
          try {
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
            if(!response.ok){
               return null
            }
            const parsedResponse = await response.json();
            const {token ,username,id}= parsedResponse.user;
            
            return {
              ...credentials,
              id,
              token,
              username
            }
          } catch (error) {
            return null
          }
          
        }
       
      })
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
       // user is only available the first time a user signs in authorized
        if (user) {
          return {
            ...user
          };
        }
        return token;
      },
      session: async ({ session, token }) => {
        if (session && session.user) {
          session.user.username = token.username;
          session.user.id = token.id;
          session.user.token = token.token;
        }
        return session;
      },
    },
};
const handler= NextAuth(authOptions);
export { handler as GET, handler as POST} 
