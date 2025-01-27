"use client"
import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";

function lesson1() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-12'>

      <SectionTopComponent     
        title="Lección 1: Saludos y frases básicas 👋"
        description="En esta primera lección, aprenderemos saludos básicos y frases esenciales en checo."
  />

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
<h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
        Saludos en checo 
      </h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ahoj</span>
          <button
            onClick={() => playAudio("/lesson1/ahoj.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ahoj Audio"
          >
            <FaPlay size={20} />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hola (informal) – Usado entre amigos y personas conocidas.
          </p>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dobrý den</span>
          <button
              onClick={() => playAudio("/lesson1/den.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobrý den Audio"
          >
            <FaPlay size={20} />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Buenos días – Usado como saludo formal durante el día.
          </p>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dobré ráno</span>
          <button
               onClick={() => playAudio("/lesson1/rano.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobré ráno Audio"
          >
            <FaPlay size={20} />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Buenos días (temprano) – Usado para desear un buen comienzo de día.
          </p>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dobré odpoledne</span>
          <button
               onClick={() => playAudio("/lesson1/odpo.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobré odpoledne Audio"
          >
            <FaPlay size={20} />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Buenas tardes – Usado en la tarde de manera más formal.
          </p>
        </li>
        <li className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Dobrou noc</span>
          <button
                 onClick={() => playAudio("/lesson1/noc.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobrou noc Audio"
          >
            <FaPlay size={20} />
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Buenas noches – Usado para desear un buen descanso antes de dormir.
          </p>
        </li>
      </ul>

</section>
   

    </div>
  )
}

export default lesson1