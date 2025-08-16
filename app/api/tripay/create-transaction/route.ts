import { type NextRequest, NextResponse } from "next/server"
import { tripayClient } from "@/lib/tripay-client"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { courseId, customerName, customerEmail, customerPhone } = body

    // TODO: Get course details from database
    // For now, using mock data
    const course = {
      id: courseId,
      name: "Sample Course",
      price: 299000,
    }

    const merchantRef = `COURSE-${courseId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const transactionData = {
      method: "BRIVA", // Default payment method, bisa diubah
      merchant_ref: merchantRef,
      amount: course.price,
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      order_items: [
        {
          sku: course.id,
          name: course.name,
          price: course.price,
          quantity: 1,
        },
      ],
      callback_url: `${baseUrl}/api/tripay/callback`,
      return_url: `${baseUrl}/payment/success?ref=${merchantRef}`,
      expired_time: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 jam
    }

    const transaction = await tripayClient.createTransaction(transactionData)

    return NextResponse.json({
      success: true,
      data: {
        reference: transaction.reference,
        merchant_ref: merchantRef,
        checkout_url: transaction.checkout_url,
        qr_url: transaction.qr_url,
      },
    })
  } catch (error) {
    console.error("[v0] Transaction creation error:", error)
    return NextResponse.json({ success: false, error: "Failed to create transaction" }, { status: 500 })
  }
}
