
import { setCookie } from 'cookies-next';
import { SignJWT, jwtVerify } from 'jose';
import  type { SessionPayload, User } from './definitions/sesion-definitions';

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1hr')
      .sign(key);
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error) {
    console.log('Failed to verify session');
    return null;
  }
}
export function createSession(user:User) {
  console.log("sesion")
  console.log(user.token);
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  setCookie('token', user.token);
  // 1. Create a session in the database
  // const data = await db
  //   .insert(sessions)
  //   .values({
  //     userId: id,
  //     expiresAt,
  //   })
    // Return the session ID
    //.returning({ id: sessions.id });

  // const sessionId = data[0].id;

  // 2. Encrypt the session ID
  // const session = await encrypt({ userId: id, expiresAt });

  // 3. Store the session in cookies for optimistic auth checks
  // cookies().set('session', session, {
  //   httpOnly: true,
  //   secure: true,
  //   expires: expiresAt,
  //   sameSite: 'lax',
  //   path: '/',
  // });
}