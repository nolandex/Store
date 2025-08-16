// Utility functions untuk Tripay integration

export interface TripayTransaction {
  method: string
  merchant_ref: string
  amount: number
  customer_name: string
  customer_email: string
  customer_phone: string
  order_items: Array<{
    sku: string
    name: string
    price: number
    quantity: number
  }>
  return_url: string
  expired_time: number
  signature: string
}

export function createTripaySignature(
  merchantCode: string,
  merchantRef: string,
  amount: number,
  privateKey: string,
): string {
  const data = merchantCode + merchantRef + amount
  return require("crypto").createHmac("sha256", privateKey).update(data).digest("hex")
}

export function generateMerchantRef(): string {
  return "BISNOVO-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9)
}

// Fungsi untuk membuat transaksi Tripay
export async function createTripayTransaction(
  courseId: string,
  courseName: string,
  price: number,
  customerData: {
    name: string
    email: string
    phone: string
  },
): Promise<any> {
  const merchantCode = process.env.TRIPAY_MERCHANT_CODE!
  const privateKey = process.env.TRIPAY_PRIVATE_KEY!
  const apiKey = process.env.TRIPAY_API_KEY!

  const merchantRef = generateMerchantRef()
  const signature = createTripaySignature(merchantCode, merchantRef, price, privateKey)

  const data: TripayTransaction = {
    method: "BRIVA", // atau method lain
    merchant_ref: merchantRef,
    amount: price,
    customer_name: customerData.name,
    customer_email: customerData.email,
    customer_phone: customerData.phone,
    order_items: [
      {
        sku: courseId,
        name: courseName,
        price: price,
        quantity: 1,
      },
    ],
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
    expired_time: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 jam
    signature: signature,
  }

  const response = await fetch("https://tripay.co.id/api-sandbox/transaction/create", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return response.json()
}
