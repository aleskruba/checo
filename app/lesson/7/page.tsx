"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson7() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
  <SectionTopComponent
    title='Introducción a los posesivos en checo'
    description="En esta lección, aprenderemos los posesivos básicos y cómo funcionan en el idioma checo"
  />

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">

   <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 dark:text-white shadow-lg rounded-2xl">
  
      <p className="text-gray-700 dark:text-gray-400 mb-4">
        En checo, los posesivos deben concordar en género, número y caso con el
        sustantivo. A continuación, se muestran sus formas:
      </p>
      <ul className="space-y-2">
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Moje</span>
          <span className="text-gray-600 dark:text-gray-400">Femenino / Neutro (mi)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Můj</span>
          <span className="text-gray-600 dark:text-gray-400">Masculino (mi)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Tvoje</span>
          <span className="text-gray-600 dark:text-gray-400">Femenino / Neutro (tu)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Tvůj</span>
          <span className="text-gray-600 dark:text-gray-400">Masculino (tu)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Jeho</span>
          <span className="text-gray-600 dark:text-gray-400">Invariable (su - de él)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Její</span>
          <span className="text-gray-600 dark:text-gray-400">Invariable (su - de ella)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Naše</span>
          <span className="text-gray-600 dark:text-gray-400">Femenino / Neutro (nuestro/a)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Náš</span>
          <span className="text-gray-600 dark:text-gray-400">Masculino (nuestro)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Vaše</span>
          <span className="text-gray-600 dark:text-gray-400">Femenino / Neutro (vuestro/a, su)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Váš</span>
          <span className="text-gray-600 dark:text-gray-400">Masculino (vuestro, su)</span>
        </li>
        <li className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
          <span className="font-medium text-gray-800 dark:text-gray-200">Jejich</span>
          <span className="text-gray-600 dark:text-gray-400">Invariable (su - de ellos/ellas)</span>
        </li>
      </ul>
    </div>
  </section>

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">

    <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Audio</TableHead>
            <TableHead className="text-center">Czech</TableHead>
            <TableHead className="text-center">Spanish</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Modrá židle */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (5).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Modrá židle Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Moje rodina <span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Mi familia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (8).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Zelený koberec Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Můj dům <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Mi casa</TableCell>
          </TableRow>
          {/* Zelený koberec */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (6).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Zelený koberec Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Tvoje teta <span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Tu tía</TableCell>
          </TableRow>
    
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (9).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Zelený koberec Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Tvůj mobil <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Tu celular</TableCell>
          </TableRow>
          {/* Bílé dveře */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (7).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Bílé dveře Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Jeho syn <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Su hijo (de él)</TableCell>
          </TableRow>
    
          {/* Červený stůl */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (10).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Červený stůl Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>její dcera <span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Su hija (de ella)</TableCell>
          </TableRow>
    
          {/* Oranžová pohovka */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (8).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Oranžová pohovka Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Naše babička<span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Nuestra abuela</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (11).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Oranžová pohovka Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Náš dědeček<span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Nuestro abuelo</TableCell>
          </TableRow>
    
          {/* Růžová kachlička */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (9).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Růžová kachlička Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Vaše auto <span className='italic text-xs'>-neut.</span></TableCell>
            <TableCell>Vuestro/Su coche</TableCell>
          </TableRow>
    
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (12).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Růžová kachlička Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Váš bratr <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Vuestro/Su hermano</TableCell>
          </TableRow>
          {/* Hnědý strop */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (10).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Hnědý strop Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Jejich bratr<span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Su hermano (de ellos) </TableCell>
          </TableRow>
    
          {/* Šedá židle */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (13).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Šedá židle Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Moje rodina je velká <span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Mi familia es grande.</TableCell>
          </TableRow>
    
          {/* Žlutá stěna */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (11).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Žlutá stěna Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Tvoje teta je hodná  <span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Tu tía es amable</TableCell>
          </TableRow>
    
          {/* Bílý stůl */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (14).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Bílý stůl Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Jeho strýc je doktor <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Su tío es medico (de él)</TableCell>
          </TableRow>
    
          {/* Černý koberec */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (12).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Černý koberec Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>její děda je cizinec <span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Su abuelo es extranjero (de ella)</TableCell>
          </TableRow>
    
          {/* Růžové závěsy */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (15).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Růžové závěsy Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Naše babička je stará<span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>Nuestra abuela es vieja</TableCell>
          </TableRow>
    
          {/* Modré okno */}
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-AntoninNeural (13).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Modré okno Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>vaše dcera je mladá<span className='italic text-xs'>-fem.</span></TableCell>
            <TableCell>vuestra/su hija es joven</TableCell>
          </TableRow>
    
          <TableRow>
            <TableCell>
              <button
                onClick={() => playAudio("/lesson7/cs-CZ-VlastaNeural (16).mp3")}
                className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                aria-label="Play Modré okno Audio"
              >
                <FaPlay size={20} />
              </button>
            </TableCell>
            <TableCell>Jejich syn je blázen<span className='italic text-xs'>-masc.</span></TableCell>
            <TableCell>Su hijo está loco (de ellos)</TableCell>
          </TableRow>
    
      
        </TableBody>
      </Table>
  </section>
    </div>
  )

}

export default lesson7