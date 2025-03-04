// src/hooks/useStopAudio.ts
import { useEffect } from 'react';
import { useAudio } from '../context/AudioContext';

const useStopAudio = () => {
  const { isPlayingAll, stopAllAudio, isPlayingOne } = useAudio(); // Použití contextu

  useEffect(() => {
    const stopAudioIfPlaying = () => {
      if (isPlayingAll || isPlayingOne) {
        stopAllAudio();
      }
    };

    stopAudioIfPlaying();

    return () => {
      stopAudioIfPlaying();
    };
  }, [isPlayingAll, isPlayingOne, stopAllAudio]); // Spuštění efektu při změně stavu
};

export default useStopAudio;
