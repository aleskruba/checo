"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
function lesson14() {

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

  const videoUrls = [
  'https://youtu.be/13KJeC_DvzM',
  'https://youtu.be/vitLllSNg0k',
  'https://youtu.be/EV5KGQWVUEw',
  'https://youtu.be/DUJ5ZZ-AhLM',
  'https://youtu.be/8c1RTq0WLsY',
  'https://youtu.be/r-uryQ74xhk',
  'https://youtu.be/m_ROcuZAFVA',
];

function getEmbedUrl(url: string) {
  const videoId = url.split('youtu.be/')[1];
  return `https://www.youtube.com/embed/${videoId}`;
}

  return (

    <div className="min-h-screen  text-center p-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Videa pro začátečníky a mírně pokročilé      </h2>
 
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videoUrls.map((url, index) => (
          <div key={index} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={getEmbedUrl(url)}
              title={`Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>

  )
}

export default lesson14