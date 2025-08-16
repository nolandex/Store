import type { Product } from "@/lib/data"
import ProductCard from "./product-card"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="py-4 px-4 md:px-6 bg-gray-50">
      {" "}
      {/* Mengurangi padding vertikal */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
        {" "}
        {/* Mengurangi gap antar produk */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-600 mt-8">Tidak ada produk ditemukan untuk kategori ini.</p>
      )}
    </section>
  )
}
