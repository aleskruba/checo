// src/components/Conversations2.tsx
"use client";
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useAudio } from "../../context/AudioContext"; // Importování hooku
import { useState } from "react";

interface DialogLine {
  name: string;
  text: string;
  es: string;
  audio: string;
}

const Conversations3: React.FC = () => {
  const { isPlayingAll, playAllAudio,stopAllAudio } = useAudio(); // Použití kontextu
    const [isPlayingOne,setIsPlayingOne] = useState(false)
  
    const dialog: DialogLine[] = [
      { name: "Petr", text: "Dobrý den! Máte kávu?", es: "¡Buenos días! ¿Tienen café?", audio: "/dialog3/cs-CZ-AntoninNeural (27).mp3" },
      { name: "Servírka", text: "Ano, máme. Jakou kávu si přejete?", es: "Sí, tenemos. ¿Qué café desea?", audio: "/dialog3/cs-CZ-VlastaNeural (86).mp3" },
      { name: "Petr", text: "Prosím jedno espresso.", es: "Un espresso, por favor.", audio: "/dialog3/cs-CZ-AntoninNeural (28).mp3"  },
      { name: "Servírka", text: "Dáte si něco k tomu?", es: "¿Quiere algo más?", audio: "/dialog3/cs-CZ-VlastaNeural (87).mp3" },
      { name: "Petr", text: "Ano, jeden koláč.", es: "Sí, un pastel.", audio: "/dialog3/cs-CZ-AntoninNeural (29).mp3" },
      { name: "Servírka", text: "Dobře. Espresso a koláč. Hned to bude.", es: "Muy bien. Un espresso y un pastel. Enseguida.", audio: "/dialog3/cs-CZ-VlastaNeural (88).mp3" },
      { name: "Petr", text: "Děkuji!", es: "¡Gracias!", audio: "/dialog3/cs-CZ-AntoninNeural (30).mp3"  },
      { name: "Servírka", text: "Není zač!", es: "¡De nada!", audio: "/dialog3/cs-CZ-VlastaNeural (89).mp3" }
    ];

  const playAudio = (audioUrl: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      setIsPlayingOne(true);  // Začneme přehrávat zvuk
      const audio = new Audio(audioUrl);
      audio.play();
  
      audio.onended = () => {
        setIsPlayingOne(false);  // Ujistíme se, že stav je změněn po skončení přehrávání
        resolve();  // Promise se vyřeší
      };
  
      audio.onerror = (error) => {
        setIsPlayingOne(false);  // Ujistíme se, že stav je změněn, i když nastane chyba
        reject(error);  // Pokud dojde k chybě, Promise se odmítne
      };
    });
  };
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

   {/*    <section className="mt-4 p-1 shadow-lg rounded-2xl pt-4 dark:bg-gray-800 bg-white w-full md:w-[60%]">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">V kavárně/En el café</h2>
        <div className="space-y-3">
          {dialog.map((line, index) => (
            <div className="w-full flex flex-col rounded-xl shadow-md py-2 px-2" key={index}>
              <div
                className={`flex  justify-between   ${line.name === "Pavel" ? "" : " w-full  "}`}
              >
                <span className={`font-semibold text-xs md:text-base pr-2 ${line.name === "Servírka" ? "flex justify-start md:justify-end w-full  md:pr-8  text-pink-700 dark:text-pink-300" : "text-gray-600 dark:text-gray-400"} `}>
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

              <h1 className={`text-xs italic ${line.name === "Servírka" ? "text-left md:text-right md:pr-10" : "text-left"}`}>
                {line.es}
              </h1>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}

export default Conversations3;
