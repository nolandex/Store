import { cookies } from "next/headers"
import { jwtVerify } from "jose"
import { redirect } from "next/navigation"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production")

export interface AdminUser {
  username: string
  role: string
}

export async function getAdminUser(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin-token")

    if (!token) {
      return null
    }

    const { payload } = await jwtVerify(token.value, JWT_SECRET)
    return payload as AdminUser
  } catch (error) {
    return null
  }
}

export async function requireAdminAuth(): Promise<AdminUser> {
  const user = await getAdminUser()

  if (!user) {
    redirect("/admin/login")
  }

  return user
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const user = await getAdminUser()
  return user !== null
}
