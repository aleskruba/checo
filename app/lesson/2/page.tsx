"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import useStopAudio from '../../hooks/useStopAudio'
import { useAudio } from "../../context/AudioContext"; 
function lesson2() {

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
    <div className='w-full min-h-screen px-0 md:px-12'>
      
       <SectionTopComponent
    title="Números y palabras básicas"
    description="Aprenderemos los números del 1 al 10 y palabras básicas"
  />
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
  Čísla od 1 do 10 / Los números del 1 al 10
  </h2><ul className="space-y-4">
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">jedna</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (11).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Ahoj Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400 ">
      Una
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">dva</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (8).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
          disabled={isPlayingAll || isPlayingOne}
        aria-label="Play Dobrý den Audio"
  >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      dos
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">tři</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (9).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Tři Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      tres
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">čtyři</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (10).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Čtyři Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      cuatro
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">pět</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (12).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Pět Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      cinco
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">šest</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (13).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Šest Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      seis
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">sedm</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (15).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Sedm Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      siete
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">osm</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (16).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Osm Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      ocho
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">devět</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (17).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Devět Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      nueve
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">deset</span>
      <button
        onClick={() => playAudio("/numeros/cs-CZ-VlastaNeural (18).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Deset Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      diez
    </p>
  </li>
</ul>

</section>
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
  Pár českých slovíček pro začátek / Algunas palabras checas para comenzar
  </h2>
  <ul className="space-y-4">
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Máma</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (19).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Mama Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Madre
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Táta</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (5).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Tata Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Padre
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Syn</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (6).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Syn Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Hijo
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dcera</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (20).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Dcera Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Hija
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Babička</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (21).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Babička Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Abuela
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dědeček</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (7).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Dědeček Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Abuelo
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Chlapec</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (8).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Chlapec Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Niño
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dívka</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (22).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Dívka Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Chica
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Žena</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (23).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Žena Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Mujer
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Muž</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (9).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Muž Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Hombre
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dítě</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (10).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Dítě Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Niño
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dům</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (11).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Dům Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Casa
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Auto</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-AntoninNeural (12).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Auto Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Coche
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Zahrada</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (24).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Zahrada Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Jardín
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Stůl</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (25).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Stůl Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
      Mesa
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Židle</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (26).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play Stůl Audio"
        disabled={isPlayingAll || isPlayingOne}
      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
     Silla
    </p>
  </li>
  <li className="flex  items-center space-x-4">
    <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Škola</span>
      <button
        onClick={() => playAudio("/palabras/cs-CZ-VlastaNeural (27).mp3")}
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        disabled={isPlayingAll || isPlayingOne}
        aria-label="Play Stůl Audio"

      >
        <FaPlay size={20} />
      </button>
    </div>
    <p className="text-sm text-start text-gray-600 dark:text-gray-400">
     Škola
    </p>
  </li>
</ul>

  </section>
  </div>


  
  )
}

export default lesson2