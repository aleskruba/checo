"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson25() {

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
  title="Los pronombres demostrativos en checo - caso nominativo"
  description="Aprende a usar los pronombres demostrativos checos como 'to', 'toto', etc."
/>



<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Los pronombres demostrativos en nominativo en checo
    </h2>

    <p className="text-gray-700 dark:text-gray-300">
      En checo, los pronombres demostrativos en caso nominativo cambian según el género, el número y la animacidad. Aquí están organizados por género y número, con ejemplos ilustrativos.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full">
      {/* Masculino Singular */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Masculino (singular) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tento muž</strong> – este hombre</li>
          <li><strong>ten muž</strong> – ese hombre</li>
          <li><strong>tamten muž</strong> – aquel hombre</li>
        </ul>
      </div>

      {/* Masculino Plural */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Masculino (plural animado) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tito muži</strong> – estos hombres</li>
          <li><strong>ti muži</strong> – esos hombres</li>
          <li><strong>tamti muži</strong> – aquellos hombres</li>
        </ul>
      </div>

      {/* Masculino Inanimado Plural */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Masculino (plural inanimado) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tyto domy</strong> – estas casas</li>
          <li><strong>ty domy</strong> – esas casas</li>
          <li><strong>tamty domy</strong> – aquellas casas</li>
        </ul>
      </div>

      {/* Femenino Singular */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Femenino (singular) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tato žena</strong> – esta mujer</li>
          <li><strong>ta žena</strong> – esa mujer</li>
          <li><strong>tamta žena</strong> – aquella mujer</li>
        </ul>
      </div>

      {/* Femenino Plural */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Femenino (plural) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tyto dívky</strong> – estas chicas</li>
          <li><strong>ty dívky</strong> – esas chicas</li>
          <li><strong>tamty dívky</strong> – aquellas chicas</li>
        </ul>
      </div>

      {/* Neutro Singular */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Neutro (singular) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>toto okno</strong> – esta ventana</li>
          <li><strong>to okno</strong> – esa ventana</li>
          <li><strong>tamto okno</strong> – aquella ventana</li>
        </ul>
      </div>

      {/* Neutro Plural */}
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">Neutro (plural) — muy cerca / cerca / lejos</h3>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside">
          <li><strong>tato auta</strong> – estos coches</li>
          <li><strong>ta auta</strong> – esos coches</li>
          <li><strong>tamta auta</strong> – aquellos coches</li>
        </ul>
      </div>
    </div>
  </div>
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
  { cs: "Tento muž je učitel.", es: "Este hombre es profesor.", file: "cs-CZ-VlastaNeural.mp3" },
  { cs: "Ten chlapec je můj bratr.", es: "Ese chico es mi hermano.", file: "cs-CZ-VlastaNeural (1).mp3" },
  { cs: "Tamten muž je lékař.", es: "Aquel hombre es médico.", file: "cs-CZ-VlastaNeural (2).mp3" },
  { cs: "Tito kluci jsou moji kamarádi.", es: "Estos chicos son mis amigos.", file: "cs-CZ-VlastaNeural (3).mp3" },
  { cs: "Tamti studenti jsou z Prahy.", es: "Aquellos estudiantes son de Praga.", file: "cs-CZ-VlastaNeural (4).mp3" },
  { cs: "Tyto stoly jsou velké.", es: "Estas mesas son grandes.", file: "cs-CZ-VlastaNeural (5).mp3" },
  { cs: "Tamty domy jsou vysoké.", es: "Aquellas casas son altas.", file: "cs-CZ-VlastaNeural (6).mp3" },
  { cs: "Ti psi jsou černí.", es: "Esos perros son negros.", file: "cs-CZ-VlastaNeural (7).mp3" },
  { cs: "Tato žena je krásná.", es: "Esta mujer es hermosa.", file: "cs-CZ-VlastaNeural (8).mp3" },
  { cs: "Ta dívka zpívá pěkně.", es: "Esa chica canta bien.", file: "cs-CZ-VlastaNeural (9).mp3" },
  { cs: "Tamta žena je moje matka.", es: "Aquella mujer es mi madre.", file: "cs-CZ-VlastaNeural (10).mp3" },
  { cs: "Tyto dívky jsou kamarádky.", es: "Estas chicas son amigas.", file: "cs-CZ-VlastaNeural (11).mp3" },
  { cs: "Ty ženy pracují v obchodě.", es: "Esas mujeres trabajan en la tienda.", file: "cs-CZ-VlastaNeural (12).mp3" },
  { cs: "Tamty ženy jsou učitelky.", es: "Aquellas mujeres son profesoras.", file: "cs-CZ-VlastaNeural (13).mp3" },
  { cs: "Toto okno je otevřené.", es: "Esta ventana está abierta.", file: "cs-CZ-VlastaNeural (14).mp3" },
  { cs: "To auto je nové.", es: "Ese coche es nuevo.", file: "cs-CZ-VlastaNeural (15).mp3" },
  { cs: "Tamto dítě spí.", es: "Aquel niño está durmiendo.", file: "cs-CZ-VlastaNeural (16).mp3" },
  { cs: "Tato okna jsou čistá.", es: "Estas ventanas están limpias.", file: "cs-CZ-VlastaNeural (17).mp3" },
  { cs: "Ta auta jsou rychlá.", es: "Esos coches son rápidos.", file: "cs-CZ-VlastaNeural (18).mp3" },
  { cs: "Tamta auta jsou stará.", es: "Aquellos coches son viejos.", file: "cs-CZ-VlastaNeural (19).mp3" }
]

.map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson25/${file}`)}
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

export default lesson25