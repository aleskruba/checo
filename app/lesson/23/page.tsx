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
  title="Los pronombres personales en checo - caso DATIVO - 3. pád "
  description="Descubre cómo se usan los pronombres ti, jí, mu... y el reflexivo si con los verbos que requieren el caso dativo en checo."
/>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
<div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 También puedes ver el contenido de esta clase en este vídeo:{" "}
      </p>
      <a
        href="https://youtu.be/Gp2hj1tRgiA"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
      </div>
      </section>
      
      <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-3xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      ¿Qué son los pronombres personales en dativo en checo?
    </h2>
    <p className="text-gray-700 dark:text-gray-300">
      En checo, usamos el caso dativo para indicar a quién va dirigida una acción. Por ejemplo, cuando decimos que alguien <strong>da algo a otra persona</strong> o <strong>hace algo para sí mismo</strong>.
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      Algunos pronombres en dativo son: <strong>mi / mně, ti, mu, jí, nám, vám, jim</strong>. También usamos el pronombre reflexivo <strong>„si“</strong> cuando el sujeto hace algo para sí mismo.
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      Ejemplos:<br />
      ➤ <em>Dám mu dárek.</em> – Le doy un regalo.<br />
      ➤ <em>Ale já si koupím kávu.</em> – Pero yo me compraré un café.
    </p>
  </div>
</section>






<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col gap-4">
  <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
    Los pronombres personales en checo – caso <span className="text-blue-600">dativo</span>
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center">
    En checo, usamos el <strong>caso dativo</strong> para expresar a quién va dirigida una acción, como "dar algo a alguien" o "comprarse algo para uno mismo".
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 dark:text-gray-100 text-sm">
    <ul className="list-inside space-y-1">
      <li><strong>já</strong> – mi (mnĕ) → <em>yo – a mí</em></li>
      <li><strong>ty</strong> – ti (tobě) → <em>tú – a ti</em></li>
      <li><strong>on</strong> – mu (jemu) → <em>él – a él</em></li>
      <li><strong>ona</strong> – jí → <em>ella – a ella</em></li>
      <li><strong>my</strong> – nám → <em>nosotros – a nosotros</em></li>
    </ul>
    <ul className="list-inside space-y-1">
      <li><strong>vy</strong> – vám → <em>vosotros – a vosotros</em></li>
      <li><strong>oni</strong> – jim → <em>ellos – a ellos</em></li>
    </ul>
  </div>

  <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
    <p><strong>Ejemplos:</strong></p>
    <p><em>Dám jí květinu.</em> – Le doy una flor a ella.</p>
    <p><em>Koupím mu dárek.</em> – Le compro un regalo a él.</p>
    <p><em>Řeknu vám to zítra.</em> – Os lo diré mañana.</p>
  </div>
</section>



<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col gap-4">
  <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white">
    yo –  para mí mismo
    (“si” es pronombre reflexivo)
    <br />
    já - si
  </h2>
  <p className="text-gray-600 dark:text-gray-300">
    En esta lección, añadimos el pronombre reflexivo "si" que aprendimos en la clase anterior.
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
        { cs: "Koupím ti dům.", es: "Te compraré una casa.", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "Koupím mu byt.", es: "Le compraré un piso.", file: "cs-CZ-VlastaNeural (13).mp3" },
        { cs: "Koupím jí postel.", es: "Le compraré una cama (a ella).", file: "cs-CZ-VlastaNeural (14).mp3" },
        { cs: "Koupí nám auto.", es: "Nos comprará un coche.", file: "cs-CZ-VlastaNeural (15).mp3" },
        { cs: "Koupíme vám mobil.", es: "Os compraremos un móvil.", file: "cs-CZ-VlastaNeural (16).mp3" },
        { cs: "Koupíme vám dárek.", es: "Os compraremos un regalo.", file: "cs-CZ-VlastaNeural (17).mp3" },
        { cs: "Koupíte jim jídlo.", es: "Les compraréis comida.", file: "cs-CZ-VlastaNeural (18).mp3" },
        { cs: "Koupíš mi knihu.", es: "Me comprarás un libro.", file: "cs-CZ-VlastaNeural (19).mp3" },
      
        { cs: "Koupíš si knihu?", es: "¿Te comprarás un libro?", file: "cs-CZ-VlastaNeural (20).mp3" },
        { cs: "Ano, koupím si knihu.", es: "Sí, me compraré un libro.", file: "cs-CZ-VlastaNeural (21).mp3" },
        { cs: "Koupíš jí stůl?", es: "¿Le comprarás una mesa (a ella)?", file: "cs-CZ-VlastaNeural (22).mp3" },
        { cs: "Ano, koupím jí stůl.", es: "Sí, le compraré una mesa.", file: "cs-CZ-VlastaNeural (23).mp3" },
      
        { cs: "Koupíš mu pivo?", es: "¿Le comprarás una cerveza (a él)?", file: "cs-CZ-VlastaNeural (24).mp3" },
        { cs: "Ne, nekoupím mu pivo.", es: "No, no le compraré una cerveza.", file: "cs-CZ-VlastaNeural (25).mp3" },
      
        { cs: "Koupíš jim mléko?", es: "¿Les comprarás leche?", file: "cs-CZ-VlastaNeural (26).mp3" },
        { cs: "Ne, nekoupím jim mléko.", es: "No, no les compraré leche.", file: "cs-CZ-VlastaNeural (27).mp3" },
      
        { cs: "Dáš si kávu?", es: "¿Tomarás un café?", file: "cs-CZ-VlastaNeural (28).mp3" },
        { cs: "Ano, dám si kávu.", es: "Sí, tomaré un café.", file: "cs-CZ-VlastaNeural (29).mp3" },
      
        { cs: "Dáš mu jablko?", es: "¿Le darás una manzana (a él)?", file: "cs-CZ-VlastaNeural (30).mp3" },
        { cs: "Ano, dám mu jablko.", es: "Sí, le daré una manzana.", file: "cs-CZ-VlastaNeural (31).mp3" },
      
        { cs: "Dáš jí mobil?", es: "¿Le darás el móvil (a ella)?", file: "cs-CZ-VlastaNeural (32).mp3" },
        { cs: "Ne, nedám jí mobil.", es: "No, no le daré el móvil.", file: "cs-CZ-VlastaNeural (33).mp3" },
      
        { cs: "Dáš jim sůl?", es: "¿Les darás sal?", file: "cs-CZ-VlastaNeural (34).mp3" },
        { cs: "Ne, nedám jim sůl.", es: "No, no les daré sal.", file: "cs-CZ-VlastaNeural (35).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson23/${file}`)}
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