"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson20() {

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
  title="Jet vs. Jezdit – Verbos de movimiento"
  description="Aprende cómo usar correctamente los verbos checos 'jet' y 'jezdit', su conjugación y la diferencia entre ellos."
/>

{/* <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
<div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 También puedes ver el contenido de esta clase en este vídeo:{" "}
      </p>
      <a
        href="https://youtu.be/wMz2WnJI4pI"
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
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
      En esta lección, aprenderemos cómo usar correctamente los verbos checos <strong>“jet”</strong> y <strong>“jezdit”</strong>, su conjugación y la diferencia entre ellos. Son verbos esenciales para hablar sobre movimiento en checo.
    </p>
  </div>
    <div className="relative">
    <Image
  src={Bus}  // Cesta k obrázku
  alt="jit,jezdit"  // Alternativní text pro obrázek
  className="rounded-lg float-left mr-4"  // CSS třídy pro styling
  width={250}  // Skutečná šířka obrázku
  height={250}  // Skutečná výška obrázku
  loading="lazy"  // Lazy loading pro zlepšení výkonu
  decoding="async"  // Asynchronní dekódování pro lepší výkon
/>
    </div>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-6 w-full">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
    Conjugación del verbo "jít" (ir a pie)
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende cómo se conjuga en checo el verbo <strong>"jít"</strong>, que significa <em>"ir a pie"</em> en español. Este verbo se usa para describir una acción que ocurre una vez o en este momento.
  </p>

  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <tr>
          <th className="px-4 py-2">Checo</th>
          <th className="px-4 py-2">Español</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {[
          ["já jdu", "yo voy (a pie)"],
          ["ty jdeš", "tú vas"],
          ["on/ona/to jde", "él/ella va"],
          ["my jdeme", "nosotros vamos"],
          ["vy jdete", "vosotros vais / usted va"],
          ["oni jdou", "ellos van"]
        ].map(([cz, es], idx) => (
          <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-2">{cz}</td>
            <td className="px-4 py-2 italic">{es}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-6 w-full">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
    Conjugación del verbo "jezdit" (ir regularmente)
  </h2>

  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    <strong>🧠 ¿Cuál es la diferencia entre “jít” y “jezdit”?</strong><br />
    <br />
    ➤ <strong>“Jít”</strong> = ir a pie <em>una sola vez</em> (ahora, hoy, mañana).  
    <br />
    Ejemplo: <em>Teď <strong>jdu</strong> do školy.</em> → Ahora voy a la escuela.<br /><br />

    ➤ <strong>“Jezdit”</strong> = ir (en transporte) <em>muchas veces</em>, regularmente, en general.  
    <br />
    Ejemplo: <em>Každý den <strong>jezdím</strong> autobusem.</em> → Todos los días voy en autobús.
  </p>

  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <tr>
          <th className="px-4 py-2">Checo</th>
          <th className="px-4 py-2">Español</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {[
          ["já jezdím", "yo voy (regularmente, en transporte)"],
          ["ty jezdíš", "tú vas"],
          ["on/ona/to jezdí", "él/ella va"],
          ["my jezdíme", "nosotros vamos"],
          ["vy jezdíte", "vosotros vais / usted va"],
          ["oni jezdí", "ellos van"]
        ].map(([cz, es], idx) => (
          <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-2">{cz}</td>
            <td className="px-4 py-2 italic">{es}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>



<div className="overflow-x-auto mt-4">
  <h1 className="mt-4">Frases con "jet" y "jezdit" / Frases con verbos de movimiento</h1>
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
        { cs: "Nyní jedu vlakem.", es: "Ahora voy en tren.", file: "cs-CZ-VlastaNeural.mp3" },
        { cs: "Jezdím vlakem každý den.", es: "Voy en tren todos los días.", file: "cs-CZ-VlastaNeural (1).mp3" },
        { cs: "Nyní jedu autem.", es: "Ahora voy en coche.", file: "cs-CZ-VlastaNeural (2).mp3" },
        { cs: "Jezdím autem každý den.", es: "Voy en coche todos los días.", file: "cs-CZ-VlastaNeural (3).mp3" },
        { cs: "Nyní jedu autobusem.", es: "Ahora voy en autobús.", file: "cs-CZ-VlastaNeural (4).mp3" },
        { cs: "Jezdím autobusem často.", es: "Voy en autobús a menudo.", file: "cs-CZ-VlastaNeural (5).mp3" },
        { cs: "Právě jedu na kole.", es: "Ahora mismo voy en bici.", file: "cs-CZ-VlastaNeural (6).mp3" },
        { cs: "Někdy jezdím na kole.", es: "A veces voy en bici.", file: "cs-CZ-VlastaNeural (7).mp3 "},
        { cs: "Teď jedu na motorce.", es: "Ahora voy en moto.", file: "cs-CZ-VlastaNeural (8).mp3" },
        { cs: "Často jezdím na motorce.", es: "Voy en moto a menudo.", file: "cs-CZ-VlastaNeural (9).mp3" },
        { cs: "Ona jezdí vlakem do práce.", es: "Ella va en tren al trabajo.", file: "cs-CZ-VlastaNeural (10).mp3" },
        { cs: "On jede autem do obchodu.", es: "Él va en coche a la tienda.", file: "cs-CZ-VlastaNeural (11).mp3" },
        { cs: "Oni často jezdí autobusem.", es: "Ellos suelen ir en autobús.", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "My jezdíme na kole o víkendu.", es: "Nosotros vamos en bici los fines de semana.", file: "cs-CZ-VlastaNeural (13).mp3" },
        { cs: "Ty jedeš na motorce rychle.", es: "Tú vas rápido en moto.", file: "cs-CZ-VlastaNeural (14).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson20/${file}`)}
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

export default lesson20