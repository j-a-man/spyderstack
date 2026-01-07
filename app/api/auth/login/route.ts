import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    
    // Simple environment variable check
    // In a real app, you'd want something more robust
    const correctPassword = process.env.INTERNAL_PASSWORD || 'admin';
    
    if (password === correctPassword) {
      // Set the cookie
      // Note: In Next.js App Router we wait for the cookie store
      const cookieStore = await cookies();
      cookieStore.set('auth-token', 'authenticated', {
        httpOnly: true,
        shouldConnectToDevTools: true, // for dev
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
