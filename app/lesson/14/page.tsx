"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Kitchen from "@/public/kitchen.png";
function lesson13() {

const { isPlayingAll, playAllAudio, stopAllAudio, isPlayingOne, playAudio } = useAudio(); // Using context


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
    <div className='w-full min-h-screen px-0 md:px-12  '>
      
      <SectionTopComponent
  title="Cocina - Palabras básicas y frases"
  description="Aprende a usar vocabulario esencial y frases comunes en la cocina."
/>

      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
    <p className="text-gray-700 dark:text-gray-300">
      En esta lección, aprenderás algunas palabras y frases útiles relacionadas con la cocina.
    </p>
  </div>
  <div className="relative">
    <Image
      src={Kitchen}
      alt="Kitchen"
      className="size-56 rounded-lg float-left mr-4"
    />
  </div>
</section>



<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>kuchyně / cocina</h1>

<Table className="min-w-full">
  <TableHeader>
    <TableRow>
      <TableHead className="text-center">Audio</TableHead>
      <TableHead className="text-center">Česky/En checo</TableHead>
      <TableHead className="text-center">Španělsky/En español</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (12).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Kuchyně"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Kuchyně</TableCell>
      <TableCell>Cocina</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
            onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (1).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Lžíce"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Lžíce</TableCell>
      <TableCell>Cucharas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
                onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (2).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Vidlička"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vidlička</TableCell>
      <TableCell>Tenedor</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (3).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Nůž"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Nůž</TableCell>
      <TableCell>Cuchillo</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (4).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Talíř"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Talíř</TableCell>
      <TableCell>Plato</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
                 onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (5).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Sklenice"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Sklenice</TableCell>
      <TableCell>Vaso</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
              onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (6).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Šálek"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Šálek</TableCell>
      <TableCell>Taza</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
              onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (7).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Židle"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Židle</TableCell>
      <TableCell>Silla</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (8).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Stůl"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Stůl</TableCell>
      <TableCell>Mesa</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
                onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (9).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Lednička"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Lednička</TableCell>
      <TableCell>Nevera</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
                onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (10).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Sporák"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Sporák</TableCell>
      <TableCell>Estufa</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
               onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (11).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Mikrovlnka"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Mikrovlnka</TableCell>
      <TableCell>Microondas</TableCell>
    </TableRow>
  </TableBody>
</Table>

</div>


<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>fráze / frases </h1>
<Table className="min-w-full">
  <TableHeader>
    <TableRow>
      <TableHead className="text-center">Audio</TableHead>
      <TableHead className="text-center">Česky/En checo</TableHead>
      <TableHead className="text-center">Španělsky/En español</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (13).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš Lžíci"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš Lžíci?</TableCell>
      <TableCell>¿Tienes una cuchara?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (14).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Play Ty děláš Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím lžíci?</TableCell>
      <TableCell>¿Tiene usted una cuchara, por favor?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (15).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dvě lžíce"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dvě lžíce</TableCell>
      <TableCell>Quisiera  dos cucharas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (16).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji lžíci"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji lžíci</TableCell>
      <TableCell>Necesito una cuchara</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (17).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš vidličku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš vidličku?</TableCell>
      <TableCell>¿Tienes un tenedor?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (18).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím vidličku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím vidličku?</TableCell>
      <TableCell>¿Tiene usted un tenedor, por favor?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (19).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dvě vidličky"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dvě vidličky</TableCell>
      <TableCell>Quisiera dos tenedores</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (20).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji vidličku"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji vidličku</TableCell>
      <TableCell>Necesito un tenedor</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (21).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš nůž?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš nůž?</TableCell>
      <TableCell>¿Tienes un cuchillo?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (22).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím nůž?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím nůž?</TableCell>
      <TableCell>¿Tiene usted un cuchillo, por favor?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (23).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dva nože"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dva nože</TableCell>
      <TableCell>Quisiera dos cuchillos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
    onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (24).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji nůž"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji nůž</TableCell>
      <TableCell>Necesito un cuchillo</TableCell>
    </TableRow>
    
    <TableRow>
      <TableCell>
        <button
  onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (25).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš talíř?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš talíř?</TableCell>
      <TableCell>¿Tienes un plato?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (26).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím talíř?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím talíř?</TableCell>
      <TableCell>¿Tiene usted un plato?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (27).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dva talíře"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dva talíře</TableCell>
      <TableCell>Quisiera dos platos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (28).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji talíř"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji talíř</TableCell>
      <TableCell>Necesito un plato</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (36).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš sklenici?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš sklenici?</TableCell>
      <TableCell>¿Tienes un vaso?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (37).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím sklenici?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím sklenici?</TableCell>
      <TableCell>¿Tiene usted un vaso?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (38).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dvě sklenice"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dvě sklenice</TableCell>
      <TableCell>Quisiera dos vasos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (39).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji sklenici"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji sklenici</TableCell>
      <TableCell>Necesito un vaso</TableCell>
    </TableRow>
    
    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (40).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš šálek?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš šálek?</TableCell>
      <TableCell>¿Tienes una taza?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (41).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím šálek?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím šálek?</TableCell>
      <TableCell>¿Tiene usted una taza?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (42).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dva šálky"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dva šálky</TableCell>
      <TableCell>Quisiera dos tazas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (43).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji šálek"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji šálek</TableCell>
      <TableCell>Necesito una taza</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (44).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš velký stůl?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš velký stůl?</TableCell>
      <TableCell>¿Tienes una mesa grande?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (45).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím velký stůl?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím velký stůl?</TableCell>
      <TableCell>¿Tiene usted una mesa grande?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (46).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych malý stůl"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych malý stůl</TableCell>
      <TableCell>Quisiera una mesa pequeña</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (47).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji velký stůl"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji velký stůl</TableCell>
      <TableCell>Necesito una mesa grande</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (48).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máš židli?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš židli?</TableCell>
      <TableCell>¿Tienes una silla?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (49).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Máte prosím židli?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím židli?</TableCell>
      <TableCell>¿Tiene usted una silla?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
  onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (50).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Chtěl/a bych dvě židle"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych dvě židle</TableCell>
      <TableCell>Quisiera dos sillas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (51).mp3")}
          className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"}`}
          disabled={isPlayingAll || isPlayingOne}
          aria-label="Potřebuji židli"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji židli</TableCell>
      <TableCell>Necesito una silla</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (52).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máš ledničku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš ledničku?</TableCell>
      <TableCell>¿Tienes una nevera?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (53).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máte prosím ledničku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím ledničku?</TableCell>
      <TableCell>¿Tiene usted una nevera?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
  onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (54).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Chtěl/a bych ledničku"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych ledničku</TableCell>
      <TableCell>Quisiera una nevera</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
  onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (55).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Potřebuji ledničku"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji ledničku</TableCell>
      <TableCell>Necesito una nevera</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (56).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máš sporák?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš sporák?</TableCell>
      <TableCell>¿Tienes una estufa?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (57).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máte prosím sporák?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím sporák?</TableCell>
      <TableCell>¿Tiene usted una estufa?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (58).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Chtěl/a bych sporák"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych sporák</TableCell>
      <TableCell>Quisiera una estufa</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (59).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Potřebuji sporák"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji sporák</TableCell>
      <TableCell>Necesito una estufa</TableCell>
    </TableRow>
    
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (60).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máš mikrovlnku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máš mikrovlnku?</TableCell>
      <TableCell>¿Tienes un microondas?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (61).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Máte prosím mikrovlnku?"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Máte prosím mikrovlnku?</TableCell>
      <TableCell>¿Tiene usted un microondas?</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (62).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Chtěl/a bych mikrovlnku"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Chtěl/a bych mikrovlnku</TableCell>
      <TableCell>Quisiera un microondas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson14/cs-CZ-VlastaNeural (63).mp3")}
         className={`${isPlayingAll || isPlayingOne ? "dark:text-gray-600 text-gray-300" : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"} `}
         disabled={isPlayingAll || isPlayingOne}
                   aria-label="Potřebuji mikrovlnku"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Potřebuji mikrovlnku</TableCell>
      <TableCell>Necesito un microondas</TableCell>
    </TableRow>
    
  </TableBody>
</Table>



</div>

  </div>
  )
}

export default lesson13