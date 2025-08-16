import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

// GET /api/admin/categories - Get all categories
export async function GET() {
  try {
    const result = await query(`
      SELECT 
        id, name, description, icon, color, order_index, 
        status, created_at, updated_at
      FROM categories 
      ORDER BY order_index ASC
    `)

    return NextResponse.json({
      success: true,
      data: result.rows,
      total: result.rows.length,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch categories",
      },
      { status: 500 },
    )
  }
}

// POST /api/admin/categories - Create new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { id, name, description, icon, color, order_index, status } = body

    // Validate required fields
    if (!id || !name) {
      return NextResponse.json({ success: false, error: "ID and name are required" }, { status: 400 })
    }

    const result = await query(
      `
      INSERT INTO categories (id, name, description, icon, color, order_index, status, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)
      RETURNING *
    `,
      [id, name, description, icon, color, order_index || 0, status || "active"],
    )

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: "Category created successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create category",
      },
      { status: 500 },
    )
  }
}
