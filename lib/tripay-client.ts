import crypto from "crypto"

interface TripayConfig {
  merchantCode: string
  apiKey: string
  privateKey: string
  baseUrl: string
}

interface CreateTransactionData {
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
  callback_url: string
  return_url: string
  expired_time: number
}

export class TripayClient {
  private config: TripayConfig

  constructor() {
    this.config = {
      merchantCode: process.env.TRIPAY_MERCHANT_CODE || "",
      apiKey: process.env.TRIPAY_API_KEY || "",
      privateKey: process.env.TRIPAY_PRIVATE_KEY || "",
      baseUrl: process.env.NODE_ENV === "production" ? "https://tripay.co.id/api" : "https://tripay.co.id/api-sandbox",
    }
  }

  private generateSignature(data: string): string {
    return crypto.createHmac("sha256", this.config.privateKey).update(data).digest("hex")
  }

  async getPaymentChannels() {
    try {
      const response = await fetch(`${this.config.baseUrl}/merchant/payment-channel`, {
        headers: {
          Authorization: `Bearer ${this.config.apiKey}`,
          "Content-Type": "application/json",
        },
      })

      return await response.json()
    } catch (error) {
      console.error("[v0] Error fetching payment channels:", error)
      throw error
    }
  }

  async createTransaction(data: CreateTransactionData) {
    try {
      const payload = {
        ...data,
        merchant_code: this.config.merchantCode,
        signature: this.generateSignature(this.config.merchantCode + data.merchant_ref + data.amount),
      }

      const response = await fetch(`${this.config.baseUrl}/transaction/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.config.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || "Transaction creation failed")
      }

      return result.data
    } catch (error) {
      console.error("[v0] Error creating transaction:", error)
      throw error
    }
  }

  async getTransactionDetail(reference: string) {
    try {
      const signature = this.generateSignature(this.config.merchantCode + reference)

      const response = await fetch(
        `${this.config.baseUrl}/transaction/detail?reference=${reference}&signature=${signature}`,
        {
          headers: {
            Authorization: `Bearer ${this.config.apiKey}`,
            "Content-Type": "application/json",
          },
        },
      )

      return await response.json()
    } catch (error) {
      console.error("[v0] Error fetching transaction detail:", error)
      throw error
    }
  }
}

export const tripayClient = new TripayClient()
