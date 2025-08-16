import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"
import { cookies } from "next/headers"
import { SignJWT } from "jose"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production")

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json({ success: false, error: "Username and password are required" }, { status: 400 })
    }

    // For demo purposes, allow simple admin/admin123 login
    // In production, you should hash passwords and store them securely
    if (username === "admin" && password === "admin123") {
      // Create JWT token
      const token = await new SignJWT({ username, role: "admin" })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("24h")
        .sign(JWT_SECRET)

      // Set HTTP-only cookie
      const cookieStore = await cookies()
      cookieStore.set("admin-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      })

      return NextResponse.json({
        success: true,
        message: "Login successful",
        user: { username, role: "admin" },
      })
    }

    // Try database authentication (for future use)
    try {
      const result = await query("SELECT * FROM admin_users WHERE username = $1 AND status = 'active'", [username])

      if (result.rows.length === 0) {
        return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
      }

      const user = result.rows[0]
      // In production, use proper password hashing (bcrypt)
      // For now, just check if password matches
      if (user.password_hash === password) {
        // Create JWT token
        const token = await new SignJWT({ username: user.username, role: user.role })
          .setProtectedHeader({ alg: "HS256" })
          .setIssuedAt()
          .setExpirationTime("24h")
          .sign(JWT_SECRET)

        // Set HTTP-only cookie
        const cookieStore = await cookies()
        cookieStore.set("admin-token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24, // 24 hours
          path: "/",
        })

        return NextResponse.json({
          success: true,
          message: "Login successful",
          user: { username: user.username, role: user.role },
        })
      }
    } catch (dbError) {
      console.log("Database auth failed, using demo credentials only")
    }

    return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Login failed",
      },
      { status: 500 },
    )
  }
}
