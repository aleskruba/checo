"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Kitchen from "@/public/kitchen.png";
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
  title="Verbos - mluvit (hablar), rozumět (entender) y frases"
  description="Aprende a conjugar los verbos 'mluvit' y 'rozumět', y practica frases básicas."
/>


      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
    En esta lección, aprenderemos a conjugar los verbos "mluvit"  y  "rozumět" en checo en 
    tiempo presente y los practicaremos con algunas frases,También veremos cómo formar frases negativas, como nemluvím o nerozumím    </p>
  </div>

</section>



<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>mluvit / hablar</h1>

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
          { cs: "Já mluvím", es: "Yo hablo", file: "cs-CZ-VlastaNeural.mp3" },
          { cs: "Ty mluvíš", es: "Tú hablas", file: "cs-CZ-VlastaNeural (1).mp3" },
          { cs: "On/Ona mluví", es: "Él/Ella habla", file: "cs-CZ-VlastaNeural (2).mp3" },
          { cs: "My mluvíme", es: "Nosotros/Nosotras hablamos", file: "cs-CZ-VlastaNeural (3).mp3" },
          { cs: "Vy mluvíte", es: "Vosotros/Vosotras habláis", file: "cs-CZ-VlastaNeural (4).mp3" },
          { cs: "Oni mluví", es: "Ellos/Ellas hablan", file: "cs-CZ-VlastaNeural (5).mp3" },
        ].map(({ cs, es, file }, index) => (
          <TableRow key={index}>
            <TableCell>
              <button
                onClick={() => playAudio(`/lesson15/${file}`)}
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
      <h1 className='mt-4'>rozumět / entender</h1>
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
            { cs: "Já rozumím", es: "Yo entiendo", file: "cs-CZ-VlastaNeural (6).mp3" },
            { cs: "Ty rozumíš", es: "Tú entiendes", file: "cs-CZ-VlastaNeural (7).mp3" },
            { cs: "On/Ona rozumí", es: "Él/Ella entiende", file: "cs-CZ-VlastaNeural (8).mp3" },
            { cs: "My rozumíme", es: "Nosotros/Nosotras entendemos", file: "cs-CZ-VlastaNeural (9).mp3" },
            { cs: "Vy rozumíte", es: "Vosotros/Vosotras entendéis", file: "cs-CZ-VlastaNeural (10).mp3" },
            { cs: "Oni rozumí", es: "Ellos/Ellas entienden", file: "cs-CZ-VlastaNeural (11).mp3" },
          ].map(({ cs, es, file }, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => playAudio(`/lesson15/${file}`)}
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
      <h1 className='mt-4'>Frases</h1>
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
            { cs: "Mluvíš česky?", es: "¿Hablas checo?", file: "Fcs-CZ-VlastaNeural.mp3" },
            { cs: "Ano, mluvím trochu česky", es: "Sí, hablo un poco de checo", file: "Fcs-CZ-VlastaNeural (1).mp3" },
            { cs: "Ne, nemluvím česky", es: "No, no hablo checo", file: "Fcs-CZ-VlastaNeural (2).mp3" },
            { cs: "Mluvíte španělsky?", es: "¿Habla español?", file: "Fcs-CZ-VlastaNeural (4).mp3" },
            { cs: "Ano, mluvím dobře španělsky", es: "Sí, hablo bien español", file: "Fcs-CZ-VlastaNeural (3).mp3" },
  
            { cs: "Mluvíš také anglicky?", es: "¿Hablas también inglés?", file: "Fcs-CZ-VlastaNeural (5).mp3" },
            { cs: "Ano, mluvím také anglicky", es: "Sí, también hablo inglés", file:"Fcs-CZ-VlastaNeural (6).mp3"  },
            { cs: "Mluvíš velmi rychle", es: "Hablas muy rápido", file: "Fcs-CZ-VlastaNeural (7).mp3"  },
            { cs: "Ona nemluví často česky", es: "Ella no habla checo a menudo", file: "Fcs-CZ-VlastaNeural (9).mp3"  },
            { cs: "Rozumíš mi?", es: "¿Me entiendes?", file: "Fcs-CZ-VlastaNeural (10).mp3"  },
            { cs: "Ano, rozumím ti", es: "Sí, te entiendo", file: "Fcs-CZ-VlastaNeural (11).mp3"  },
            { cs: "Ne, nerozumím ti", es: "No, no te entiendo", file: "Fcs-CZ-VlastaNeural (13).mp3"  },
            { cs: "Mluvíš pomalu", es: "Hablas despacio", file: "Fcs-CZ-VlastaNeural (15).mp3"  },
            { cs: "Mluvíš rychle", es: "Hablas rápido", file:"Fcs-CZ-VlastaNeural (16).mp3" },
            { cs: "Rozumíte mi?", es: "¿Me entienden?", file: "cs-CZ-AntoninNeural.mp3" },
            { cs: "Rozumím ti velmi dobře", es: "Te entiendo muy bien", file: "cs-CZ-AntoninNeural (1).mp3" },
            { cs: "Rozumím vám velmi dobře", es: "Les entiendo muy bien", file: "cs-CZ-AntoninNeural (3).mp3" },
          ].map(({ cs, es, file }, index) => (
            <TableRow key={index}>
              <TableCell>
                <button
                  onClick={() => playAudio(`/lesson15/${file}`)}
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