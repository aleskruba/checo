// src/components/Conversations2.tsx
"use client";
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useAudio } from "../../context/AudioContext"; // Importování hooku
import { useEffect, useState } from "react";

interface DialogLine {
  name: string;
  text: string;
  es: string;
  audio: string;
}

const Conversations5: React.FC = () => {
  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio(); 

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
  
    const dialog: DialogLine[] = [
      { name: "Carlos", text: "Dobrý den! Kde je nádraží?", es: "¡Buenos días! ¿Dónde está la estación?", audio: "/dialog5/cs-CZ-AntoninNeural (35).mp3" },
      { name: "Marta", text: "Nádraží je blízko. Jděte rovně a pak doprava.", es: "La estación está cerca. Vaya recto y luego a la derecha.", audio: "/dialog5/cs-CZ-VlastaNeural (94).mp3" },
      { name: "Carlos", text: "Děkuji! A je to daleko?", es: "¡Gracias! ¿Está lejos?", audio: "/dialog5/cs-CZ-AntoninNeural (36).mp3" },
      { name: "Marta", text: "Ne, asi deset minut pěšky.", es: "No, unos diez minutos a pie.", audio: "/dialog5/cs-CZ-VlastaNeural (95).mp3" },
      { name: "Carlos", text: "Dobře, děkuji moc!", es: "¡Bien, muchas gracias!", audio: "/dialog5/cs-CZ-AntoninNeural (37).mp3" },
      { name: "Marta", text: "Není zač! Hezký den!", es: "¡De nada! ¡Que tenga un buen día!", audio: "/dialog5/cs-CZ-VlastaNeural (96).mp3" }
    ];


 
  
  return (
    <div className="flex w-full flex-col items-center min-h-screen px-0 md:px-12">
      <div className="flex justify-center gap-4 text-base">
        <h1 className="font-semibold">Reproducir el diálogo completo</h1>
        {!isPlayingAll ? (
        <button
        onClick={() => playAllAudio(dialog)} // Přehrání celého dialogu
        className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
        aria-label="Play All Audio"
        disabled={isPlayingAll || isPlayingOne} // Zakázání tlačítka při přehrávání celého dialogu
      >
          <FaPlay size={20} />
        </button>
        ): (
          <button
            onClick={stopAllAudio} // Zastavení přehrávání
            className="text-red-600 hover:text-red-800 dark:hover:text-red-400"
            aria-label="Stop All Audio"
          >
            <FaStop size={20} />
          </button>
        )}
      </div>

      <section className="mt-4 p-1 shadow-lg rounded-2xl pt-4 dark:bg-gray-800 bg-white w-full md:w-[80%]">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">Kde je nádraží?/¿Dónde está la estación de tren?</h2>
        <div className="space-y-3">
          {dialog.map((line, index) => (
            <div className="w-full flex flex-col rounded-xl shadow-md py-2 px-2" key={index}>
              <div
                className={`flex  justify-between   ${line.name === "Pavel" ? "" : " w-full  "}`}
              >
                <span className={`font-semibold text-xs md:text-base pr-2 ${line.name === "Marta" ? "flex justify-start md:justify-end w-full  md:pr-8  text-pink-700 dark:text-pink-300" : "text-gray-600 dark:text-gray-400"} `}>
                  <span className="mr-1">{line.name}:</span>
                  <span className="font-normal first-letter: text-black dark:text-white">{line.text}</span>
                </span>
                <button
                onClick={() => playAudio(line.audio)}
                className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                aria-label={`Play ${line.name} Audio`}
                disabled={isPlayingAll || isPlayingOne}
              >
                  <FaPlay size={20} />
                </button>
              </div>

              <h1 className={`text-xs italic ${line.name === "Marta" ? "text-left md:text-right md:pr-10" : "text-left"}`}>
                {line.es}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Conversations5;
