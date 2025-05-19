import Image from "next/image";
import Logo from "@/public/man1.png";
import Link from "next/link";

function page() {
  return (
    <div className="w-full mt-8 flex flex-col items-center justify-center">

          <div className="flex items-center text-lg">
          
            <span className=" text-xl animate-growBold ">Aleš KRUBA</span>
          </div>

  
          <div className="flex items-center mt-6">
            <p className="text-lg">Brno, Czech Republic</p> {/* Agregué una línea adicional para ubicación escrita */}
          </div>

          <div className=" flex items-center mt-2">
            <Link href="mailto:aleskruba@dokram.com" className="text-lg hover:text-blue-500">
              ales.aprendercheco@gmail.com
            </Link>
          </div>
          <div className="mt-8">
          <Image
  src={Logo}  // Cesta k obrázku
  alt="Logo"  // Alternativní text pro obrázek
  width={256}  // Určete šířku obrázku
  height={256}  // Určete výšku obrázku
  className="rounded-3xl"  // CSS třída pro zaoblené rohy
  loading="lazy"  // Lazy loading pro zlepšení výkonu
  decoding="async"  // Asynchronní dekódování pro lepší výkon
/>


          </div>
     <div className="flex flex-col items-center text-center mt-6 ">
  <p className="text-xs animate-growBold  mb-2">
    amatérský učitel češtiny  
  </p>
  <p className="text-xs italic">
     profesor de checo (aficionado)
  </p>

  <p className="text-xs  animate-growBold mb-1 mt-4">
    amaterský web developer
  </p>
 <p className="text-xs italic">
      desarrollador web (más o menos)
  </p>


</div>
    </div>
  );
}

export default page;
