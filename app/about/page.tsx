import BottomNavbar from "@/components/bottom-navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tentang Bisnovo Learning</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bisnovo Learning adalah platform pembelajaran bisnis digital terkemuka yang berkomitmen untuk membantu
          entrepreneur Indonesia memulai dan mengembangkan bisnis digital mereka. Kami menyediakan panduan lengkap dari
          berbagai jenis bisnis jasa digital dengan modal yang bervariasi.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Didirikan pada tahun 2023, Bisnovo Learning berawal dari visi untuk menciptakan ekosistem pembelajaran bisnis
          yang praktis dan aplikatif. Kami memahami bahwa setiap orang memiliki modal dan kemampuan yang berbeda, oleh
          karena itu kami menyediakan pilihan bisnis dari modal gratis hingga puluhan juta rupiah.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dengan lebih dari 20+ jenis bisnis digital seperti jasa pembuatan website, digital marketing, design services,
          e-commerce, consulting, dan banyak lagi, kami memiliki solusi bisnis untuk setiap level entrepreneur. Setiap
          kelas dilengkapi dengan informasi modal yang dibutuhkan dan tingkat kesulitan yang jelas.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Tim kami terdiri dari praktisi bisnis digital yang telah berpengalaman puluhan tahun. Setiap materi disusun
          berdasarkan pengalaman nyata dan case study yang telah terbukti berhasil. Mari mulai perjalanan bisnis digital
          Anda bersama Bisnovo Learning!
        </p>
      </main>
      <BottomNavbar />
    </div>
  )
}
