"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson27() {

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
  title="Las horas en checo"
  description="Aprende a decir la hora en checo: en punto, y cuarto, y media y menos cuarto. Con ejemplos prácticos y traducción al español."
/>

{/* <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4"> 

      <div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 El contenido + pronunciación proviene de este video:{" "}
      </p>
      <a
        href="https://youtu.be/2UzrGUIc4O4"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
</section> */}

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4"> 
  <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full text-center">
       <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Kolik je hodin?
    </h2>
         <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
¿Qué hora es?    </h2>
  </div>
</section>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4"> 
  <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      Las horas en checo
    </h2>

    <p className="text-gray-700 dark:text-gray-300">
      En checo, la forma de decir la hora cambia dependiendo del número y el minuto. Aquí tienes ejemplos comunes.
    </p>

    {/* Plné hodiny */}
    <div className="text-left w-full text-gray-700 dark:text-gray-300 mt-4">
      <h3 className="font-semibold text-lg">En punto</h3>
      <ul className="list-disc list-inside">
        <li><strong>Je jedna hodina</strong> – Es la una</li>
        <li><strong>Jsou dvě hodiny</strong> – Son las dos</li>
        <li><strong>Jsou tři hodiny</strong> – Son las tres</li>
        <li><strong>Jsou čtyři hodiny</strong> – Son las cuatro</li>
        <li><strong>Je pět hodin</strong> – Son las cinco</li>
        <li><strong>Je šest hodin</strong> – Son las seis</li>
        <li><strong>Je sedm hodin</strong> – Son las siete</li>
        <li><strong>Je osm hodin</strong> – Son las ocho</li>
        <li><strong>Je devět hodin</strong> – Son las nueve</li>
        <li><strong>Je deset hodin</strong> – Son las diez</li>
        <li><strong>Je jedenáct hodin</strong> – Son las once</li>
        <li><strong>Je dvanáct hodin</strong> – Son las doce</li>
      </ul>
    </div>

    {/* Čtvrt na */}
    <div className="text-left w-full text-gray-700 dark:text-gray-300 mt-4">
      <h3 className="font-semibold text-lg">Cuarto</h3>
      <ul className="list-disc list-inside">
        <li><strong>Je čtvrt na jednu</strong> – Es la una y cuarto</li>
        <li><strong>Je čtvrt na dvě</strong> – Son las dos y cuarto</li>
        <li><strong>Je čtvrt na tři</strong> – Son las tres y cuarto</li>
        <li><strong>Je čtvrt na čtyři</strong> – Son las cuatro y cuarto</li>
        <li><strong>Je čtvrt na pět</strong> – Son las cinco y cuarto</li>
        <li><strong>Je čtvrt na šest</strong> – Son las seis y cuarto</li>
        <li><strong>Je čtvrt na sedm</strong> – Son las siete y cuarto</li>
        <li><strong>Je čtvrt na osm</strong> – Son las ocho y cuarto</li>
        <li><strong>Je čtvrt na devět</strong> – Son las nueve y cuarto</li>
        <li><strong>Je čtvrt na deset</strong> – Son las diez y cuarto</li>
        <li><strong>Je čtvrt na jedenáct</strong> – Son las once y cuarto</li>
        <li><strong>Je čtvrt na dvanáct</strong> – Son las doce y cuarto</li>
      </ul>
    </div>

    {/* Půl */}
    <div className="text-left w-full text-gray-700 dark:text-gray-300 mt-4">
      <h3 className="font-semibold text-lg">Media</h3>
      <ul className="list-disc list-inside">
        <li><strong>Je půl jedné</strong> – Es la una y media</li>
        <li><strong>Je půl druhé</strong> – Son las dos y media</li>
        <li><strong>Je půl třetí</strong> – Son las tres y media</li>
        <li><strong>Je půl čtvrté</strong> – Son las cuatro y media</li>
        <li><strong>Je půl páté</strong> – Son las cinco y media</li>
        <li><strong>Je půl šesté</strong> – Son las seis y media</li>
        <li><strong>Je půl sedmé</strong> – Son las siete y media</li>
        <li><strong>Je půl osmé</strong> – Son las ocho y media</li>
        <li><strong>Je půl deváté</strong> – Son las nueve y media</li>
        <li><strong>Je půl desáté</strong> – Son las diez y media</li>
        <li><strong>Je půl jedenácté</strong> – Son las once y media</li>
        <li><strong>Je půl dvanácté</strong> – Son las doce y media</li>
      </ul>
    </div>

    {/* Tři čtvrtě na */}
    <div className="text-left w-full text-gray-700 dark:text-gray-300 mt-4">
      <h3 className="font-semibold text-lg">Tres cuartos</h3>
      <ul className="list-disc list-inside">
        <li><strong>Je tři čtvrtě na jednu</strong> – Es la una menos cuarto</li>
        <li><strong>Je tři čtvrtě na dvě</strong> – Son las dos menos cuarto</li>
        <li><strong>Je tři čtvrtě na tři</strong> – Son las tres menos cuarto</li>
        <li><strong>Je tři čtvrtě na čtyři</strong> – Son las cuatro menos cuarto</li>
        <li><strong>Je tři čtvrtě na pět</strong> – Son las cinco menos cuarto</li>
        <li><strong>Je tři čtvrtě na šest</strong> – Son las seis menos cuarto</li>
        <li><strong>Je tři čtvrtě na sedm</strong> – Son las siete menos cuarto</li>
        <li><strong>Je tři čtvrtě na osm</strong> – Son las ocho menos cuarto</li>
        <li><strong>Je tři čtvrtě na devět</strong> – Son las nueve menos cuarto</li>
        <li><strong>Je tři čtvrtě na deset</strong> – Son las diez menos cuarto</li>
        <li><strong>Je tři čtvrtě na jedenáct</strong> – Son las once menos cuarto</li>
        <li><strong>Je tři čtvrtě na dvanáct</strong> – Son las doce menos cuarto</li>
      </ul>
    </div>
  </div>
</section>



  </div>
  )
}

export default lesson27