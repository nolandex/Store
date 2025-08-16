import Image from "next/image"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import BottomNavbar from "@/components/bottom-navbar"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 pb-16">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h1>
        <p className="text-gray-600 mb-6">Maaf, produk yang Anda cari tidak tersedia.</p>
        <Link href="/" passHref>
          <Button className="bg-bisnovoBlue-500 hover:bg-bisnovoBlue-600 text-white">Kembali ke Beranda</Button>
        </Link>
        <BottomNavbar />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <main className="flex-grow p-4 md:p-6 max-w-2xl mx-auto w-full">
        <div className="mb-6">
          <Link href="/" passHref>
            <Button variant="ghost" className="text-bisnovoBlue-600 hover:text-bisnovoBlue-700">
              &larr; Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <Button className="w-full bg-bisnovoBlue-500 hover:bg-bisnovoBlue-600 text-white text-lg py-3">
            Gunakan Sekarang
          </Button>
        </div>
      </main>
      <BottomNavbar />
    </div>
  )
}
