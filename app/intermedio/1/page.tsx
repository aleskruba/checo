'use client';

import React, { useEffect, useState } from 'react';
import { useAudio } from "../../context/AudioContext";
import SectionTopComponent from '@/app/components/SectionTopComponents';

function lesson14() {
  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio();

  useEffect(() => {
    if (isPlayingAll || isPlayingOne) stopAllAudio();
    return () => {
      if (isPlayingAll || isPlayingOne) stopAllAudio();
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <SectionTopComponent
        title="Videa pro začátečníky a mírně pokročilé"
        description=""
      />

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

export default lesson14;
