import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    
    // Environment variable check
    const correctPassword = process.env.INTERNAL_PASSWORD;

    if (!correctPassword) {
      console.error("INTERNAL_PASSWORD is not defined");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    
    if (password === correctPassword) {
      // Set the cookie
      // Note: In Next.js App Router we wait for the cookie store
      const cookieStore = await cookies();
      cookieStore.set('auth-token', 'authenticated', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax'
      });
      
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
