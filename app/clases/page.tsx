"use client"



import Quiz from "@/app/components/QuizComponent";
import React, { useEffect } from 'react'
import { useAudio } from "../context/AudioContext"; 
import MyCalendar from "../components/MyCalendar";
import { FaCoffee } from 'react-icons/fa'; 

function Test5() {

const { isPlayingAll, stopAllAudio, isPlayingOne } = useAudio(); // Using context


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

    <div className="max-w-4xl mx-auto p-4 space-y-6   ">
 <div className="md:w-[60%] w-[80%] max-w-3xl mx-auto">
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/j7yACLSZ62o"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      <h1 className="text-2xl font-bold text-center">CLASES EN LÍNEA</h1>
      <p className="text-center">
        Sin practicar la conversación, es casi imposible aprender un idioma. Me alegra mucho poder ayudarte con eso. No importa si estás empezando desde cero o si ya tienes un nivel intermedio.
      </p>
      <p className="text-center font-semibold">
        Mis Clases  son amigables y las adaptaré a tus necesidades. Si quieres, puedo ayudarte con la gramática o simplemente podemos conversar, ¡tú decides!
      </p>
      
      <div className="border-t pt-4">
        <h2 className="text-xl font-bold text-center">🌟 Clase de prueba: 15 minutos - Gratis</h2>
      </div>

      <div className="border-t pt-4">
      <h2 className="text-lg font-semibold text-center">Clases de conversación en checo – €6 (150 Kč)</h2>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold">Clases  de gramática checa y conjugaciones – 60 minutos €6 (200Kč) </h3>

        </div>
        <div className="flex flex-col items-center space-y-4 p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h4 className="text-xl font-mono text-center ">💳 Pago seguro mediante:</h4>
          
          <div className="text-left font-medium  mt-2 space-y-2">
            <div>- Transferencia bancaria</div>
            <div>- <span className="font-bold italic text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-">PayPal</span></div>
            <div className="flex items-center space-x-2">
              <a 
                href="https://buymeacoffee.com/aprendercheco" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-800 hover:text-yellow-900 dark:text-yellow-200 dark:hover:text-yellow-300 flex items-center"
              >
                <FaCoffee className="text-lg mr-2" />
                <span>Buy Me a Coffee</span>
              </a>
            </div>
          </div>
        </div>

      
      <div className="border-t pt-4">
        <h3 className="text-lg font-bold">📅 Horarios de clase (horario checo):</h3>
        <div className="flex justify-center">
        <ul className="list-disc pl-6 text-left">
          <li>📌 Lunes - Jueves: 18:00 - 21:00</li>
          <li>📌 Domingo: 15:00 - 20:00</li>
        </ul>
        </div>
      </div>
      
      <p className="text-center font-medium border-t pt-4">
        🔹 Soy bastante flexible, así que si necesitas cambiar la fecha, no hay problema. 😊
      </p>

      <div className="mt-6">
  <p className="font-semibold text-lg">📩 Si deseas agendar una clase o tienes alguna pregunta, ¡no dudes en contactarme!</p>
  <p className="font-semibold text-lg">📧 Correo: <a href="mailto:ales.aprendercheco@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ales.aprendercheco@gmail.com</a></p>
</div>
<div className=" md:h-[80%] ">

<MyCalendar/>
</div>
    </div>
  );
}

export default Test5;