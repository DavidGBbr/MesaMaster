import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("@nextauth.token")?.value;

  const routes = {
    signInURL: new URL("/", req.url),
    dashboardURL: new URL("/dashboard", req.url),
    categoryURL: new URL("/category", req.url),
  };

  if (token) {
    if (
      req.nextUrl.pathname.endsWith("/") ||
      req.nextUrl.pathname.startsWith("/signup")
    ) {
      return NextResponse.redirect(routes.dashboardURL);
    }
  } else {
    if (
      req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/category") ||
      req.nextUrl.pathname.startsWith("/product")
    ) {
      return NextResponse.redirect(routes.signInURL);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/category",
    "/category/:path*",
    "/product",
    "/product/:path*",
    "/",
    "/signup",
  ],
};
