import Image from "next/image"
import type { Product } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={120}
          className="w-full h-30 object-cover"
        />
        <div className="p-3 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 truncate mb-1">{product.name}</h3>
            <div className="flex items-center justify-center mt-2">
              <Button className="bg-bisnovoBlue-500 hover:bg-bisnovoBlue-600 text-white text-xs py-1 h-auto px-3 w-full">
                Pilih
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
