"use client"
import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { useAudio } from "../../context/AudioContext"; 
function avanzado1() {

  const { isPlayingAll,  stopAllAudio, isPlayingOne } = useAudio(); // Using context
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
        title="Dnešní den v historii"
        description="Každé datum skrývá příběh. Objevte historické události"
  />


<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white dark:text-gray-200 text-gray-900 border dark:border-gray-700 border-gray-300">
  <h2 className="text-2xl font-bold mb-4 text-center">Kalendárium jinak</h2>
  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
    <iframe
      src="https://pekne-datum.cz/"
      title="Pěkné datum"
      className="absolute top-0 left-0 w-full h-full rounded-xl border-0"
      allowFullScreen
    ></iframe>
  </div>
</section>


    </div>
  )
}

export default avanzado1