"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 

function lesson17() {

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
  title="Verbos - jít (ir), chodit (andar) y su diferencia"
  description="Aprende a conjugar los verbos 'jít' y 'chodit' y a entender su diferencia en checo."
/>


      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
    En esta lección, aprenderemos a conjugar los verbos 'jít' y 'chodit' y explicaremos la diferencia en checo    </p>
  </div>

</section>

<div className="overflow-x-auto mt-4">
  <h1 className='mt-4'>jít / ir</h1>
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
        { cs: "Já jdu", es: "Yo voy", file: "cs-CZ-VlastaNeural.mp3" },
        { cs: "Ty jdeš", es: "Tú vas", file: "cs-CZ-VlastaNeural (1).mp3" },
        { cs: "On/Ona jde", es: "Él/Ella va", file: "cs-CZ-VlastaNeural (2).mp3" },
        { cs: "My jdeme", es: "Nosotros/Nosotras vamos", file: "cs-CZ-VlastaNeural (3).mp3" },
        { cs: "Vy jdete", es: "Vosotros/Vosotras vais", file: "cs-CZ-VlastaNeural (4).mp3" },
        { cs: "Oni jdou", es: "Ellos/Ellas van", file: "cs-CZ-VlastaNeural (5).mp3" },
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson17/${file}`)}
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
  <h1 className='mt-4'>chodit / andar</h1>
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
        { cs: "Já chodím", es: "Yo ando", file: "cs-CZ-VlastaNeural (6).mp3" },
        { cs: "Ty chodíš", es: "Tú andas", file: "cs-CZ-VlastaNeural (7).mp3" },
        { cs: "On/Ona chodí", es: "Él/Ella anda", file: "cs-CZ-VlastaNeural (8).mp3" },
        { cs: "My chodíme", es: "Nosotros/Nosotras andamos", file: "cs-CZ-VlastaNeural (9).mp3" },
        { cs: "Vy chodíte", es: "Vosotros/Vosotras andáis", file: "cs-CZ-VlastaNeural (10).mp3" },
        { cs: "Oni chodí", es: "Ellos/Ellas andan", file: "cs-CZ-VlastaNeural (11).mp3" },
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson17/${file}`)}
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
  <h1 className='mt-4'>Fráze : chodit / jít / půjdu</h1>
  <h3 className='mt-2'>Con el verbo “jít” se puede expresar el futuro</h3>
  <h3 className='mt-2'>La diferencia entre 'jdu' y 'půjdu' está en el aspecto verbal. No se preocupen de eso, en muchas situaciones, el significado es muy parecido.</h3>
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
        { cs: "Já jdu právě do školy", es: "Estoy yendo a la escuela ahora.", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "Chodím do školy každý den", es: "Voy a la escuela todos los días.", file: "cs-CZ-VlastaNeural (13).mp3" },
        { cs: "Jdeš dnes do práce?", es: "¿Vas al trabajo hoy?", file: "cs-CZ-VlastaNeural (14).mp3" },
        { cs: "Chodíš do práce každé pondělí?", es: "¿Vas al trabajo todos los lunes?", file: "cs-CZ-VlastaNeural (15).mp3" },
        { cs: "Jdu právě do lesa", es: "Estoy yendo al bosque.", file: "cs-CZ-VlastaNeural (16).mp3" },
        { cs: "Chodím často do lesa", es: "Voy al bosque a menudo.", file: "cs-CZ-VlastaNeural (17).mp3" },
        { cs: "Co děláš kámo?", es: "¿Qué haces amigo?", file: "cs-CZ-VlastaNeural (18).mp3" },
        { cs: "Chodím tu po parku", es: "Estoy caminando por el parque aquí.", file: "cs-CZ-VlastaNeural (19).mp3" },
        { cs: "Zítra jdu do kina", es: "Mañana voy al cine.", file: "cs-CZ-VlastaNeural (20).mp3" },
        { cs: "Jdeš zítra do školy?", es: "¿Vas mañana a la escuela?", file: "cs-CZ-VlastaNeural (21).mp3" },
        { cs: "Zítra půjdu do kina", es: "Mañana voy al cine.", file: "cs-CZ-VlastaNeural (22).mp3" },
        { cs: "Půjdeš zítra do školy?", es: "¿Vas mañana a la escuela?", file: "cs-CZ-VlastaNeural (23).mp3" },
        { cs: "Půjdeš zítra do práce?", es: "¿Vas al trabajo mañana?", file: "cs-CZ-VlastaNeural (24).mp3" },
        { cs: "Ne, zítra nepůjdu do práce", es: "No, no voy al trabajo mañana.", file: "cs-CZ-VlastaNeural (25).mp3" },
        { cs: "Kam jdeš?", es: "¿Adónde vas?", file: "cs-CZ-VlastaNeural (26).mp3" },
        { cs: "Jdu do parku", es: "Voy al parque.", file: "cs-CZ-VlastaNeural (27).mp3" },
        { cs: "Půjdeš večer do kina?", es: "¿Vas al cine esta noche?", file: "cs-CZ-VlastaNeural (28).mp3" },
        { cs: "Ne, večer půjdu do divadla", es: "No, esta noche voy al teatro.", file: "cs-CZ-VlastaNeural (36).mp3" },
        { cs: "Chodím často do divadla", es: "Voy al teatro a menudo.", file: "cs-CZ-VlastaNeural (37).mp3" },
        { cs: "Rád chodím do lesa", es: "Me gusta ir al bosque.", file: "cs-CZ-VlastaNeural (38).mp3" },
        { cs: "Chodíš rád do přírody?", es: "¿Te gusta ir al campo (naturaleza)?", file: "cs-CZ-VlastaNeural (39).mp3" },
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell>
            <button
              onClick={() => playAudio(`/lesson17/${file}`)}
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

export default lesson17