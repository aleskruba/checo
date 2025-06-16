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
  title="El verbo 'bolet' en checo – cómo expresar dolor"
  description="Aprende a usar el verbo checo 'bolet' para hablar del dolor físico, como en 'Bolí mě hlava'. Funciona de manera similar al verbo español 'doler'."
/>



<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      El verbo checo "bolet" – cómo expresar dolor correctamente
    </h2>

    <p className="text-gray-700 dark:text-gray-300">
      En checo, el verbo <strong>„bolet“</strong> se usa para hablar del dolor físico, igual que el verbo <strong>„doler“</strong> en español. La mayoría de las expresiones con „bolet“ usan el <strong>nominativo</strong> para la parte del cuerpo que duele.
    </p>

    <div className="text-left w-full text-gray-700 dark:text-gray-300">
      <ul className="list-disc list-inside">
        <li><strong>Bolí mě hlava</strong> – Me duele la cabeza</li>
        <li><strong>Bolí tě hlava?</strong> – ¿Te duele la cabeza?</li>
      </ul>

      <p className="mt-4">
        Si quieres decir que te duele la garganta, tienes que decir <strong>„Bolí mě v krku“</strong>. La preposición <strong>„v“</strong> indica que el dolor está dentro de la garganta.
      </p>

      <p className="mt-2">
        Si dices <strong>„Bolí mě krk“</strong>, significa que te duele el cuello, por ejemplo por tensión o rigidez muscular.
      </p>
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
  { cs: "Bolí tě hlava?", es: "¿Te duele la cabeza?", file: "cs-CZ-VlastaNeural.mp3" },
  { cs: "Bolí mě hlava.", es: "Me duele la cabeza.", file: "cs-CZ-AntoninNeural.mp3" },
  { cs: "Bolí ho břicho?", es: "¿Le duele el estómago?", file: "cs-CZ-VlastaNeural (1).mp3" },
  { cs: "Ano, bolí ho břicho.", es: "Sí, le duele el estómago.", file: "cs-CZ-VlastaNeural (2).mp3" },
  { cs: "Bolí ji zuby?", es: "¿Le duelen los dientes?", file: "cs-CZ-VlastaNeural (3).mp3" },
  { cs: "Ne, nebolí ji zuby.", es: "No, no le duelen los dientes.", file: "cs-CZ-VlastaNeural (4).mp3" },
  { cs: "Bolí mě pravé oko.", es: "Me duele el ojo derecho.", file: "cs-CZ-VlastaNeural (5).mp3" },
  { cs: "Bolí mě obě oči.", es: "Me duelen ambos ojos.", file: "cs-CZ-VlastaNeural (6).mp3" },
  { cs: "Bolí mě levé ucho.", es: "Me duele la oreja izquierda.", file: "cs-CZ-VlastaNeural (7).mp3" },
  { cs: "Bolí mě obě uši.", es: "Me duelen ambas orejas.", file: "cs-CZ-VlastaNeural (8).mp3" },
  { cs: "Bolí mě v krku.", es: "Me duele la garganta.", file: "cs-CZ-VlastaNeural (9).mp3" },
  { cs: "Bolí mě krk.", es: "Me duele el cuello.", file: "cs-CZ-VlastaNeural (10).mp3" },
  { cs: "Bolí tě to hodně?", es: "¿Te duele mucho?", file: "cs-CZ-VlastaNeural (11).mp3" },
  { cs: "Ne, bolí to jen trochu.", es: "No, solo duele un poco.", file: "cs-CZ-VlastaNeural (12).mp3" },
  { cs: "Odkdy tě to bolí?", es: "¿Desde cuándo te duele?", file: "cs-CZ-VlastaNeural (13).mp3" },
  { cs: "Bolí mě to asi 2 dny.", es: "Me duele desde hace unos 2 días.", file: "cs-CZ-AntoninNeural (1).mp3" }
]


.map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson26/${file}`)}
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