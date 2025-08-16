import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

// GET /api/admin/products - Get all products
export async function GET() {
  try {
    const result = await query(`
      SELECT 
        id, name, description, price, image_url, category_id, 
        status, featured, created_at, updated_at
      FROM products 
      ORDER BY created_at DESC
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
        error: error instanceof Error ? error.message : "Failed to fetch products",
      },
      { status: 500 },
    )
  }
}

// POST /api/admin/products - Create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, price, image_url, category_id, status, featured } = body

    // Validate required fields
    if (!name || !description) {
      return NextResponse.json({ success: false, error: "Name and description are required" }, { status: 400 })
    }

    const result = await query(
      `
      INSERT INTO products (name, description, price, image_url, category_id, status, featured, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP)
      RETURNING *
    `,
      [name, description, price || 0, image_url, category_id, status || "active", featured || false],
    )

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: "Product created successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to create product",
      },
      { status: 500 },
    )
  }
}
