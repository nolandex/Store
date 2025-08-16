import BottomNavbar from "@/components/bottom-navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16">
      <main className="flex-grow p-4 md:p-6 max-w-4xl mx-auto w-full">
        <div className="mb-6">
          <Link href="/" passHref>
            <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
              &larr; Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tentang Bisnovo Learning</h1>

        <div className="space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              Bisnovo Learning adalah platform pembelajaran bisnis digital terkemuka yang berkomitmen untuk membantu
              entrepreneur Indonesia memulai dan mengembangkan bisnis digital mereka. Kami menyediakan panduan lengkap
              dari berbagai jenis bisnis jasa digital dengan modal yang bervariasi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dengan lebih dari 20+ jenis bisnis digital seperti jasa pembuatan website, digital marketing, design
              services, e-commerce, consulting, dan banyak lagi, kami memiliki solusi bisnis untuk setiap level
              entrepreneur. Setiap kelas dilengkapi dengan informasi modal yang dibutuhkan dan tingkat kesulitan yang
              jelas.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tim kami terdiri dari praktisi bisnis digital yang telah berpengalaman puluhan tahun. Setiap materi
              disusun berdasarkan pengalaman nyata dan case study yang telah terbukti berhasil. Mari mulai perjalanan
              bisnis digital Anda bersama Bisnovo Learning!
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Syarat dan Ketentuan</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">1. Ketentuan Umum</h3>
                <p className="text-sm leading-relaxed">
                  Dengan mengakses dan menggunakan platform Bisnovo Learning, Anda menyetujui untuk terikat dengan
                  syarat dan ketentuan yang berlaku. Platform ini menyediakan layanan pembelajaran bisnis digital dalam
                  bentuk kursus online, materi pembelajaran, dan konsultasi.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">2. Pembelian dan Pembayaran</h3>
                <p className="text-sm leading-relaxed">
                  Semua harga yang tercantum dalam platform ini adalah dalam mata uang Rupiah (IDR). Pembayaran dapat
                  dilakukan melalui berbagai metode yang tersedia melalui gateway pembayaran Tripay. Setelah pembayaran
                  berhasil, akses kursus akan diberikan secara otomatis ke akun Anda.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Akses dan Penggunaan Konten</h3>
                <p className="text-sm leading-relaxed">
                  Setelah pembelian, Anda mendapatkan akses seumur hidup ke materi kursus yang dibeli. Konten tidak
                  boleh dibagikan, didistribusikan, atau digunakan untuk kepentingan komersial tanpa izin tertulis dari
                  Bisnovo Learning.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">4. Kebijakan Refund</h3>
                <p className="text-sm leading-relaxed">
                  Kami menyediakan garansi 30 hari uang kembali jika Anda tidak puas dengan kursus yang dibeli.
                  Permintaan refund harus diajukan maksimal 30 hari setelah pembelian dengan menyertakan alasan yang
                  jelas.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">5. Sertifikat</h3>
                <p className="text-sm leading-relaxed">
                  Sertifikat penyelesaian akan diberikan setelah Anda menyelesaikan seluruh modul dalam kursus.
                  Sertifikat dapat diunduh dalam format PDF dan dapat digunakan untuk keperluan profesional.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kebijakan Privasi</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Pengumpulan Data</h3>
                <p className="text-sm leading-relaxed">
                  Kami mengumpulkan informasi yang Anda berikan saat mendaftar, membeli kursus, atau berinteraksi dengan
                  platform kami. Data ini digunakan untuk memberikan layanan terbaik dan meningkatkan pengalaman
                  pembelajaran Anda.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Keamanan Data</h3>
                <p className="text-sm leading-relaxed">
                  Kami berkomitmen untuk melindungi data pribadi Anda dengan menggunakan teknologi keamanan terkini.
                  Data Anda tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda, kecuali untuk keperluan
                  pemrosesan pembayaran dan layanan terkait.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <BottomNavbar />
    </div>
  )
}
