"use client"

import React, { useEffect } from 'react'
import Image from "next/image";
import br from "@/public/br.png";
import es from "@/public/es.png";


import { useAudio } from "../context/AudioContext"; 
function Intercambio() {

const { isPlayingAll,  stopAllAudio, isPlayingOne } = useAudio(); // Using context


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

<div className=" bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col md:flex-row gap-2  p-6">
<div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-left relative">
    <div className='absolute top-2 left-2'>   
        <Image
          src={es}  // Cesta k obrázku
          alt="Bandeira do Espana"  // Alternativní text pro obrázek
          width={40}  // Skutečná šířka obrázku
          height={20}  // Skutečná výška obrázku
          className="rounded-xl"  // CSS třídy pro styling
          loading="lazy"  // Lazy loading pro zlepšení výkonu
          decoding="async"  // Asynchronní dekódování pro lepší výkon
          />
</div>
    <h1 className="text-xl mt-8 font-bold  text-blue-600 dark:text-blue-400">
      INTERCAMBIO DE IDIOMAS - CHECO / ESPAÑOL (PORTUGUÉS)
    </h1>
    <p className="mt-4 text-gray-700 dark:text-gray-300">
      Si hablas español o portugués y quieres aprender checo, únete a mi intercambio de idiomas.
      No importa si eres principiante o intermedio, lo importante es que tengas ganas de aprender.
    </p>

    <h2 className="mt-6 text-xl font-semibold text-blue-600 dark:text-blue-400">¿Cómo participar?</h2>
    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mt-2 space-y-2">
      <li><strong>Escríbeme tu nivel de checo</strong>: Si estás empezando, puedes elegir contenido de mis videos en el canal <a href="https://www.youtube.com/@aprendercheco" target="_blank" className="text-blue-600 dark:text-blue-400 underline">Aprender Checo con Aleš</a>.</li>
      <li><strong>Intercambio de preguntas y correcciones</strong>: En el video, yo te haré preguntas en checo y tú responderás. Corregiré tu gramática y pronunciación.</li>
      <li><strong>Tú también me harás tres preguntas</strong> en español o portugués, y haremos lo mismo.</li>
      <li><strong>Recibes el video y confirmas su publicación</strong>: Te enviaré un enlace con el video a tu correo electrónico. Si estás de acuerdo, confirmas que puedo subirlo a YouTube.</li>
    </ul>

    <h2 className="mt-6 text-xl font-semibold text-blue-600 dark:text-blue-400">Normas y política de participación</h2>
    <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mt-2 space-y-2">
      <li>Las preguntas deben estar relacionadas con el aprendizaje del idioma.</li>
      <li>No se permiten preguntas de carácter personal, como:
        <ul className="list-none pl-4">
          <li className='italic'>¿Cuánto dinero ganas?,¿Estás casado/a? ....</li>
                </ul>
      </li>
      <li>Respeto y buen ambiente: el intercambio es para aprender y disfrutar del proceso.</li>
      <li>Si en algún momento no te sientes cómodo con una pregunta o corrección, dímelo sin problema.</li>
    </ul>

    <div className="mt-6">
      <p className="font-semibold text-lg">📩 Asunto: INTERCAMBIO IDIOMAS ABRIL, MAYO</p>
      <p className="font-semibold text-lg">📧 Correo: <a href="mailto:ales.aprendercheco@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ales.aprendercheco@gmail.com</a></p>
    </div>

    <p className="mt-6 text-xl text-red-700 dark:text-red-300 font-medium">
      ¡Aprender un idioma sin cometer errores es imposible, así que no tengas miedo de equivocarte! Lo importante es practicar y mejorar juntos. 😊
    </p>
  </div>

  <div className="max-w-3xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-left relative">
  <div className='absolute top-2 left-2'>
  <Image
  src={br}  // Cesta k obrázku
  alt="Bandeira do Brasil"  // Alternativní text pro obrázek
  width={40}  // Skutečná šířka obrázku
  height={20}  // Skutečná výška obrázku
  className="rounded-xl"  // CSS třídy pro styling
  loading="lazy"  // Lazy loading pro zlepšení výkonu
  decoding="async"  // Asynchronní dekódování pro lepší výkon
/>

  </div>
  
  <h1 className="text-xl mt-8 font-bold text-blue-600 dark:text-blue-400">
    TROCA DE IDIOMAS - TCHECO / ESPANHOL (PORTUGUÊS)
  </h1>
  
  <p className="mt-4 text-gray-700 dark:text-gray-300">
    Se você fala espanhol ou português e quer aprender tcheco, junte-se à minha troca de idiomas.
    Não importa se você é iniciante ou intermediário, o mais importante é sua vontade de aprender.
  </p>

  <h2 className="mt-6 text-xl font-semibold text-blue-600 dark:text-blue-400">Como participar?</h2>
  <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mt-2 space-y-2">
    <li><strong>Escreva-me seu nível de tcheco</strong>: Se você está começando, pode escolher conteúdo dos meus vídeos no canal <a href="https://www.youtube.com/@aprendercheco" target="_blank" className="text-blue-600 dark:text-blue-400 underline">Aprender Tcheco com Aleš</a>.</li>
    <li><strong>Troca de perguntas e correções</strong>: No vídeo, eu farei perguntas em tcheco e você responderá. Eu corrigirei sua gramática e pronúncia.</li>
    <li><strong>Você também fará três perguntas</strong> em espanhol ou português, e faremos o mesmo.</li>
    <li><strong>Receba o vídeo e confirme sua publicação</strong>: Eu lhe enviarei um link com o vídeo para seu e-mail. Se concordar, confirme que posso publicá-lo no YouTube.</li>
  </ul>

  <h2 className="mt-6 text-xl font-semibold text-blue-600 dark:text-blue-400">Regras e política de participação</h2>
  <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 mt-2 space-y-2">
    <li>As perguntas devem estar relacionadas ao aprendizado do idioma.</li>
    <li>Não são permitidas perguntas de caráter pessoal, como:
      <ul className="list-none pl-4">
        <li className='italic'>Quanto você ganha?, Você é casado(a)? ....</li>
      </ul>
    </li>
    <li>Respeito e um bom ambiente: a troca de idiomas é para aprender e aproveitar o processo.</li>
    <li>Se em algum momento você não se sentir confortável com uma pergunta ou correção, me avise sem problemas.</li>
  </ul>

  <div className="mt-6">
    <p className="font-semibold text-lg">📩 Assunto: TROCA DE IDIOMAS ABRIL, MAIO</p>
    <p className="font-semibold text-lg">📧 E-mail: <a href="mailto:ales.aprendercheco@gmail.com" className="text-blue-600 dark:text-blue-400 underline">ales.aprendercheco@gmail.com</a></p>
  </div>

  <p className="mt-6 text-xl text-red-700 dark:text-red-300 font-medium">
    Aprender um idioma sem cometer erros é impossível, então não tenha medo de errar! O importante é praticar e melhorar juntos. 😊
  </p>
</div>

  
</div>



  )
}

export default Intercambio