import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db"

// GET /api/admin/products/[id] - Get single product
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await query(
      `
      SELECT 
        id, name, description, price, image_url, category_id, 
        status, featured, created_at, updated_at
      FROM products 
      WHERE id = $1
    `,
      [params.id],
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch product",
      },
      { status: 500 },
    )
  }
}

// PUT /api/admin/products/[id] - Update product
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const { name, description, price, image_url, category_id, status, featured } = body

    // Validate required fields
    if (!name || !description) {
      return NextResponse.json({ success: false, error: "Name and description are required" }, { status: 400 })
    }

    const result = await query(
      `
      UPDATE products 
      SET name = $1, description = $2, price = $3, image_url = $4, 
          category_id = $5, status = $6, featured = $7, updated_at = CURRENT_TIMESTAMP
      WHERE id = $8
      RETURNING *
    `,
      [name, description, price || 0, image_url, category_id, status || "active", featured || false, params.id],
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
      message: "Product updated successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update product",
      },
      { status: 500 },
    )
  }
}

// DELETE /api/admin/products/[id] - Delete product
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await query(
      `
      DELETE FROM products 
      WHERE id = $1
      RETURNING *
    `,
      [params.id],
    )

    if (result.rows.length === 0) {
      return NextResponse.json({ success: false, error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
      data: result.rows[0],
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to delete product",
      },
      { status: 500 },
    )
  }
}
