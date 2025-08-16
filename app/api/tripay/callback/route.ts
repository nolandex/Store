import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Tripay Private Key (simpan di environment variables)
const TRIPAY_PRIVATE_KEY = process.env.TRIPAY_PRIVATE_KEY || "your-private-key"

export async function POST(request: NextRequest) {
  try {
    // Ambil data callback dari Tripay
    const body = await request.text()
    const callbackData = JSON.parse(body)

    // Ambil signature dari header
    const callbackSignature = request.headers.get("x-callback-signature")

    // Buat signature untuk validasi
    const signature = crypto.createHmac("sha256", TRIPAY_PRIVATE_KEY).update(body).digest("hex")

    // Validasi signature (keamanan)
    if (signature !== callbackSignature) {
      console.log("[v0] Invalid signature")
      return NextResponse.json({ success: false }, { status: 401 })
    }

    // Log untuk debugging
    console.log("[v0] Callback received:", callbackData)

    // Proses berdasarkan status pembayaran
    const { reference, status, amount, customer_name, customer_email, merchant_ref } = callbackData

    switch (status) {
      case "PAID":
        // Pembayaran berhasil
        await handleSuccessfulPayment(reference, merchant_ref, customer_email, amount)
        break

      case "EXPIRED":
        // Pembayaran expired
        await handleExpiredPayment(reference, merchant_ref)
        break

      case "FAILED":
        // Pembayaran gagal
        await handleFailedPayment(reference, merchant_ref)
        break

      case "UNPAID":
        // Pembayaran belum dibayar (status awal)
        await handleUnpaidPayment(reference, merchant_ref)
        break
    }

    // Response yang diharapkan Tripay
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Callback error:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

// Fungsi handle pembayaran berhasil
async function handleSuccessfulPayment(reference: string, merchantRef: string, email: string, amount: number) {
  try {
    console.log(
      `[v0] ✅ Payment successful - Reference: ${reference}, Merchant Ref: ${merchantRef}, Email: ${email}, Amount: Rp ${amount.toLocaleString("id-ID")}`,
    )

    // TODO: Update database - ubah status order jadi "paid"
    // TODO: Kirim email konfirmasi ke customer
    // TODO: Buka akses kursus untuk user berdasarkan merchant_ref
    // TODO: Log transaksi ke database
    // TODO: Kirim notifikasi WhatsApp/SMS (optional)

    // Contoh implementasi:
    // const courseId = extractCourseIdFromMerchantRef(merchantRef)
    // await updateOrderStatus(merchantRef, 'paid', reference)
    // await grantCourseAccess(email, courseId)
    // await sendConfirmationEmail(email, merchantRef, amount)
    // await logTransaction(reference, merchantRef, 'success', amount)
  } catch (error) {
    console.error("[v0] Error handling successful payment:", error)
  }
}

// Fungsi handle pembayaran expired
async function handleExpiredPayment(reference: string, merchantRef: string) {
  try {
    console.log(`[v0] ⚠️ Payment expired - Reference: ${reference}, Merchant Ref: ${merchantRef}`)

    // TODO: Update status order jadi "expired"
    // TODO: Kirim email notifikasi expired (optional)
    // await updateOrderStatus(merchantRef, 'expired', reference)
  } catch (error) {
    console.error("[v0] Error handling expired payment:", error)
  }
}

// Fungsi handle pembayaran gagal
async function handleFailedPayment(reference: string, merchantRef: string) {
  try {
    console.log(`[v0] ❌ Payment failed - Reference: ${reference}, Merchant Ref: ${merchantRef}`)

    // TODO: Update status order jadi "failed"
    // TODO: Log reason kegagalan jika ada
    // await updateOrderStatus(merchantRef, 'failed', reference)
  } catch (error) {
    console.error("[v0] Error handling failed payment:", error)
  }
}

// Fungsi handle pembayaran belum dibayar
async function handleUnpaidPayment(reference: string, merchantRef: string) {
  try {
    console.log(`[v0] 🔄 Payment pending - Reference: ${reference}, Merchant Ref: ${merchantRef}`)

    // TODO: Update status order jadi "pending" atau "unpaid"
    // await updateOrderStatus(merchantRef, 'pending', reference)
  } catch (error) {
    console.error("[v0] Error handling unpaid payment:", error)
  }
}
