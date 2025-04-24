"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson22() {

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
    <div className='w-full min-h-screen px-0 md:px-12  '>
      
      <SectionTopComponent 
  title="Zvratná zájmena v češtině 'se' a 'si' - Los pronombres reflexivos checos 'se' y 'si' "
  description="Descubre la diferencia entre 'se' y 'si' en checo, cómo se usan con los verbos reflexivos, y aprende con ejemplos claros y útiles."
/>

{/* <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
<div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 También puedes ver el contenido de esta clase en este vídeo:{" "}
      </p>
      <a
        href="https://youtu.be/KCtROO4dX6M"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
      </div>
      </section> */}
      
      <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-3xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Diferencia entre <em>"se"</em> y <em>"si"</em> en checo
    </h2>

    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-left">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">"se"</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Significa que la persona hace algo consigo misma. Es como los verbos reflexivos en español:
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
        <li><strong>Me llamo</strong> → <em>Jmenuju se</em></li>
        <li><strong>Me ducho</strong> → <em>Sprchuji se</em></li>
      </ul>
      <p className="text-gray-600 dark:text-gray-400"><em>"se"</em> está en el <strong>acusativo (4to caso)</strong>.</p>
    </div>

    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg w-full text-left">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">"si"</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Significa que la persona hace algo para sí misma, para su beneficio. Normalmente está acompañado de un sustantivo.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-2">
        <li><strong>Me compro un café</strong> → <em>Koupím si kávu</em></li>
        <li><strong>Me deseo un regalo</strong> → <em>Přeju si dárek</em></li>
      </ul>
      <p className="text-gray-600 dark:text-gray-400"><em>"si"</em> está en el <strong>dativo (3er caso)</strong> y el sustantivo en acusativo.</p>
    </div>
  </div>
</section>



<section className="mt-6 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-3xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Ejemplos prácticos con <em>"se"</em> y <em>"si"</em>
    </h2>

    <div className="w-full text-left bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Koupím chleba</strong> → Compro pan  
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        La acción se realiza sobre el pan, pero no está claro para quién es.
      </p>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Koupím si chleba</strong> → Me compro pan
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        La acción se realiza sobre el pan y es <strong>para mí</strong>.
      </p>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Sprchuji se</strong> → Me ducho
      </p>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        La acción se hace completamente sobre mí mismo.
      </p>

      <p className="mb-2 text-gray-700 dark:text-gray-300">
        <strong>Sprchuji si vlasy</strong> → Me ducho el pelo
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        La acción es <strong>para mí</strong>, pero se realiza sobre <em>una parte de mi cuerpo</em>.
      </p>
    </div>
  </div>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col gap-4">
  <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
    Verbos en checo que usan solo <span className="text-blue-600">„se“</span>
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center">
    Algunos verbos checos se usan siempre con <strong>“se”</strong>, y no existen sin este pronombre reflexivo.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-100">
    <ul className=" list-inside space-y-1">   
      <li><strong>jmenovat se</strong> – llamarse</li>
      <li><strong>učit se</strong> – aprender</li>
      <li><strong>smát se</strong> – reírse</li>
      <li><strong>bát se</strong> – tener miedo</li>
      <li><strong>těšit se</strong> – tener ganas</li>
    </ul>
    <ul className=" list-inside space-y-1">
      <li><strong>zlobit se</strong> – enfadarse</li>
      <li><strong>nudit se</strong> – aburrirse</li>
      <li><strong>stydět se</strong> – avergonzarse</li>
      <li><strong>divit se</strong> – sorprenderse</li>
      <li><strong>omlouvat se</strong> – disculparse</li>
    </ul>
  </div>

  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
    <p><strong>Jmenuji se</strong> Martin</p>
    <p><strong>Učím se</strong> česky</p>
    <p><strong>Směju se</strong></p>
    <p><strong>Bojím se</strong> psa</p>
    <p><strong>Těším se</strong> na léto</p>
    <p><strong>Zlobím se</strong> na syna</p>
    <p><strong>Nudím se</strong></p>
    <p><strong>Stydím se</strong> mluvit česky</p>
    <p><strong>Divím se</strong></p>
    <p><strong>Omlouvám se</strong></p>
  </div>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col gap-4">
  <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
    Verbos que pueden usarse con o sin <span className="text-blue-600">pronombre reflexivo</span>
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center">
    Algunos verbos checos pueden usarse tanto en forma reflexiva como no reflexiva, según el significado o la intención.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-100">
    <div>
      <h3 className="font-semibold text-lg mb-2">Checo</h3>
      <ul className=" list-inside space-y-1">
        <li><strong>Vzbudím se v osm</strong> – vzbudit se</li>
        <li><strong>Myju se</strong> – mýt se</li>
        <li><strong>Myju si obličej</strong> – mýt si</li>
        <li><strong>Čistím si zuby</strong> – čistit si</li>
        <li><strong>Připravím oběd</strong> – připravit</li>
        <li><strong>Připravím si oběd</strong> – připravit si</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">Español</h3>
      <ul className="list-inside space-y-1">
        <li><strong>Me despierto a las ocho</strong> – despertarse</li>
        <li><strong>Me lavo</strong> – lavarse</li>
        <li><strong>Me lavo la cara</strong></li>
        <li><strong>Me cepillo los dientes</strong> – cepillar / limpiar</li>
        <li><strong>Preparo el almuerzo</strong> – preparar</li>
        <li><strong>Me preparo el almuerzo</strong></li>
      </ul>
    </div>
  </div>

  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
    ➤ Cuando usamos <strong>“si”</strong> en checo, normalmente hablamos de hacer algo *para uno mismo*, como “prepararse la comida” o “lavarse la cara”.
  </p>
</section>






<div className="overflow-x-auto mt-4">
  <h1 className="mt-4 text-xl font-bold text-center">Ejemplos - Příklady</h1>
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky / En checo</TableHead>
        <TableHead className="text-center">Španělsky / En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[
       { cs: "Ahoj, jmenuji se Juan a učím se česky.", es: "Hola, me llamo Juan y estoy aprendiendo checo", file: "cs-CZ-VlastaNeural.mp3" },
       { cs: "Omlouvám se, nemluvím dobře česky.", es: "Me disculpo, no hablo bien checo", file: "cs-CZ-VlastaNeural (1).mp3" },
       { cs: "Dnes se nudím. Půjdu do obchodu. Koupím si tam knihu.", es: "Hoy me aburro. Iré a la tienda. Me compraré un libro allí", file: "cs-CZ-VlastaNeural (2).mp3" },
       { cs: "Sprchuji se každý den.", es: "Me ducho todos los días", file: "cs-CZ-VlastaNeural (3).mp3" },
       { cs: "Nyní si sprchuji vlasy.", es: "Ahora me lavo el pelo", file: "cs-CZ-VlastaNeural (4).mp3" },
       { cs: "Sprchuji si vlasy často.", es: "Me lavo el pelo a menudo", file: "cs-CZ-VlastaNeural (5).mp3" },
       { cs: "Umývám auto.", es: "Lavo el coche", file: "cs-CZ-VlastaNeural (6).mp3" },
       { cs: "Umyju si auto.", es: "Me lavo el coche", file: "cs-CZ-VlastaNeural (7).mp3" },
       { cs: "Vařím oběd.", es: "Cocino el almuerzo", file: "cs-CZ-VlastaNeural (8).mp3" },
       { cs: "Vařím si oběd.", es: "Me cocino el almuerzo", file: "cs-CZ-VlastaNeural (9).mp3" },
       { cs: "Dívám se na film.", es: "Estoy viendo una película", file: "cs-CZ-VlastaNeural (10).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson22/${file}`)}
              className={`${
                isPlayingAll || isPlayingOne
                  ? "dark:text-gray-600 text-gray-300"
                  : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
              }`}
              disabled={isPlayingAll || isPlayingOne}
              aria-label={cs}
            >
              <FaPlay size={20} />
            </button>
          </TableCell>
          <TableCell>{cs}</TableCell>
          <TableCell>{es}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>




  </div>
  )
}

export default lesson22