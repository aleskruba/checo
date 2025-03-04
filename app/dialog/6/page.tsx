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
  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio(); // Using context

    const dialog: DialogLine[] = [
        { name: "Letištní pracovník", text: "Dobrý den! Pasy a letenky, prosím.", es: "¡Buenos días! Pasaportes y billetes, por favor.", audio: "/dialog6/cs-CZ-VlastaNeural (97).mp3" },
        { name: "Carlos", text: "Tady jsou.", es: "Aquí están.", audio: "/dialog6/cs-CZ-AntoninNeural (38).mp3" },
        { name: "Letištní pracovník", text: "Máte zavazadla k odbavení?", es: "¿Tiene equipaje para facturar?", audio: "/dialog6/cs-CZ-VlastaNeural (98).mp3" },
        { name: "Carlos", text: "Ano, jedno zavazadlo odbavuji a jedno si beru na palubu.", es: "Sí, facturo una maleta y llevo una en cabina.", audio: "/dialog6/cs-CZ-AntoninNeural (39).mp3" },
        { name: "Letištní pracovník", text: "Dobře. Položte prosím zavazadlo na váhu.", es: "Bien. Coloque la maleta en la balanza, por favor.", audio: "/dialog6/cs-CZ-VlastaNeural (99).mp3" },
        { name: "Carlos", text: "Tady to je.", es: "Aquí está.", audio: "/dialog6/cs-CZ-AntoninNeural (40).mp3" },
        { name: "Letištní pracovník", text: "Vaše zavazadlo je v pořádku. Chcete vytisknout palubní lístek?", es: "Su maleta está bien. ¿Quiere que le imprima la tarjeta de embarque?", audio: "/dialog6/cs-CZ-VlastaNeural (100).mp3" },
        { name: "Carlos", text: "Ano, prosím.", es: "Sí, por favor.", audio: "/dialog6/cs-CZ-AntoninNeural (41).mp3" },
        { name: "Letištní pracovník", text: "Tady je váš palubní lístek. Brána se zavírá v 10:30.", es: "Aquí tiene su tarjeta de embarque. La puerta cierra a las 10:30.", audio: "/dialog6/cs-CZ-VlastaNeural - 2025-03-01T162458.482.mp3" },
        { name: "Carlos", text: "Děkuji moc! Nashledanou!", es: "¡Muchas gracias! ¡Hasta luego!", audio: "/dialog6/cs-CZ-AntoninNeural (42).mp3" },
        { name: "Letištní pracovník", text: "Není zač! Šťastnou cestu!", es: "¡De nada! ¡Buen viaje!", audio: "/dialog6/cs-CZ-VlastaNeural - 2025-03-01T162543.544.mp3" }
      ];
      

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
        <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">Na letišti/En el aeropuerto</h2>
        <div className="space-y-3">
          {dialog.map((line, index) => (
            <div className="w-full flex flex-col rounded-xl shadow-md py-2 px-2" key={index}>
              <div
                className={`flex  justify-between   ${line.name === "Pavel" ? "" : " w-full  "}`}
              >
                <span className={`font-semibold text-xs md:text-base pr-2 ${line.name === "Letištní pracovník" ? "flex justify-start md:justify-end w-full  md:pr-8  text-pink-700 dark:text-pink-300" : "text-gray-600 dark:text-gray-400"} `}>
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

              <h1 className={`text-xs italic ${line.name === "Letištní pracovník" ? "text-left md:text-right md:pr-10" : "text-left"}`}>
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
