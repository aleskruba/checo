"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
function lesson9() {


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
    title='Los plurales de los sustantivos II '
    description="En esta lección, vamos a practicar  el plural de los sustantivos en checo."
  />

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">

<Table className="min-w-full">
  <TableHeader>
    <TableRow>
      <TableHead className="text-center">Audio</TableHead>
      <TableHead className="text-center">Česky/En checo</TableHead>
      <TableHead className="text-center">Španělsky/En español</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (36).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
          disabled={isPlayingAll || isPlayingOne}
                    aria-label="Play Auto Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>České ženy jsou krásné</TableCell>
      <TableCell>Las mujeres checas son hermosas</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (9).mp3")}
      className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
      disabled={isPlayingAll || isPlayingOne}
                aria-label="Play Město Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou moje knihy</TableCell>
      <TableCell>Estos son mis libros</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (37).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        disabled={isPlayingAll || isPlayingOne}
                  aria-label="Play Slovo Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou tvoje boty</TableCell>
      <TableCell>Estos son tus zapatos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (10).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>České dívky jsou vysoké</TableCell>
      <TableCell>Las chicas checas son altas</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (38).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou jeho kočky</TableCell>
      <TableCell>Esos son sus gatas</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (11).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou naše věci</TableCell>
      <TableCell>Estas son nuestras cosas</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (39).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou její auta</TableCell>
      <TableCell>Estos son sus coches</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (12).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou tři velká okna</TableCell>
      <TableCell>Esas son tres ventanas grandes</TableCell>
    </TableRow>

    
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (40).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Jejich děti mají tři kuřata</TableCell>
      <TableCell>Sus hijos tienen tres pollos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (13).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Dvě rajčata prosím</TableCell>
      <TableCell>Dos tomates por favor</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (41).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Její zelené oči jsou krásné</TableCell>
      <TableCell>Sus ojos verdes son hermosos</TableCell>
    </TableRow>


    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (14).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Mé papíry jsou bílé</TableCell>
      <TableCell>Mis papeles son blancos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (42).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Naši kamarádi jsou v Mexiku</TableCell>
      <TableCell>Nuestros amigos están en México</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (15).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ti studenti jsou chytří</TableCell>
      <TableCell>Esos estudiantes son inteligentes</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (43).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ti psi jsou nebezpeční</TableCell>
      <TableCell>Esos perros son peligrosos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (16).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ti ptáci jsou černí</TableCell>
      <TableCell>Esos pájaros son negros</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-VlastaNeural (44).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>To jsou naši sousedé</TableCell>
      <TableCell>Estos son nuestros vecinos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson9/cs-CZ-AntoninNeural (17).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty domy jsou vysoké</TableCell>
      <TableCell>Esas casas son altas</TableCell>
    </TableRow>


  </TableBody>
</Table>

  </section>

</div>
)

}

export default lesson9