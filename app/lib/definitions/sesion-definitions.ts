export type SessionPayload = {
    userId: string | number;
    expiresAt: Date;
  };

export interface User{
  id: number;
  username: string;
  full_name : string
  company: string
  token: string
  email: string
  devices_count: number
  client_id: number
}