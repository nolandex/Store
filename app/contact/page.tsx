import BottomNavbar from "@/components/bottom-navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export default function ContactPage() {
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
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hubungi Kami</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Kami senang mendengar dari Anda! Jika Anda memiliki pertanyaan tentang kursus, teknis, atau ingin memberikan
          feedback, jangan ragu untuk menghubungi kami melalui salah satu metode di bawah ini.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="h-5 w-5 text-bisnovoBlue-500" />
            <span>Email: support@bisnovolearning.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <PhoneIcon className="h-5 w-5 text-bisnovoBlue-500" />
            <span>Telepon: (021) 123-4567</span>
          </div>
          <div className="flex items-start gap-3 text-gray-700">
            <MapPinIcon className="h-5 w-5 text-bisnovoBlue-500 flex-shrink-0 mt-1" />
            <span>Alamat: Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia</span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Jam Operasional Customer Support</h2>
          <p className="text-gray-700">Senin - Jumat: 09:00 - 18:00 WIB</p>
          <p className="text-gray-700">Sabtu: 09:00 - 15:00 WIB</p>
          <p className="text-gray-700">Minggu: Tutup</p>
        </div>

        <div className="mt-8 p-4 bg-bisnovoBlue-50 rounded-lg">
          <h3 className="font-semibold text-bisnovoBlue-800 mb-2">FAQ & Help Center</h3>
          <p className="text-bisnovoBlue-700 text-sm">
            Sebelum menghubungi kami, coba cek FAQ dan Help Center kami untuk jawaban cepat atas pertanyaan umum.
          </p>
        </div>
      </main>
      <BottomNavbar />
    </div>
  )
}
