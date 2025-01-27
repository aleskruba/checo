"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";

function lesson2() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12'>
      
       <SectionTopComponent
    title="Lección 2: Presentaciones personales 🗣️"
    description="Aprenderemos a presentarnos y a preguntar por el nombre de otras personas en checo."
  />
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4">
    Lección 2: Presentaciones personales 🗣️
  </h2>
  <ul className="space-y-4">
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Ahoj, já jsem Juan</span>
      <button
        onClick={() => playAudio("/lesson2/jsemJuan.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Ahoj Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Hola (informal), yo soy Juan – Usado entre amigos y personas conocidas.
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Dobrý den, já jsem Juan</span>
      <button
        onClick={() => playAudio("/lesson2/dobrýdenjsemJaun.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Dobrý den Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Buenos días, yo soy Juan – Saludo formal durante el día.
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Jak se jmenuješ?</span>
      <button
        onClick={() => playAudio("/lesson2/jaksejmenujes.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Jak se jmenuješ Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ¿Cómo te llamas? – Pregunta común para conocer el nombre de alguien.
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Jmenuji se Juan</span>
      <button
        onClick={() => playAudio("/lesson2/jmenujiseJuan.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Jmenuji se Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Me llamo Juan – Respuesta a la pregunta "Jak se jmenuješ?"
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Těší mě</span>
      <button
        onClick={() => playAudio("/lesson2/tesime.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Těší mě Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
      Mucho gusto o Encantado/a de conocerte – Expresión común después de una presentación  .
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Odkud jsi?</span>
      <button
        onClick={() => playAudio("/lesson2/odkudjsi.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Odkud jsi Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ¿De dónde eres? – Usado para preguntar sobre la procedencia de alguien.
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Jsem z Mexika</span>
      <button
        onClick={() => playAudio("/lesson2/jsemzMexika.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Jsem z Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Soy de Mexico – Respuesta a la pregunta "Odkud jsi?"
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Kolik je ti let?</span>
      <button
        onClick={() => playAudio("/lesson2/kolikjeti.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Kolik je ti let Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        ¿Cuántos años tienes? – Pregunta para saber la edad de alguien.
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Je mi dvacet let</span>
      <button
        onClick={() => playAudio("/lesson2/jemidvacet.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Je mi let Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Tengo veinte años – Respuesta a la pregunta "Kolik je ti let?"
      </p>
    </li>
    <li className="flex items-center space-x-4">
      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">Rád/a tě poznávám</span>
      <button
        onClick={() => playAudio("/lesson2/radtepoznavam.m4a")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Rád/a tě poznávám Audio"
      >
        <FaPlay size={20} />
      </button>
      <p className="text-sm text-gray-600 dark:text-gray-400">
      Es un placer conocerte. Es una expresión común para mostrar agrado al conocer a alguien. La forma "rád" se usa cuando el hablante es hombre, y "ráda" se usa cuando es mujer. La "/a" indica que la frase tiene una forma masculina y una femenina, dependiendo del género del hablante.
      </p>
    </li>
  </ul>
</section>

  </div>
  )
}

export default lesson2