"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
function lesson15() {

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
  title="Verbos - chtít (querer), potřebovat (necesitar) y frases"
  description="Aprende a conjugar los verbos 'chtít' y 'potřebovat'"
/>


      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
    En esta lección, aprenderemos a conjugar los verbos "chtít"  y  "potřebovat" en checo 
    </p>
  </div>

</section>

<div className="overflow-x-auto mt-4">
      <h1 className='mt-4'>chtít / querer</h1>
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
            { cs: "Já chci", es: "Yo quiero", file: "cs-CZ-VlastaNeural.mp3" },
            { cs: "Ty chceš", es: "Tú quieres", file: "cs-CZ-VlastaNeural (1).mp3" },
            { cs: "On/Ona chce", es: "Él/Ella quiere", file: "cs-CZ-VlastaNeural (2).mp3" },
            { cs: "My chceme", es: "Nosotros/Nosotras queremos", file: "cs-CZ-VlastaNeural (3).mp3" },
            { cs: "Vy chcete", es: "Vosotros/Vosotras queréis", file: "cs-CZ-VlastaNeural (4).mp3" },
            { cs: "Oni chtějí", es: "Ellos/Ellas quieren", file: "cs-CZ-VlastaNeural (5).mp3"},
          ].map(({ cs, es, file }, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => playAudio(`/lesson16/${file}`)}
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
    <div className="overflow-x-auto mt-4">
      <h1 className='mt-4'>forma cortés del verbo chtít / querer</h1>
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
            { cs: "Já bych chtěl", es: "Yo quisiera", file: "cs-CZ-VlastaNeural (6).mp3" },
            { cs: "Ty bys chtěl", es: "Tú quisieras", file: "cs-CZ-VlastaNeural (7).mp3" },
            { cs: "On/Ona by chtěl/a", es: "Él/Ella quisiera", file: "cs-CZ-VlastaNeural (8).mp3" },
            { cs: "My bychom chtěli", es: "Nosotros/Nosotras quisiéramos", file: "cs-CZ-VlastaNeural (9).mp3" },
            { cs: "Vy byste chtěli", es: "Vosotros/Vosotras quisierais", file: "cs-CZ-VlastaNeural (10).mp3" },
            { cs: "Oni by chtěli", es: "Ellos/Ellas quisieran", file: "cs-CZ-VlastaNeural (11).mp3" },
          ].map(({ cs, es, file }, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => playAudio(`/lesson16/${file}`)}
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
    <div className="overflow-x-auto mt-4">
      <h1 className='mt-4'>potřebovat / necesitar</h1>
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
            { cs: "Já potřebuji", es: "Yo necesito", file: "cs-CZ-VlastaNeural (12).mp3" },
            { cs: "Ty potřebuješ", es: "Tú necesitas", file: "cs-CZ-VlastaNeural (13).mp3" },
            { cs: "On/Ona potřebuje", es: "Él/Ella necesita", file: "cs-CZ-VlastaNeural (14).mp3" },
            { cs: "My potřebujeme", es: "Nosotros/Nosotras necesitamos", file: "cs-CZ-VlastaNeural (15).mp3" },
            { cs: "Vy potřebujete", es: "Vosotros/Vosotras necesitáis", file: "cs-CZ-VlastaNeural (16).mp3" },
            { cs: "Oni potřebují", es: "Ellos/Ellas necesitan", file: "cs-CZ-VlastaNeural (17).mp3" },
          ].map(({ cs, es, file }, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => playAudio(`/lesson16/${file}`)}
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

export default lesson15