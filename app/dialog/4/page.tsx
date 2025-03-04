"use client";
import { FaStop, FaPlay } from "react-icons/fa";
import { useAudio } from "../../context/AudioContext"; // Import hook
import { useEffect, useState } from "react";

interface DialogLine {
  name: string;
  text: string;
  es: string;
  audio: string;
}

const Conversations4: React.FC = () => {
  const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio(); // Using context


  const dialog: DialogLine[] = [
    { name: "Lucie", text: "Dobrý den! Máte jablka?", es: "¡Buenos días! ¿Tienen manzanas?", audio: "/dialog4/cs-CZ-VlastaNeural (90).mp3" },
    { name: "Prodavač", text: "Ano, máme červená a zelená jablka.", es: "Sí, tenemos manzanas rojas y verdes.", audio: "/dialog4/cs-CZ-AntoninNeural (31).mp3" },
    { name: "Lucie", text: "Prosím dvě červená jablka.", es: "Dos manzanas rojas, por favor.", audio: "/dialog4/cs-CZ-VlastaNeural (91).mp3"},
    { name: "Prodavač", text: "Ještě něco?", es: "¿Algo más?", audio: "/dialog4/cs-CZ-AntoninNeural (32).mp3" },
    { name: "Lucie", text: "Ano, jeden chleba.", es: "Sí, un pan.", audio: "/dialog4/cs-CZ-VlastaNeural (92).mp3" },
    { name: "Prodavač", text: "Tady máte. Bude to 50 korun.", es: "Aquí tiene. Son 50 coronas.", audio: "/dialog4/cs-CZ-AntoninNeural (33).mp3" },
    { name: "Lucie", text: "Tady máte. Děkuji!", es: "Aquí tiene. ¡Gracias!", audio: "/dialog4/cs-CZ-VlastaNeural (93).mp3" },
    { name: "Prodavač", text: "Děkuji, na shledanou!", es: "Gracias, ¡hasta luego!", audio: "/dialog4/cs-CZ-AntoninNeural (34).mp3" }
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
            className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
            aria-label="Play All Audio"
            disabled={isPlayingAll || isPlayingOne} // Zakázání tlačítka při přehrávání celého dialogu
          >
            <FaPlay size={20} />
          </button>
        ) : (
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
        <h2 className="text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">V obchodě/En la tienda</h2>
        <div className="space-y-3">
          {dialog.map((line, index) => (
            <div className="w-full flex flex-col rounded-xl shadow-md py-2 px-2" key={index}>
              <div className={`flex justify-between ${line.name === "Pavel" ? "" : "w-full"}`}>
                <span className={`font-semibold text-xs md:text-base pr-2 ${line.name === "Lucie" ? "flex justify-start md:justify-end w-full md:pr-8 text-pink-700 dark:text-pink-300" : "text-gray-600 dark:text-gray-400"}`}>
                  <span className="mr-1">{line.name}:</span>
                  <span className="font-normal first-letter:text-black dark:text-white">{line.text}</span>
                </span>
                <button
                  onClick={() => playAudio(line.audio)} // Using context method to play individual audio
                  className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
                  aria-label={`Play ${line.name} Audio`}
                  disabled={isPlayingAll || isPlayingOne}
                >
                  <FaPlay size={20} />
                </button>
              </div>

              <h1 className={`text-xs italic ${line.name === "Lucie" ? "text-left md:text-right md:pr-10" : "text-left"}`}>
                {line.es}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Conversations4;
