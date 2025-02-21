"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson7() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
  <SectionTopComponent
    title='Los plurales de los sustantivos'
    description="En esta lección, aprenderemos los conceptos básicos de cómo formar el plural de los sustantivos en checo."
  />

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">

  
   <p className="mb-4">
      <strong>Cómo formar el plural de los sustantivos en checo: una breve introducción</strong>
    </p>
    <p className="mb-4">
      Aprender a formar el plural de los sustantivos en checo puede parecer un poco complicado al principio, 
      especialmente porque en checo el plural depende del género del sustantivo: masculino, femenino o neutro, 
      y también de ciertos patrones gramaticales (modelos) que pueden hacer que las formas plurales varíen. 
    </p>
    <p className="mb-4">
      Los estudiantes checos suelen aprender estos plurales memorizando estos patrones específicos, 
      pero para los hablantes de español que recién comienzan con el idioma checo, este método puede no ser muy útil.
    </p>
    <p className="mb-4">
      No te preocupes, mi objetivo es explicártelo de una manera más simple y accesible. 
      Si en algún momento te parece demasiado complejo, ¡no te frustres! Incluso muchos extranjeros con un nivel avanzado 
      de checo todavía cometen errores con los plurales. Lo importante es aprender al menos las formas más comunes 
      que se usan en la vida diaria. Con el tiempo y la práctica, el resto vendrá de forma natural.
    </p>
    <p>
      ¡Vamos a hacerlo juntos, paso a paso, y verás que no es tan difícil como parece! 😊
    </p>

  </section>

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
        <h1 className='text-xl font-semibold'>Género femenino / Ženský rod</h1>
        <p className='mt-4'>Si la palabra termina en <span className='font-bold'>"a"</span>, en plural cambiamos la <span className='font-bold'>"a"</span> por <span className='font-bold'>"y"</span>.</p>
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
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural.mp3")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Žena Audio"
      >
        <FaPlay size={20} />
      </button>
    </TableCell>
    <TableCell>(ta) Žena → (ty) Ženy</TableCell>
    <TableCell>(la) Mujer → (las) Mujeres</TableCell>
  </TableRow>
  
  <TableRow>
    <TableCell>
      <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (1).mp3")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Kniha Audio"
      >
        <FaPlay size={20} />
      </button>
    </TableCell>
    <TableCell>(ta) Kniha → (ty) Knihy</TableCell>
    <TableCell>(el) Libro → (los) Libros</TableCell>
  </TableRow>
  
  <TableRow>
    <TableCell>
      <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (2).mp3")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Dívka Audio"
      >
        <FaPlay size={20} />
      </button>
    </TableCell>
    <TableCell>(ta) Dívka → (ty) Dívky</TableCell>
    <TableCell>(la) Chica → (las) Chicas</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
      <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (3).mp3")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Škola Audio"
      >
        <FaPlay size={20} />
      </button>
    </TableCell>
    <TableCell>(ta) Škola → (ty) Školy</TableCell>
    <TableCell>(la) Escuela → (las) Escuelas</TableCell>
  </TableRow>
  
  <TableRow>
    <TableCell>
      <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (4).mp3")}
        className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
        aria-label="Play Bota Audio"
      >
        <FaPlay size={20} />
      </button>
    </TableCell>
    <TableCell>(ta) Bota → (ty) Boty</TableCell>
    <TableCell>(el) Zapato → (los) Zapatos</TableCell>
  </TableRow>
</TableBody>

      </Table>

      <p className='mt-4'>Excepciones que en plural terminan en - "<span className='font-bold'> i </span>".</p>
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
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (5).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Věc Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(ta) Věc → (ty) Věci</TableCell>
      <TableCell>(la) Cosa → (las) Cosas</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (6).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Kost Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(ta) Kost → (ty) Kosti</TableCell>
      <TableCell>(el) Hueso → (los) Huesos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (7).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Část Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(ta) Část → (ty) Části</TableCell>
      <TableCell>(la) Parte → (las) Partes</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (8).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Radost Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(ta) Radost → (ty) Radosti</TableCell>
      <TableCell>(la) Alegría → (las) Alegrías</TableCell>
    </TableRow>
  </TableBody>
</Table>

  </section>

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
        <h1 className='text-xl font-semibold'>Género neutral / Střední rod</h1>
        <p className='mt-4'>Las palabras que terminan en - <span className='font-bold'>"o"</span>  en singular cambian a - <span className='font-bold'>"a"</span> en plural.</p>
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
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (20).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Auto Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Auto → (ta) Auta</TableCell>
      <TableCell>(el) Coche → (los) Coches</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
      onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (21).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Město Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Město → (ta) Města</TableCell>
      <TableCell>(la) Ciudad → (las) Ciudades</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (22).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Slovo Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Slovo → (ta) Slova</TableCell>
      <TableCell>(la) Palabra → (las) Palabras</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (23).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Okno Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Okno → (ta) Okna</TableCell>
      <TableCell>(la) Ventana → (las) Ventanas</TableCell>
    </TableRow>
  </TableBody>
</Table>
<p className='mt-4'>Las palabras que terminan en - <span className='font-bold'>"e"</span>  en singular cambian a - <span className='font-bold'>"ata"</span> en plural.</p>
<span className='italic'>Se utiliza, por ejemplo, con animales, donde el sustantivo es de género neutro, pero no es la regla, hay excepciones.</span>
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
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (9).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Kuře Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Kuře → (ta) Kuřata</TableCell>
      <TableCell>(el) Pollo → (los) Pollos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (10).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Sele Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Sele → (ta) Selata</TableCell>
      <TableCell>(el) Lechón → (los) Lechones</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
            onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (11).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Prase Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Prase → (ta) Prasata</TableCell>
      <TableCell>(el) Cerdo → (los) Cerdos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (12).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Štěně Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Štěně → (ta) Štěňata</TableCell>
      <TableCell>(el) Cachorro → (los) Cachorros</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (13).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Kotě Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Kotě → (ta) Koťata</TableCell>
      <TableCell>(el) Gatito → (los) Gatitos</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (14).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Rajče Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Rajče → (ta) Rajčata</TableCell>
      <TableCell>(el) Tomate → (los) Tomates</TableCell>
    </TableRow>

  </TableBody>
</Table>
<p className='mt-4'> Algunos sustantivos tienen el mismo singular y plural, y en otros casos cambia el artículo, como se verá en los ejemplos siguientes. </p>
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
           onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (15).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Srdce Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Srdce → (ta) Srdce</TableCell>
      <TableCell>(el) Corazón → (los) Corazones</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (16).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Moře Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Moře → (ta) Moře</TableCell>
      <TableCell>(el) Mar → (los) Mares</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (17).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Území Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Území → (ta) Území</TableCell>
      <TableCell>(el) Territorio → (los) Territorios</TableCell>
    </TableRow>


    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (18).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Dítě Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Dítě → (ty 😄) Děti</TableCell>
      <TableCell>(el) Niño → (los) Niños</TableCell>
    </TableRow>

    <TableRow>
      <TableCell>
        <button
            onClick={() => playAudio("/lesson8/cs-CZ-VlastaNeural (19).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oko Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>(to) Oko → (ty 😄) Oči</TableCell>
      <TableCell>(el) Ojo → (los) Ojos</TableCell>
    </TableRow>

 
  </TableBody>
</Table>

  </section>
    </div>
  )

}

export default lesson7