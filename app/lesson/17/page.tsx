"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
function lesson16() {

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

<div className='min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-2'>
    <div className="flex  items-start pt-10 justify-center ">
  <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
      ¡Contenido en preparación!
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
      Esta sección estará disponible pronto. ¡Gracias por tu paciencia!
    </p>
    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
      Próximamente disponible...
    </span>
  </div>
</div>
</div>

  )
}

export default lesson16