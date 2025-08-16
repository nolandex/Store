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
    const { reference, status, amount, customer_name, customer_email } = callbackData

    switch (status) {
      case "PAID":
        // Pembayaran berhasil
        await handleSuccessfulPayment(reference, customer_email, amount)
        break

      case "EXPIRED":
        // Pembayaran expired
        await handleExpiredPayment(reference)
        break

      case "FAILED":
        // Pembayaran gagal
        await handleFailedPayment(reference)
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
async function handleSuccessfulPayment(reference: string, email: string, amount: number) {
  try {
    // TODO: Update database - ubah status order jadi "paid"
    // TODO: Kirim email konfirmasi ke customer
    // TODO: Buka akses kursus untuk user
    // TODO: Log transaksi

    console.log(`[v0] Payment successful: ${reference}, ${email}, ${amount}`)

    // Contoh update database (sesuaikan dengan struktur database Anda)
    // await updateOrderStatus(reference, 'paid')
    // await grantCourseAccess(email, reference)
    // await sendConfirmationEmail(email, reference)
  } catch (error) {
    console.error("[v0] Error handling successful payment:", error)
  }
}

// Fungsi handle pembayaran expired
async function handleExpiredPayment(reference: string) {
  try {
    // TODO: Update status order jadi "expired"
    console.log(`[v0] Payment expired: ${reference}`)
  } catch (error) {
    console.error("[v0] Error handling expired payment:", error)
  }
}

// Fungsi handle pembayaran gagal
async function handleFailedPayment(reference: string) {
  try {
    // TODO: Update status order jadi "failed"
    console.log(`[v0] Payment failed: ${reference}`)
  } catch (error) {
    console.error("[v0] Error handling failed payment:", error)
  }
}
