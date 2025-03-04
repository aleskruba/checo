import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioContextType {
  isPlayingAll: boolean;
  isPlayingOne: boolean;  // Track if individual audio is playing
  playAllAudio: (dialog: { audio: string }[]) => Promise<void>;
  stopAllAudio: () => void;
  playAudio: (audioUrl: string) => Promise<void>;  // Function for playing individual audio
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

interface AudioProviderProps {
  children: ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [isPlayingOne, setIsPlayingOne] = useState(false); // Track if one audio is playing
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // Store the audio instance for multiple audios
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null); // Track the current individual audio

  // Function to play all audios in a dialog sequentially
  const playAllAudio = async (dialog: { audio: string }[]) => {
    setIsPlayingAll(true);
    for (const item of dialog) {
      await playAudioFull(item.audio);
      await delay(200); // 200ms pause between audios
    }
    setIsPlayingAll(false); // Set to false after playing all audios
  };

  // Function to play individual audio (the audio for one item)
  const playAudio = (audioUrl: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setIsPlayingOne(true);
      const audio = new Audio(audioUrl);
      setCurrentAudio(audio); // Set current audio

      audio.play();

      audio.onended = () => {
        setIsPlayingOne(false);
        setCurrentAudio(null); // Reset current audio
        resolve();
      };

      audio.onerror = (error) => {
        setIsPlayingOne(false);
        setCurrentAudio(null); // Reset current audio
        reject(error);
      };
    });
  };

  // Function to handle playing audio in sequence for the dialog
  const playAudioFull = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      if (audio) {
        audio.src = src; // Reuse the existing audio element
        audio.play();
        audio.onended = () => resolve(); // Resolve the promise once audio ends
        audio.onerror = (error) => reject(error);
      } else {
        const newAudio = new Audio(src);
        newAudio.play();
        newAudio.onended = () => resolve(); // Resolve the promise once audio ends
        newAudio.onerror = (error) => reject(error);
        setAudio(newAudio); // Save the new audio instance
      }
    });
  };

  // Delay between audios
  const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

  // Function to stop all audios
  const stopAllAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setIsPlayingAll(false);
    setIsPlayingOne(false); // Reset state for individual audio as well
  };

  return (
    <AudioContext.Provider value={{ isPlayingAll, isPlayingOne, playAllAudio, stopAllAudio, playAudio, }}>
      {children}
    </AudioContext.Provider>
  );
};

// Custom hook to use the audio context
export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
