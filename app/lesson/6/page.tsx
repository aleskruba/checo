"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import useStopAudio from '../../hooks/useStopAudio'
import { useAudio } from "../../context/AudioContext"; 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function lesson6() {
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
    title='Introducción a los adjetivos  , Vocabulario Casa+Colores / Dům+Barvy'
    description="En esta lección, aprenderemos los fundamentos de los adjetivos en checo y nuevo vocabulario con colores."
  />

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Géneros y Adjetivos en Checo</h2>
    <div className="space-y-4">
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 dark:bg-blue-900 rounded-lg">
        <p className="text-gray-900 dark:text-white font-medium">
          <span className="font-bold">Femenino</span> (termina en <span className="text-blue-600 dark:text-blue-300">-á</span>):
        </p>
        <p className="italic text-gray-700 dark:text-gray-300">Modrá židle → "židle" (silla) es femenina.</p>
      </div>
      <div className="p-4 border-l-4 border-green-500 bg-green-100 dark:bg-green-900 rounded-lg">
        <p className="text-gray-900 dark:text-white font-medium">
          <span className="font-bold">Masculino</span> (termina en <span className="text-green-600 dark:text-green-300">-ý</span>):
        </p>
        <p className="italic text-gray-700 dark:text-gray-300">Zelený koberec → "koberec" (alfombra) es masculino.</p>
      </div>
      <div className="p-4 border-l-4 border-indigo-500 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
        <p className="text-gray-900 dark:text-white font-medium">
          <span className="font-bold">Neutro</span> (termina en <span className="text-indigo-600 dark:text-indigo-300">-é</span>):
        </p>
        <p className="italic text-gray-700 dark:text-gray-300">Modré okno → "okno" (ventana) es neutro.</p>
      </div>
    </div>
  </section>
    <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
    <div className="overflow-x-auto">
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky/En checo</TableHead>
            <TableHead className="text-center">Španělsky/En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {/* Modrá židle */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural.mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Modrá židle Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Modrá židle <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Silla azul</TableCell>
      </TableRow>

      {/* Zelený koberec */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-AntoninNeural.mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Zelený koberec Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Zelený koberec <span className='italic text-xs'>-masc.</span></TableCell>
        <TableCell>Alfombra verde</TableCell>
      </TableRow>

      {/* Bílé dveře */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (1).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Bílé dveře Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Bílé dveře <span className='italic text-xs'>-neut.</span></TableCell>
        <TableCell>Puerta blanca</TableCell>
      </TableRow>

      {/* Červený stůl */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (2).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Červený stůl Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Červený stůl <span className='italic text-xs'>-masc.</span></TableCell>
        <TableCell>Mesa roja</TableCell>
      </TableRow>

      {/* Oranžová pohovka */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-AntoninNeural (1).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Oranžová pohovka Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Oranžová pohovka <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Sofá naranja</TableCell>
      </TableRow>

      {/* Růžová kachlička */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (3).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Růžová kachlička Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Růžový polštář <span className='italic text-xs'>-masc.</span></TableCell>
        <TableCell>Almohada rosa</TableCell>
      </TableRow>

      {/* Hnědý strop */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-AntoninNeural (2).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Hnědý strop Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Hnědý strop <span className='italic text-xs'>-masc.</span></TableCell>
        <TableCell>Techo marrón</TableCell>
      </TableRow>

      {/* Šedá židle */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (4).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Šedá židle Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Šedá podlaha <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Suelo gris</TableCell>
      </TableRow>

      {/* Žlutá stěna */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (5).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Žlutá stěna Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Žlutá stěna <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Pared amarilla</TableCell>
      </TableRow>

      {/* Bílý stůl */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-AntoninNeural (3).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Bílý stůl Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Bílá kuchyně <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Cocina blanca</TableCell>
      </TableRow>

      {/* Černý koberec */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (6).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Černý koberec Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Černá střecha <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>Techo negro</TableCell>
      </TableRow>

      {/* Růžové závěsy */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-AntoninNeural (4).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Růžové závěsy Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Růžová zahrada <span className='italic text-xs'>-fem.</span></TableCell>
        <TableCell>El jardín rosa</TableCell>
      </TableRow>

      {/* Modré okno */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson6/cs-CZ-VlastaNeural (7).mp3")}
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
            disabled={isPlayingAll || isPlayingOne}
                        aria-label="Play Modré okno Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Modré okno <span className='italic text-xs'>-neut.</span></TableCell>
        <TableCell>Ventana azul</TableCell>
      </TableRow>

  

  
    </TableBody>
  </Table>
</div>

    
    
    </section>

    </div>
  )

}

export default lesson6