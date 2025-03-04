"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
function lesson10() {


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
    title='El verbo "mít / tener" en presente'
    description='En esta lección, aprenderemos el verbo "mít" en checo y cómo usarlo en frases básicas.'
  />
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
    <div className="overflow-x-auto mt-4">
        <Table className="min-w-full">
          <TableHeader>
          <TableRow>
            <TableHead className="text-center ">Audio</TableHead>
              <TableHead className="text-center">Česky/En checo</TableHead>
                  <TableHead className="text-center">Španělsky/En español</TableHead>
          </TableRow>

          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (45).mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Já jsem Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já mám</TableCell>
              <TableCell>Yo tengo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (46).mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Ty jsi Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty máš</TableCell>
              <TableCell>Tú tienes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                   onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (47).mp3")}
                   className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                   disabled={isPlayingAll || isPlayingOne}
                                     aria-label="Play On je Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On má</TableCell>
              <TableCell>Él tiene</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
               onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (48).mp3")}
               className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
               disabled={isPlayingAll || isPlayingOne}
                                 aria-label="Play Ona je Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ona má</TableCell>
              <TableCell>Ella tiene</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
             onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (49).mp3")}
             className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
             disabled={isPlayingAll || isPlayingOne}
                               aria-label="Play My jsme Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>My máme</TableCell>
              <TableCell>Nosotros tenemos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                    onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (50).mp3")}
                    className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                    disabled={isPlayingAll || isPlayingOne}
                                      aria-label="Play Vy jste Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Vy máte</TableCell>
              <TableCell>Vosotros tenéis/Ustedes tienen</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                   onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (51).mp3")}
                   className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                   disabled={isPlayingAll || isPlayingOne}
                                     aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Oni mají / Ony mají</TableCell>
              <TableCell>Ellos tienen / Ellas tienen</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

   </section>

   <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
    <h1 className="text-2xl font-bold mb-4">Explicación del Acusativo en Checo</h1>
    <p className="mb-4">
      En checo, cuando usamos la estructura <span className="font-semibold">"Yo tengo + sustantivo"</span> 
      (<span className="italic">Já mám + podstatné jméno</span>), el sustantivo generalmente se usa en 
      <span className="font-semibold "> acusativo</span> (<span className="italic">4. pád</span>).
    </p>
    <h2 className="text-xl font-semibold mb-2">📌 ¿Qué es el acusativo?</h2>
    <p className="mb-4">
      El acusativo se usa para el <span className="font-semibold">objeto directo</span> de la oración, es decir, 
      la persona o cosa que recibe la acción del verbo. Responde a las preguntas 
      <span className="font-semibold">"Koho?"</span> (<span className="italic">¿A quién?</span>) y 
      <span className="font-semibold">"Co?"</span> (<span className="italic">¿Qué?</span>).
    </p>
    <h2 className="text-xl font-semibold mb-2">🧠 Ejemplos:</h2>
    <ul className="list-disc list-inside mb-4">
      <li><span className="font-semibold">"Já mám knihu."</span> (Yo tengo un libro.)</li>
      <li><span className="italic">"Knihu"</span> está en acusativo, ya que responde a <span className="font-semibold">"Co?"</span> (¿Qué?)</li>
      <li><span className="font-semibold">"Já mám psa."</span> (Yo tengo un perro.)</li>
      <li><span className="italic">"Psa"</span> es el acusativo de <span className="italic">"pes"</span> y responde a <span className="font-semibold">"Koho?"</span> (¿A quién?)</li>
    </ul>
    <h2 className="text-xl font-semibold mb-2">❗ ¡Importante!</h2>

    <div className="mb-4">
      <p>En checo, la forma del acusativo depende del género (masculino, femenino, neutro) y de si el sustantivo masculino es animado o inanimado.</p>
    <p>Además, en checo, el acusativo suele implicar un cambio en la terminación del sustantivo, por ejemplo: <strong className="font-semibold">kniha → knihu</strong> , <strong className="font-semibold">pes → psa</strong>. Sin embargo, en esta lección, practicaremos solo aquellos donde la terminación permanece igual.</p>
  </div>
    </section>


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
                   onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (52).mp3")}
                   className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                   disabled={isPlayingAll || isPlayingOne}
                                     aria-label="Play Já jsem Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já mám auto</TableCell>
              <TableCell>Yo tengo un coche</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (53).mp3")}
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                  disabled={isPlayingAll || isPlayingOne}
                                    aria-label="Play Já jsem Mexičan Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty máš dům</TableCell>
              <TableCell>Tu tienes una casa.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                    onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (54).mp3")}
                    className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                    disabled={isPlayingAll || isPlayingOne}
                                      aria-label="Play Já jsem Brazilec Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On má kolo</TableCell>
              <TableCell>Él tiene una bicicleta</TableCell>
            </TableRow>

     
            <TableRow>
              <TableCell>
                <button
           onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (55).mp3")}
           className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
           disabled={isPlayingAll || isPlayingOne}
                             aria-label="Play Ty jsi Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ona má velký byt </TableCell>
              <TableCell>Ella tiene un apartamento grande</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
           onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (56).mp3")}
           className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
           disabled={isPlayingAll || isPlayingOne}
                             aria-label="Play Ty jsi Peruánec Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>My máme dvě auta</TableCell>
              <TableCell>Nosotros tenemos dos coches.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
        onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (57).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        disabled={isPlayingAll || isPlayingOne}
                          aria-label="Play Ty jsi Španěl Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Vy máte tři stoly</TableCell>
              <TableCell>Vosotros tenéis / Ustedes tienen tres mesas</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <button
                onClick={() => playAudio("/lesson10/cs-CZ-VlastaNeural (58).mp3")}
                className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                disabled={isPlayingAll || isPlayingOne}
                                  aria-label="Play On je Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Oni mají 2 děti</TableCell>
              <TableCell>Ellos tienen 2 hijos</TableCell>
            </TableRow>
            
          </TableBody>
        </Table>

   

  </section> 
  </div>
  )
}

export default lesson10