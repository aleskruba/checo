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
        title="Introducción al idioma checo"
        description="¡Bienvenidos a la aventura de aprender checo! 🇨🇿🎉"
  />

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white dark:text-gray-200 text-gray-900 border dark:border-gray-700 border-gray-300">

  <p className="mb-6 text-center">
    Hola y bienvenidos a esta primera lección de checo. Si hablas español, ¡felicidades! 
    Ya tienes una ventaja, porque muchas palabras en checo y español tienen raíces latinas 
    o similares. Pero también hay algunas diferencias importantes que veremos poco a poco.
  </p>

  <h2 className="text-xl font-semibold text-center mb-4 dark:text-yellow-400 text-yellow-600">
    🌟 ¿En qué se diferencia el checo del español?
  </h2>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Column 1 */}
    <div className="space-y-6">
      <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-700 bg-gray-100">
        <span className="text-lg font-semibold dark:text-red-400 text-red-600">🔹 Las declinaciones de los sustantivos:</span>
        <p className="mt-2 text-left">
          En checo, los sustantivos cambian según su función en la oración. En español decimos 
          <b> "el libro está en la mesa"</b> y <b>"veo el libro"</b>, pero en checo la palabra "libro" cambia de forma. 
          ¡No te preocupes! Aprenderemos esto poco a poco.
        </p>
      </div>

      <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-700 bg-gray-100">
        <span className="text-lg font-semibold dark:text-green-400 text-green-600">🔹 La pronunciación:</span>
        <p className="mt-2 text-left">
          El checo se pronuncia como se escribe, pero tiene sonidos que no existen en español, 
          como <b>ř</b> (mezcla entre "r" y "sh") o <b>č</b> (como "ch" en "chico"). También hay palabras sin vocales, 
          como <b>krk</b> (cuello) o <b>prst</b> (dedo).
        </p>
      </div>
    </div>

    {/* Column 2 */}
    <div className="space-y-6">
      <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-700 bg-gray-100">
        <span className="text-lg font-semibold dark:text-purple-400 text-purple-600">🔹 Los verbos y sus aspectos:</span>
        <p className="mt-2 text-left">
          En español decimos <b>"estoy escribiendo"</b> y <b>"escribí"</b>. En checo hay algo similar, 
          pero los verbos tienen dos formas: una para acciones en proceso (<b>psát</b> - escribir) y 
          otra para acciones terminadas (<b>napsat</b> - haber escrito).
        </p>
      </div>

      <div className="flex flex-col items-start p-4 rounded-lg dark:bg-gray-700 bg-gray-100">
        <span className="text-lg font-semibold dark:text-blue-400 text-blue-600">🔹 Los artículos no existen:</span>
        <p className="mt-2 text-left">
          En español decimos <b>"el coche"</b>, pero en checo simplemente es <b>auto</b>. No hay <i>el</i> o <i>la</i>, 
          así que no tienes que preocuparte por aprender artículos.
        </p>
      </div>
    </div>
  </div>

  <p className="mt-8 text-center font-semibold dark:text-gray-300 text-gray-700">
    ¡Aprender checo puede ser un reto, pero con práctica lo lograrás! 🚀
  </p>
</section>



    </div>
  )
}

export default lesson1