"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
function lesson5() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
             <SectionTopComponent
    title='Caracteres especiales checos'
    description='En esta lección, aprenderemos sobre los caracteres especiales checos, como č, š, ř y ů , .... para que puedas leer y pronunciar el checo como un nativo. ¡Vamos allá! 😊'
    />
 <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          📖 En checo, la tilde alarga las vocales, igual que en español. El
          círculo sobre "ů" también alarga el sonido, mientras que "ú" se usa
          al inicio de una palabra y "ů" se usa en el medio.
        </h1>
 
        <p className="text-gray-800 dark:text-gray-300 font-medium mt-4">Vocales con tilde:</p>
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex justify-center ">
 
          <ul className="list-disc text-left list-inside text-gray-700 dark:text-gray-300">
            <li>
              á - <span className="font-semibold">máma</span> (mamá)
              <button onClick={() => playAudio("/lesson5/cs-CZ-AntoninNeural.mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2" aria-label="Play Audio">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              é - <span className="font-semibold">délka</span> (longitud)
              <button onClick={() => playAudio("/lesson5/cs-CZ-AntoninNeural (1).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              í  - <span className="font-semibold">třída</span> (clase)
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural.mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ý  - <span className="font-semibold">dlouhý</span> (largo)
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (9).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ó - <span className="font-semibold">kód</span> (código)
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (1).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ú - <span className="font-semibold">úhel</span> (ángulo)
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (2).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ů - <span className="font-semibold">dům</span> (casa)
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (3).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Háčky */}   
      <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          🔤 En checo, el háček (ˇ) suaviza el sonido de las letras.
        </h1>
        <p className="text-gray-800 dark:text-gray-300 font-medium mt-4">Letras con háček: <span className='text-2xl bold'> ˇ </span>parece "techo inclinado"</p>
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex justify-center">
        
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-left">
            <li>
              č - <span className="font-semibold">čaj</span> (té) 
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (4).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ď - <span className="font-semibold">ďábel</span> (diablo) 😈
              <button onClick={() => playAudio("/lesson5/cs-CZ-AntoninNeural (2).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ě - <span className="font-semibold">město</span> (ciudad) 
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (5).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
              ř - <span className="font-semibold">řeka</span> (río) 
              <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (6).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
                <FaPlay size={16} />
              </button>
            </li>
            <li>
  š - <span className="font-semibold">naše</span> (nuestro) 
  <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (7).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
    <FaPlay size={16} />
  </button>
</li>
<li>
  ž - <span className="font-semibold">žába</span> (rana) 🐸
  <button onClick={() => playAudio("/lesson5/cs-CZ-VlastaNeural (8).mp3")} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 ml-2">
    <FaPlay size={16} />
  </button>
</li>
          </ul>
        </div>
      </section>
 </div>
)
}

export default lesson5