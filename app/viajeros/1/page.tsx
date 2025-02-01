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
    <div className='w-full min-h-screen px-0 md:px-12'>

      <SectionTopComponent     
        title="Saludos y frases básicas 👋"
        description="En esta sección aprenderemos saludos básicos y frases esenciales en checo."
  />

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
<h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
        Saludos en checo 
      </h2>
      <ul className="space-y-4">
      <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ahoj</span>
          <button
            onClick={() => playAudio("/lesson1/ahoj.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ahoj Audio"
          >
            <FaPlay size={20} />
          </button>
          </div>
          <p className="text-sm text-start text-gray-600 dark:text-gray-400">
            Hola (informal) – Usado entre amigos y personas conocidas.
          </p>
        </li>
        <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dobrý den</span>
          <button
              onClick={() => playAudio("/lesson1/dobryden.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobrý den Audio"
          >
            <FaPlay size={20} />
          </button>
          </div>
          <p className="text-sm text-start text-gray-600 dark:text-gray-400">
            Buenos días – Usado como saludo formal durante el día.
          </p>
        </li>
        <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
      <div className='flex gap-4 '>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dobré ráno</span>
          <button
               onClick={() => playAudio("/lesson1/dobrerano.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobré ráno Audio"
          >
            <FaPlay size={20} />
          </button>
          </div>
          <p className="text-sm text-start text-gray-600 dark:text-gray-400">
            Buenos días (temprano) – Usado para desear un buen comienzo de día.
          </p>
        </li>
        <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dobré odpoledne</span>
          <button
               onClick={() => playAudio("/lesson1/dobreodpoledne.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobré odpoledne Audio"
          >
            <FaPlay size={20} />
          </button>
          </div>
          <p className="text-sm text-start text-gray-600 dark:text-gray-400">
            Buenas tardes – Usado en la tarde de manera más formal.
          </p>
        </li>
        <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
      <div className='flex gap-4 '>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dobrou noc</span>
          <button
                 onClick={() => playAudio("/lesson1/noc.m4a")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Dobrou noc Audio"
          >
            <FaPlay size={20} />
          </button>
          </div>
          <p className="text-sm text-start text-gray-600 dark:text-gray-400">
            Buenas noches – Usado para desear un buen descanso antes de dormir.
          </p>
        </li>
      </ul>

</section>
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
    Frases esenciales en checo
  </h2>
  <ul className="space-y-4">
  <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Na shledanou</span>
  <button
    onClick={() => playAudio("/lesson1/nashledanou.m4a")}
    className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
    aria-label="Play Na shledanou Audio"
  >
    <FaPlay size={20} />
  </button>
  </div>
  <p className="text-sm text-start text-gray-600 dark:text-gray-400">
    Adiós – Despedida común en checo.
  </p>
</li>

<li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Jak se máš?</span>
      <button
        onClick={() => playAudio("/lesson1/jak.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Jak se máš Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        ¿Cómo estás? – Usado para preguntar cómo se encuentra alguien.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Děkuji</span>
      <button
        onClick={() => playAudio("/lesson1/dekuji.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Děkuji Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        Gracias – Expresión de gratitud.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Prosím</span>
      <button
        onClick={() => playAudio("/lesson1/prosim.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Prosím Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
  Por favor – Usado para pedir algo educadamente. También se puede usar como respuesta a "gracias", similar a "de nada".
</p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Omlouvám se</span>
      <button
        onClick={() => playAudio("/lesson1/omlouvam.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Omlouvám se Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        Lo siento – Expresión de disculpa.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Kolik to stojí?</span>
      <button
        onClick={() => playAudio("/lesson1/kolik.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Kolik to stojí Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        ¿Cuánto cuesta? – Usado para preguntar el precio.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Kde je toaleta?</span>
      <button
        onClick={() => playAudio("/lesson1/kdeje.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Kde je toaleta Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        ¿Dónde está el baño? – Usado para preguntar por los baños.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Pomozte mi, prosím</span>
      <button
        onClick={() => playAudio("/lesson1/pomoztemi.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Pomozte mi Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        Ayúdame, por favor – Usado para pedir ayuda.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Rozumím</span>
      <button
        onClick={() => playAudio("/lesson1/rozumim.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Rozumím Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        Entiendo – Usado para indicar que comprendes algo.
      </p>
    </li>
    <li className="flex items-start flex-col md:flex-row md:items-center space-x-4">
     
     <div className='flex gap-4 '>
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Nerozumím</span>
      <button
        onClick={() => playAudio("/lesson1/nerozumim.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Nerozumím Audio"
      >
        <FaPlay size={20} />
      </button>
      </div>
      <p className="text-sm text-start text-gray-600 dark:text-gray-400">
        No entiendo – Usado para indicar que no comprendes algo.
      </p>
    </li>
  </ul>
</section>


    </div>
  )
}

export default lesson1