"use client"
import Image from "next/image";
import { useAudio } from "./context/AudioContext"; // Import hook
import Italki from "@/public/italki.png"
import { useEffect } from "react";
import Link from "next/link";
import Clases from "@/public/clases.png";
export default  function Home() {

  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio(); // Using context
  useEffect(() => {
    // Stop all audio when the page changes or component unmounts
    if (isPlayingAll || isPlayingOne) {
      stopAllAudio();
    }

    return () => {
      if (isPlayingAll || isPlayingOne) {
        stopAllAudio();
      }
    };
  }, []);

  

    return (

    <div className="mt-8 md:mt-0">
<section className="pl-2 pr-2 max-w-4xl mx-auto  text-left">
  <h1 className="font-bold mb-4 dark:text-blue-400 text-blue-700">¡Hola, bienvenidos a la página para aprender checo!</h1>
  <p className="mb-2">
  Me llamo Aleš y he creado esta página para ayudar a personas de habla hispana y portuguesa a aprender los fundamentos del idioma checo.
    Llevo seis años aprendiendo español, y sé lo difícil que puede ser dominar un idioma nuevo.
  </p>
  <p className="mb-2">
    Me encanta la cultura latina y su gente. Tengo muchos amigos latinos que me han ayudado a mejorar mi español, y estoy muy agradecido por su apoyo.
  </p>
  <p className="mb-2">
    En esta página encontrarás las bases de la gramática checa, vocabulario útil y frases comunes. También podrás escuchar las frases y poner a prueba tus conocimientos con ejercicios interactivos.
  </p>
  <div className="mb-4 flex md:flex-row flex-col items-center justify-start">
  <p className="mr-2 text-black dark:text-white font-bold">
  Si te interesa, también ofrezco clases de conversación en checo. Estaré muy feliz de ver tu progreso en mis clases.
 
  </p>
  <div className="flex items-center min-w-[280px]  justify-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <Link href="/clases" className="hover:scale-105 transform transition-all duration-300">
                                <Image
                              src={Clases}
                              alt="Clases"
                              className="w-56 h-20 rounded-xl"
                              width={395} // Nastavte šířku na skutečnou šířku obrázku
                              height={343} // Nastavte výšku na skutečnou výšku obrázku
                              loading="lazy"
                              decoding="async"
                            />
                        </Link>

                        </div>
</div> 

  <p>Todo el contenido de esta página es completamente gratis. ¡Te deseo mucho éxito en tu aprendizaje!</p>
</section>

<section className="pl-2 pr-2 max-w-4xl mx-auto  text-left my-4">
<h1 className="font-bold mb-4 dark:text-red-500 text-red-700">Ahoj, vítejte na stránce pro výuku češtiny!</h1>

  <p className="mb-2">
  Jmenuji se Aleš a vytvořil jsem tuto stránku, abych pomohl španělsky a portugalsky mluvícím lidem naučit se základy českého jazyka.
      Sám se již šest let učím španělsky a dobře vím, jak náročné může být osvojit si nový jazyk.
  </p>
  <p className="mb-2">
    Latinská kultura a lidé mě inspirují a mám mezi nimi mnoho přátel, kteří mi pomohli zlepšit moji španělštinu. Za jejich podporu jsem velmi vděčný.
  </p>
  <p className="mb-2">
    Na těchto stránkách najdete základy české gramatiky, užitečná slovíčka a fráze. Zároveň budete moci poslouchat jednotlivé fráze a vyzkoušet si testy na ověření vašich znalostí.
  </p>

 <div className="mb-4 flex items-center">
 <p className="mr-2 text-black dark:text-white font-bold">
 Pokud bys měl/a zájem, nabízím také konverzační lekce češtiny. Bude mě moc těšit sledovat, jak se zlepšuješ!

  </p>
</div> 
  <p>Vše na této stránce je pro vás zcela zdarma. Přeji hodně štěstí při studiu!</p>
</section>

  </div>



  );
}