import { type NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production")

export async function middleware(request: NextRequest) {
  // Check if the request is for admin routes (except login)
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    const token = request.cookies.get("admin-token")

    if (!token) {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    try {
      await jwtVerify(token.value, JWT_SECRET)
      return NextResponse.next()
    } catch (error) {
      // Token is invalid, redirect to login
      const response = NextResponse.redirect(new URL("/admin/login", request.url))
      response.cookies.delete("admin-token")
      return response
    }
  }

  // Check if the request is for admin API routes
  if (request.nextUrl.pathname.startsWith("/api/admin") && !request.nextUrl.pathname.startsWith("/api/admin/auth")) {
    const token = request.cookies.get("admin-token")

    if (!token) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    try {
      await jwtVerify(token.value, JWT_SECRET)
      return NextResponse.next()
    } catch (error) {
      return NextResponse.json({ success: false, error: "Invalid token" }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
}
