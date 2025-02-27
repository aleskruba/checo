import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioContextType {
  isPlayingAll: boolean;
  playAllAudio: (dialog: { audio: string }[]) => Promise<void>;
  stopAllAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // Store the audio instance

  const playAllAudio = async (dialog: { audio: string }[]) => {
    setIsPlayingAll(true);
    for (const item of dialog) {
      await playAudioFull(item.audio);
      await delay(200); // 200ms pause between audios
    }
    setIsPlayingAll(false); // Set to false after playing all audios
  };

  const playAudioFull = (src: string) => {
    return new Promise<void>((resolve) => {
      if (audio) {
        audio.src = src; // Reuse the existing audio element
        audio.play();
        audio.onended = () => resolve(); // Resolve the promise once audio ends
      } else {
        const newAudio = new Audio(src);
        newAudio.play();
        newAudio.onended = () => resolve(); // Resolve the promise once audio ends
        setAudio(newAudio); // Save the new audio instance
      }
    });
  };

  const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

  const stopAllAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlayingAll(false);
  };

  return (
    <AudioContext.Provider value={{ isPlayingAll, playAllAudio, stopAllAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
