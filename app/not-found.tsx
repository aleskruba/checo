import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Emoji from "@/public/emoji.png"
export default function NotFoundPage() {

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center space-y-8">
  <h1 className="text-3xl font-bold drop-shadow-lg">Tato stránka neexistuje, kámo 😢</h1>
  <h1 className="text-2xl font-semibold drop-shadow-lg">Esta página no existe</h1>
  <Image
  src={Emoji}  // Cesta k obrázku
  alt="emoji"  // Alternativní text pro obrázek
  width={128}  // Určete šířku obrázku (32 x 4 = 128px)
  height={128}  // Určete výšku obrázku (32 x 4 = 128px)
  className="animate-bounce drop-shadow-lg"  // CSS třídy pro animaci a stín
  loading="lazy"  // Lazy loading pro zlepšení výkonu
  decoding="async"  // Asynchronní dekódování pro lepší výkon
/>

  <Link 
    href={BASE_URL} 
    className="mt-4 px-6 py-3 bg-white text-blue-600 rounded-full text-lg font-medium shadow-md hover:shadow-lg hover:bg-blue-100 transition duration-300"
  >
    Zpět / Atrás
  </Link>
</div>

  )
}
