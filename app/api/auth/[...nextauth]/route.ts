
import NextAuth from "next-auth"
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
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
        async authorize(credentials, req) {
          return null;
        },
      }),
    ],
  };
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST } 
