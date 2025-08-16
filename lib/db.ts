import { Pool } from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // penting untuk Neon
  },
})

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params)
  return res
}

// Helper function untuk testing connection
export async function testConnection() {
  try {
    const result = await query("SELECT NOW() as current_time")
    return { success: true, data: result.rows[0] }
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}
