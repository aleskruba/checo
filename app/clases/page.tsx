"use client"



import Quiz from "@/app/components/QuizComponent";
import React, { useEffect } from 'react'
import { useAudio } from "../context/AudioContext"; 
import MyCalendar from "../components/MyCalendar";
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
      <h1 className="text-2xl font-bold text-center">CLASES EN LÍNEA</h1>
      <p className="text-center">
        Sin practicar la conversación, es casi imposible aprender un idioma. Me alegra mucho poder ayudarte con eso. No importa si estás empezando desde cero o si ya tienes un nivel intermedio.
      </p>
      <p className="text-center font-semibold">
        Mis lecciones son amigables y las adaptaré a tus necesidades. Si quieres, puedo ayudarte con la gramática o simplemente podemos conversar, ¡tú decides!
      </p>
      
      <div className="border-t pt-4">
        <h2 className="text-xl font-bold text-center">🌟 Clase de prueba: 15 minutos - Gratis</h2>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold">🕐 60 minutos – desde $8 (180 Kč)</h3>
        <div className="flex justify-center">
        <ul className="list-disc pl-6 text-left">
          <li>🎯 3 clases → $30 (700 Kč)</li>
          <li>🎯 5 clases → $45 (1 000 Kč)</li>
          <li>🎯 10 clases → $80 (1 800 Kč)</li>
        </ul>
        </div>
        <p className="text-center font-medium mt-2">💳 Pago mediante transferencia bancaria o PayPal.</p>
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