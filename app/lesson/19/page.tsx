"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Calendar from "@/public/calendar.jpg";
function lesson19() {

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
  title="Días, meses, estaciones"
  description="Aprende las palabras en checo para hablar sobre los días, meses y estaciones del año."
/>



      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
  <p className="text-gray-700 dark:text-gray-300">
  En esta lección, aprenderemos las palabras básicas en checo para hablar sobre los días, meses y estaciones del año.
</p>

  </div>
    <div className="relative">
    <Image
  src={Calendar}  // Cesta k obrázku
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
    Días de la semana
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende las palabras básicas en checo y español para hablar sobre los días de la semana.
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
          ["pondělí", "lunes"],
          ["úterý", "martes"],
          ["středa", "miércoles"],
          ["čtvrtek", "jueves"],
          ["pátek", "viernes"],
          ["sobota", "sábado"],
          ["neděle", "domingo"]
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
    Meses del año
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende las palabras básicas en checo y español para hablar sobre los meses del año.
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
          ["leden", "enero"],
          ["únor", "febrero"],
          ["březen", "marzo"],
          ["duben", "abril"],
          ["květen", "mayo"],
          ["červen", "junio"],
          ["červenec", "julio"],
          ["srpen", "agosto"],
          ["září", "septiembre"],
          ["říjen", "octubre"],
          ["listopad", "noviembre"],
          ["prosinec", "diciembre"]
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
    Estaciones del año
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende las palabras básicas en checo y español para hablar sobre las estaciones del año.
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
          ["jaro", "primavera"],
          ["léto", "verano"],
          ["podzim", "otoño"],
          ["zima", "invierno"]
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
  <h1 className="mt-4">Dny v týdnu / Días de la semana</h1>
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
        { cs: "Týden má sedm dní", es: "La semana tiene siete días", file: "cs-CZ-VlastaNeural.mp3" },
        { cs: "Dnes je pondělí", es: "Hoy es lunes", file: "cs-CZ-VlastaNeural (1).mp3" },
        { cs: "Zítra bude úterý", es: "Mañana será martes", file: "cs-CZ-VlastaNeural (2).mp3" },
        { cs: "Včera byla středa", es: "Ayer fue miércoles", file: "cs-CZ-VlastaNeural (3).mp3" },
        { cs: "Příjdu ve čtvrtek", es: "Vengo el jueves", file: "cs-CZ-VlastaNeural (4).mp3" },
        { cs: "Uvidíme se v pátek", es: "Nos vemos el viernes", file: "cs-CZ-VlastaNeural (5).mp3" },
        { cs: "Uvidíme se o víkendu", es: "Nos vemos el fin de semana", file: "cs-CZ-VlastaNeural (6).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson19/${file}`)}
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

  <h1 className="mt-4">Měsíce / Meses</h1>
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
        { cs: "V lednu a únoru je zima", es: "En enero y febrero hace frío", file: "cs-CZ-VlastaNeural (7).mp3" },
        { cs: "Březen je chladný měsíc", es: "Marzo es un mes frío", file: "cs-CZ-VlastaNeural (8).mp3" },
        { cs: "Velikonoce jsou v dubnu", es: "La Pascua es en abril", file: "cs-CZ-VlastaNeural (9).mp3" },
        { cs: "Můj oblíbený měsíc je květen", es: "Mi mes favorito es mayo", file: "cs-CZ-VlastaNeural (10).mp3" },
        { cs: "V červnu mám narozeniny", es: "Cumplo años en junio", file: "cs-CZ-VlastaNeural (11).mp3" },
        { cs: "V červenci a srpnu je velké horko", es: "Hace mucho calor en julio y agosto", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "V září půjdu do školy", es: "Voy a la escuela en septiembre", file: "cs-CZ-VlastaNeural (14).mp3" },
        { cs: "V říjnu pojedu do Paříže", es: "Voy a París en octubre", file: "cs-CZ-VlastaNeural (15).mp3" },
        { cs: "V listopadu padá listí", es: "Las hojas caen en noviembre", file: "cs-CZ-VlastaNeural (16).mp3" },
        { cs: "Vánoce jsou v prosinci", es: "Navidad es en diciembre", file: "cs-CZ-VlastaNeural (17).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson19/${file}`)}
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

  <h1 className="mt-4">Roční období / Estaciones del año</h1>
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
        { cs: "Jaro je příjemné období", es: "La primavera es una estación agradable", file: "cs-CZ-VlastaNeural (18).mp3" },
        { cs: "Na jaře kvetou stromy", es: "En primavera florecen los árboles", file: "cs-CZ-VlastaNeural (19).mp3" },
        { cs: "Léto je teplé období v roce", es: "El verano es la estación más cálida", file: "cs-CZ-VlastaNeural (20).mp3" },
        { cs: "V létě se chodíme koupat", es: "En verano vamos a nadar", file: "cs-CZ-VlastaNeural (21).mp3" },
        { cs: "Podzim je klidné období", es: "El otoño es una estación tranquila", file: "cs-CZ-VlastaNeural (22).mp3" },
        { cs: "Na podzim pojedu do Španělska", es: "Voy a España en otoño", file: "cs-CZ-VlastaNeural (23).mp3" },
        { cs: "Zima je chladné období", es: "El invierno es una estación fría", file: "cs-CZ-VlastaNeural (24).mp3" },
        { cs: "V zimě často sněží", es: "En invierno suele nevar", file: "cs-CZ-VlastaNeural (25).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson19/${file}`)}
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

export default lesson19