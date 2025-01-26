
import Image from "next/image";

import Italki from "@/public/italki.png"

export default async function Home() {


  return (

    <div className="mt-8 md:mt-0">
<section className="pl-2 pr-2 max-w-4xl mx-auto  text-left">
  <h1 className="font-bold mb-4 dark:text-blue-400 text-blue-700">¡Hola, bienvenidos a la página para aprender checo!</h1>
  <p className="mb-2">
    Me llamo Aleš y he creado esta página para ayudar a personas de habla hispana a aprender los fundamentos del idioma checo.
    Llevo cinco años aprendiendo español, y sé lo difícil que puede ser dominar un idioma nuevo.
  </p>
  <p className="mb-2">
    Me encanta la cultura latina y su gente. Tengo muchos amigos latinos que me han ayudado a mejorar mi español, y estoy muy agradecido por su apoyo.
  </p>
  <p className="mb-2">
    En esta página encontrarás las bases de la gramática checa, vocabulario útil y frases comunes. También podrás escuchar las frases y poner a prueba tus conocimientos con ejercicios interactivos.
  </p>
  <div className="mb-4 flex items-center justify-start">
  <p className="inline">
    Si estás interesado, también ofrezco clases de conversación en checo a través de la plataforma{" "}
    <a href="https://www.italki.com" target="_blank" rel="noopener noreferrer" className="inline">

    </a>
    <Image
      src={Italki} // Example URL for italki badge
      alt="italki Banner"
      className="inline-block w-12 h-auto ml-2 p-1" // Adjust size and margin-left as needed
    />
  </p>
</div>

  <p>Todo el contenido de esta página es completamente gratis. ¡Te deseo mucho éxito en tu aprendizaje!</p>
</section>

<section className="pl-2 pr-2 max-w-4xl mx-auto  text-left my-4">
<h1 className="font-bold mb-4 dark:text-red-500 text-red-700">Ahoj, vítejte na stránce pro výuku češtiny!</h1>

  <p className="mb-2">
    Jmenuji se Aleš a vytvořil jsem tuto stránku, abych pomohl španělsky mluvícím lidem naučit se základy českého jazyka.
    Sám se již pět let učím španělsky a dobře vím, jak náročné může být osvojit si nový jazyk.
  </p>
  <p className="mb-2">
    Latinská kultura a lidé mě inspirují a mám mezi nimi mnoho přátel, kteří mi pomohli zlepšit moji španělštinu. Za jejich podporu jsem velmi vděčný.
  </p>
  <p className="mb-2">
    Na těchto stránkách najdete základy české gramatiky, užitečná slovíčka a fráze. Zároveň budete moci poslouchat jednotlivé fráze a vyzkoušet si testy na ověření vašich znalostí.
  </p>

  <div className="mb-4 flex items-center">
  <p className="mr-2">
    Pokud budete mít zájem, nabízím také konverzační kurzy češtiny přes aplikaci{" "}
    <a href="https://www.italki.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
  
      <Image
        src={Italki} // Example URL for italki badge
        alt="italki Banner"
        className="w-12 h-auto ml-2 p-1" // Adjust size and margin-left as needed
      />
    </a>
  </p>
</div>
  <p>Vše na této stránce je pro vás zcela zdarma. Přeji hodně štěstí při studiu!</p>
</section>

  </div>



  );
}