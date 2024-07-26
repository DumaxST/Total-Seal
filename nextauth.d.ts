import NextAuth from "next-auth"
declare module "next-auth" {
  interface Session {
    user?: User;
    accessToken: string
    username: string
    userId: string
    token: string
  }
}