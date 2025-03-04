"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { useAudio } from "../../context/AudioContext"; 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson3() {

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
    title='En el restaurante checo'
    description='En esta sección aprenderemos frases útiles para el restaurante en checo.'
  />
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
   <div className="overflow-x-auto mt-4">
        <Table className="min-w-full">
          <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Audio</TableHead>
            <TableHead className="text-center font-bold">Česky/En checo</TableHead>
            <TableHead className="text-center font-bold">Španělsky/En español</TableHead>
          </TableRow>

          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/matevolnystul.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Já jsem Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Dobrý den, máte volný stůl?</TableCell>
              <TableCell>Buenos días, ¿tienen una mesa libre?</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/jidelnilistek.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Ty jsi Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Jídelní lístek, prosím</TableCell>
              <TableCell>El menú, por favor</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/jednopivo.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play On je Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Jedno pivo, prosím</TableCell>
              <TableCell>Una cerveza, por favor</TableCell>
            </TableRow>
       

            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/chtelbzchkavu-muz.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play My jsme Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Chtěl bych kávu</TableCell>
              <TableCell>Quisiera un café (hombre)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/chtelabzchkavu-zena.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Vy jste Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Chtěla bych kávu</TableCell>
              <TableCell>Quisiera un café (mujer)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/koliktostoji.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Kolik to stojí?</TableCell>
              <TableCell>¿Cuánto cuesta?</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/ucetprosim.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Účet, prosím</TableCell>
              <TableCell>La cuenta, por favor</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/mohuplatitkartou.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell> Mohu platit kartou?</TableCell>
              <TableCell>¿Puedo pagar con tarjeta?</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/bylotodobre.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell> Bylo to dobré!</TableCell>
              <TableCell>¡Estaba rico!</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/restaurante/dekujinashledanou.mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell> Děkuji, na shledanou!</TableCell>
              <TableCell>¡Estaba rico!</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>

</section>
  </div>
  )
}

export default lesson3
