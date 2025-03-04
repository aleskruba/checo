"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
function lesson11() {

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
    title='Verbos que usan el acusativo'
    description= 'En esta lección, aprenderemos los verbos que se usan con el acusativo y cómo utilizarlos correctamente en oraciones.'
/>
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <p className="text-gray-700 dark:text-gray-300">
    En esta lección <strong className='font-bold'>no nos</strong> centraremos en la declinación de estos verbos. Para empezar, es importante saber cuáles son los verbos que se usan con el acusativo.
    Abordaremos la declinación y la gramática detallada en futuras lecciones.
  </p>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white">
    
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
    🛠️ Verbos comunes que se usan con acusativo
   </h2>
  
  <p className="text-gray-700 dark:text-gray-300"><strong>Mít</strong> – Mám auto / <em>Tengo un carro</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Vidět</strong> – Vidím přítele / <em>Veo a un amigo</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Slyšet</strong> – Slyším hudbu / <em>Escucho música</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Číst</strong> – Čtu knihu / <em>Leo un libro</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Psát</strong> – Píšu dopis / <em>Escribo una carta</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Koupit</strong> – Koupil jsem dárek / <em>Compré un regalo</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Jíst</strong> – Jím jablko / <em>Como una manzana</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Pít</strong> – Piji vodu / <em>Bebo agua</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Dát</strong> – Dám ti peníze / <em>Te doy dinero</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Hledat</strong> – Hledám klíče / <em>Busco las llaves</em>.</p>

  <h2 className="text-2xl font-semibold my-4 text-gray-800 dark:text-white">
  Verbos relacionados con personas

  </h2>
  
  <p className="text-gray-700 dark:text-gray-300"><strong>Potkat</strong> – Potkal jsem kamaráda / <em>Encontré a un amigo</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Navštívit</strong> – Navštívím babičku / <em>Visitaré a mi abuela</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Milovat</strong> – Miluji přítelkyni / <em>Amo a mi novia</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Nenávidět</strong> – Nenávidím toho člověka / <em>Odio a esa persona</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Vítat</strong> – Vítám hosty / <em>Doy la bienvenida a los invitados</em>.</p>

  <h2 className="text-2xl font-semibold my-4 text-gray-800 dark:text-white">
  Verbos relacionados con actividades o cosas

  </h2>
  
  <p className="text-gray-700 dark:text-gray-300"><strong>Používat</strong> – Používám telefon / <em>Uso el teléfono</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Opravovat</strong> – Opravuji auto / <em>Arreglo el coche</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Stavět</strong> – Stavím dům / <em>Construyo una casa</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Řídit</strong> – Řídím auto / <em>Conduzco un coche</em>.</p>
  <p className="text-gray-700 dark:text-gray-300"><strong>Uklízet</strong> – Uklízím byt / <em>Limpio el apartamento</em>.</p>

 
</section>


  </div>
  )
}

export default lesson11