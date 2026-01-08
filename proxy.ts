import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if the path starts with /internal
  if (request.nextUrl.pathname.startsWith('/internal')) {
    
    // Allow access to the login page itself
    if (request.nextUrl.pathname === '/internal/login') {
      return NextResponse.next();
    }

    // Check for the auth cookie
    const authToken = request.cookies.get('auth-token');

    if (!authToken || authToken.value !== 'authenticated') {
      // API routes return 401, pages redirect to login
      if (request.nextUrl.pathname.startsWith('/api/')) {
         // Assuming we might protect API routes later, though currently they are usually global or separate.
         // But here we are protecting /internal pages. 
         // If we wanted to protect /api/tasks we would add it to matcher or logic here.
         // For now, let's just validte the page access.
      }
      
      const loginUrl = new URL('/internal/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/internal/:path*',
};
