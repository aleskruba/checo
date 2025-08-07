
'use client';

import React, { useEffect, useState } from 'react';
import { useAudio } from "../../context/AudioContext";
import SectionTopComponent from '@/app/components/SectionTopComponents';

function lesson28() {
  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio();

  useEffect(() => {
    if (isPlayingAll || isPlayingOne) stopAllAudio();
    return () => {
      if (isPlayingAll || isPlayingOne) stopAllAudio();
    };
  }, []);

  const videoUrls = [
      'https://youtu.be/PMlJmos5BJk',
    'https://youtu.be/aoO4vWhFAEc'
  ];

  function getEmbedUrl(url: string) {
    const videoId = url.split('youtu.be/')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
<SectionTopComponent 
  title="El tiempo futuro en checo – el verbo 'být' y los verbos de movimiento"
  description="Aprende a formar el futuro en checo con el verbo 'být' (ser/estar) y los verbos de movimiento como 'jít', 'jet', 'letět'. Descubre cómo decir 'voy a ir', 'iré en coche', 'volaré', y 'estaré en casa', usando correctamente las formas del futuro."
/>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4"> 
  <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Todo sobre el tiempo futuro en checo explicado en estos dos videos
    </h2>
  </div>
</section>


      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videoUrls.map((url, index) => (
          <VideoCard key={index} embedUrl={getEmbedUrl(url)} index={index} />
        ))}
      </div>
    </div>
  );
}

function VideoCard({ embedUrl, index }: { embedUrl: string; index: number }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg relative mt-2">
      {!loaded && (
        <div className="flex justify-center items-center absolute inset-0 animate-pulse bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 z-10" > <h1>moment prosím ...</h1></div>
        
    )}
      <iframe
        className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        src={embedUrl}
        title={`Video ${index + 1}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default lesson28;




