import Image from "next/image";
import Logo from "@/public/man1.png";
import Link from "next/link";

function page() {
  return (
    <div className="w-full mt-8 flex flex-col items-center justify-center">

          <div className="flex items-center text-lg">
          
            <span className="font-bold text-2xl">Aleš Kruba</span>
          </div>

  
          <div className="flex items-center">
            <p className="text-lg">Brno, Czech Republic</p> {/* Agregué una línea adicional para ubicación escrita */}
          </div>

          <div className="mt-16 flex items-center">
            <Link href="mailto:aleskruba@dokram.com" className="text-lg hover:text-blue-500">
              ales.aprendercheco@gmail.com
            </Link>
          </div>
          <div className="mt-8">
          <Image
                    src={Logo}
                    alt="Logo"
                    className="size-64 rounded-full"
                    width={395} // Nastavte šířku na skutečnou šířku obrázku
      height={343} // Nastavte výšku na skutečnou výšku obrázku
      loading="lazy"
      decoding="async"
                />

          </div>
     
    </div>
  );
}

export default page;
