import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {
  if (await validateUser(request)) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect('http://localhost:3001/login');
  }
}
 
async function validateUser(request: NextRequest): Promise<boolean> {
  const key = request.cookies.get("key");
  console.log(key);

  if (!key) { 
    console.log("missing cookie");
    return false;
  }

  const validation_response = await fetch(`http://localhost:8080/user/check?key=${key.value}`, { method: 'GET' });

  console.log(validation_response.body);
  if (validation_response.ok) {
    return true;
  } else {
    return false;
  }
}

export const config = {
  matcher: ['/projetos/:path*', '/novoprojeto/', '/estatisticas/:path*'],
}