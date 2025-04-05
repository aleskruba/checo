"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import BodyPart from "@/public/bodypart.png";
function lesson18() {

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
  title="Vocabulario: el cuerpo humano"
  description="Aprende las palabras básicas en checo para hablar sobre las partes del cuerpo humano."
/>



      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
      En esta lección, aprenderemos las palabras básicas en checo para hablar sobre las partes del cuerpo humano.
    </p>
  </div>
    <div className="relative">
    <Image
  src={BodyPart}  // Cesta k obrázku
  alt="BodyPart"  // Alternativní text pro obrázek
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
    Vocabulario: el cuerpo humano
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende las palabras básicas en checo y español para hablar sobre las partes del cuerpo humano en singular y plural.
  </p>

  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <tr>
          <th className="px-4 py-2">singular</th>
          <th className="px-4 py-2">plural</th>
          <th className="px-4 py-2">singular</th>
          <th className="px-4 py-2">plural</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {[
          ["hlava", "hlavy", "la cabeza", "las cabezas"],
          ["ruka", "ruce", "la mano", "las manos"],
          ["noha", "nohy", "la pierna", "las piernas"],
          ["oko", "oči", "el ojo", "los ojos"],
          ["ucho", "uši", "la oreja", "las orejas"],
          ["nos", "nosy", "la nariz", "las narices"],
          ["ústa", "ústa", "la boca", "las bocas"],
          ["zub", "zuby", "el diente", "los dientes"],
          ["prst", "prsty", "el dedo", "los dedos"],
          ["rameno", "ramena", "el hombro", "los hombros"],
          ["koleno", "kolena", "la rodilla", "las rodillas"],
          ["záda", "záda", "la espalda", "las espaldas"],
          ["břicho", "břicha", "el vientre", "los vientres"],
          ["vlasy", "vlasy", "el pelo", "los pelos"],
          ["krk", "krky", "el cuello", "los cuellos"],
          ["obličej", "obličeje", "la cara", "las caras"],
        ].map(([cz1, cz2, es1, es2], idx) => (
          <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-2">{cz1}</td>
            <td className="px-4 py-2">{cz2}</td>
            <td className="px-4 py-2 italic">{es1}</td>
            <td className="px-4 py-2 italic">{es2}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


<div className="overflow-x-auto mt-4">
  <h1 className='mt-4'>lidské tělo / cuerpo humano</h1>
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
        { cs: "Hlava", es: "La cabeza", file: "cs-CZ-VlastaNeural.mp3" },
        { cs: "Ruka, mám dvě ruce", es: "La mano, tengo dos manos", file: "cs-CZ-VlastaNeural (1).mp3" },
        { cs: "Noha, ona má dlouhé nohy", es: "La pierna,ella tiene las piernas largas", file: "cs-CZ-VlastaNeural (2).mp3" },
        { cs: "Oko, krásné oči", es: "El ojo, ojos bonitos", file: "cs-CZ-VlastaNeural (3).mp3" },
        { cs: "Ucho, mám velké uši", es: "La oreja, tengo orejas grandes", file: "cs-CZ-VlastaNeural (4).mp3" },
        { cs: "Ústa, to jsou velká ústa", es: "La boca, es una boca grande", file: "cs-CZ-VlastaNeural (5).mp3" },
        { cs: "Zub, máš bílé zuby", es: "El diente, Diente, tienes los dientes blancos", file: "cs-CZ-VlastaNeural (14).mp3" },
        { cs: "Rameno, máme dvě ramena", es: "El hombro, tenemos dos hombros", file: "cs-CZ-VlastaNeural (7).mp3" },
        { cs: "Koleno, vidím tři kolena", es: "La rodilla, veo tres rodillas", file: "cs-CZ-VlastaNeural (8).mp3" },
        { cs: "Záda, bolí mě záda", es: "La espalda, me duele la espalda", file: "cs-CZ-VlastaNeural (9).mp3" },
        { cs: "Břicho, oni mají velká břicha", es: "El vientre, ellos tienen vientres grandes", file: "cs-CZ-VlastaNeural (10).mp3" },
        { cs: "Vlasy, dívky mají dlouhé vlasy", es: "El pelo, las chicas tienen el pelo largo", file: "cs-CZ-VlastaNeural (11).mp3" },
        { cs: "Krk, tři krky", es: "El cuello, tres cuellos", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "Obličej, vidím čtyři obličeje", es: "La cara, veo cuatro caras", file: "cs-CZ-VlastaNeural (13).mp3" }
      ]
.map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson18/${file}`)}
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

export default lesson18