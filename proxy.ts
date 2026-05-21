import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(request: NextRequest) {
  // Check if the path starts with /internal
  if (request.nextUrl.pathname.startsWith('/internal')) {
    
    // Allow access to the login page itself
    if (request.nextUrl.pathname === '/internal/login') {
      return NextResponse.next();
    }

    // Check for the NextAuth session token
    // Note: You must ensure NEXTAUTH_SECRET is set in .env for this to work correctly in production
    const token = await getToken({ req: request });

    if (!token) {
      const loginUrl = new URL('/internal/login', request.url);
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/internal/:path*',
};
