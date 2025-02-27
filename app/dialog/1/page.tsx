"use client"

import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { useAudio } from "../../context/AudioContext"; // Importování hooku

interface DialogLine {
  name: string;
  text: string;
  es: string;
  audio: string;
}
function Conversations1() {
  const { isPlayingAll, playAllAudio,stopAllAudio } = useAudio(); // Použití kontextu
  const dialog = [
    { name: "Pavel", text: "Ahoj! Já jsem Pavel. Jak se jmenuješ?", es: "¡Hola! Yo soy Pavel. ¿Cómo te llamas?", audio: "/dialog1/cs-CZ-AntoninNeural (18).mp3" },
    { name: "Jana", text: "Ahoj! Jmenuji se Jana. Těší mě.", es: "¡Hola! Me llamo Jana. Mucho gusto.", audio: "/dialog1/cs-CZ-VlastaNeural (78).mp3" },
    { name: "Pavel", text: "Těší mě, Jano. Odkud jsi?", es: "Mucho gusto, Jana. ¿De dónde eres?", audio: "/dialog1/cs-CZ-AntoninNeural (19).mp3"  },
    { name: "Jana", text: "Jsem z Prahy. A ty?", es: "Soy de Praga. ¿Y tú?",audio: "/dialog1/cs-CZ-VlastaNeural (79).mp3" },
    { name: "Pavel", text: "Já jsem z Brna.", es: "Yo soy de Brno.", audio: "/dialog1/cs-CZ-AntoninNeural (20).mp3" },
    { name: "Jana", text: "Aha. A co děláš?", es: "Ah, ya veo. ¿Y qué haces?", audio: "/dialog1/cs-CZ-VlastaNeural (80).mp3" },
    { name: "Pavel", text: "Jsem student. A ty?", es: "Soy estudiante. ¿Y tú?", audio:"/dialog1/cs-CZ-AntoninNeural (21).mp3" },
    { name: "Jana", text: "Já pracuji jako učitelka.", es: "Yo trabajo como profesora.", audio: "/dialog1/cs-CZ-VlastaNeural (81).mp3" },
    { name: "Pavel", text: "To je zajímavé!", es: "¡Qué interesante!", audio:"/dialog1/cs-CZ-AntoninNeural (22).mp3"  },
  ];

  
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='flex w-full  flex-col items-center min-h-screen px-0 md:px-12'>

    <div className="flex justify-center gap-4 text-base">
        <h1 className="font-semibold">Reproducir el diálogo completo</h1>
        {!isPlayingAll ? (
        <button
          onClick={() => playAllAudio(dialog)} // Přehrání celého dialogu
          className={`${isPlayingAll ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
          aria-label="Play All Audio"
          disabled={isPlayingAll} // Zakázání tlačítka při přehrávání celého dialogu
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
     
      <section className="mt-4 p-1 shadow-lg rounded-2xl pt-4 dark:bg-gray-800 bg-white w-full md:w-[60%]">
    <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">Seznámení (Presentación)</h2>
    <div className="space-y-3">
      {dialog.map((line, index) => (
        <div className="w-full flex flex-col"  key={index}>
       
            <div
             
              className={`flex items-center justify-between p-3  rounded-xl shadow-md ${line.name === "Pavel" ? "" : " w-full  "}`}
            >
                <span className={`font-semibold text-xs md:text-base pr-2 ${line.name === "Jana" ? "flex justify-start md:justify-end w-full  md:pr-8  text-pink-700 dark:text-pink-300" : "text-gray-600 dark:text-gray-400"} `}> <span className='mr-1'>{line.name}:</span> <span className='font-normal  first-letter: text-black dark:text-white'>{line.text}</span></span>
              <button
                onClick={() => playAudio(line.audio)}
                className={`${isPlayingAll ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
                aria-label={`Play ${line.name} Audio`}
                disabled={isPlayingAll}
              >
                <FaPlay size={20} />
              </button>
            </div>

            <h1   className={`text-xs italic ${line.name === "Jana" ? "text-left md:text-right md:pr-10" : "text-left"}`}
            >{line.es}</h1>
        </div>
      ))}
    </div>
  </section>
  
  </div>
  )
}

export default Conversations1