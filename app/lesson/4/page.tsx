"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson4() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
             <SectionTopComponent
    title='Vocabulario y práctica con "Eso es" / "To je" '
    description='En esta lección, aprenderemos algunas palabras nuevas con "Eso es" / "To je" y las practicaremos en frases para familiarizarnos con su uso en contextos cotidianos.'
    />

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
<h1 className="mt-4">
  <span className="font font-bold text-red-500">¡OJO!</span> En checo, no se usa el artículo
  <span className="font font-extrabold text-blue-500"> "un" </span> o
  <span className="font font-extrabold text-blue-500"> "una" </span> como en español.
  Por ejemplo, en checo diríamos <span className="font font-extrabold text-blue-500"> "To je žena" </span> 
  (que en español sería <span className="font font-extrabold text-blue-500"> "Eso es una mujer" </span>).
</h1>

  <div className="overflow-x-auto">
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky/En checo</TableHead>
            <TableHead className="text-center">Španělsky/En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {/* To je žena */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987695_856.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je žena Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je žena</TableCell>
        <TableCell>Eso es una mujer</TableCell>
      </TableRow>

      {/* To je dívka */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987725_888.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je dívka Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je dívka</TableCell>
        <TableCell>Eso es una chica</TableCell>
      </TableRow>

      {/* To je muž */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987736_900.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je muž Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je muž</TableCell>
        <TableCell>Eso es un hombre</TableCell>
      </TableRow>

      {/* To je chlapec */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987749_913.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je chlapec Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je chlapec</TableCell>
        <TableCell>Eso es un niño</TableCell>
      </TableRow>

      {/* To je máma */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987763_928.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je máma Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je máma</TableCell>
        <TableCell>Eso es una madre</TableCell>
      </TableRow>

      {/* To je táta */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/p_37987773_940.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je táta Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je táta</TableCell>
        <TableCell>Eso es un padre</TableCell>
      </TableRow>

      {/* To je dům */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je dům Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je dům</TableCell>
        <TableCell>Eso es una casa</TableCell>
      </TableRow>

      {/* To je restaurace */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (1).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je restaurace Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je restaurace</TableCell>
        <TableCell>Eso es un restaurante</TableCell>
      </TableRow>

      {/* To je stůl */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (2).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je stůl Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je stůl</TableCell>
        <TableCell>Eso es una mesa</TableCell>
      </TableRow>

      {/* To je pivo */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (3).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je pivo Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je pivo 🍺</TableCell>
        <TableCell>Eso es una cerveza</TableCell>
      </TableRow>

      {/* To je židle */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (4).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je židle Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je židle</TableCell>
        <TableCell>Eso es una silla</TableCell>
      </TableRow>

      {/* To je pes */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (5).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je pes Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je pes</TableCell>
        <TableCell>Eso es un perro</TableCell>
      </TableRow>

      {/* To je kočka */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/Fliki_sample (6).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To je kočka Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To je kočka</TableCell>
        <TableCell>Eso es un gato</TableCell>
      </TableRow>

    </TableBody>
  </Table>
</div>

</section>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">

<div className="mt-4">
  <p className="text-left ">
    En checo, los adjetivos cambian al final dependiendo del género (masculino, femenino o neutro) y el número (singular o plural). Si el adjetivo termina en <span className="font-bold">"-é"</span>, <span className="font-bold">"-á"</span>, o <span className="font-bold">"-ý"</span>, significa que el sustantivo es neutro o tiene un género específico. Por ejemplo, si decimos <span className="font-bold">"to auto je krásné"</span> (ese coche es bonito), usamos <span className="font-bold">"-é"</span> porque <span className="font-bold">"auto"</span> es neutro. Pero si hablamos de una persona, como <span className="font-bold">"ta žena je krásná"</span> (esa mujer es bonita), usamos <span className="font-bold">"-á"</span> porque <span className="font-bold">"mujer"</span> es femenino.
  </p>
  <p className="text-left mt-2">
    Lamentablemente, los géneros de los sustantivos en checo son algo que tendrás que aprenderte, lo que no es fácil para los extranjeros. Sin embargo, hay algunos trucos, como que la mayoría de los sustantivos que terminan en <span className="font-bold">"-a"</span> son de género femenino, los que terminan en <span className="font-bold">"-o"</span> son de género neutro, y hay más reglas que veremos más adelante en las lecciones.
  </p>
</div>

<div className="overflow-x-auto mt-4">
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky/En checo</TableHead>
            <TableHead className="text-center">Španělsky/En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
   

      {/* To pivo je dobré */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-Fliki_sample.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play To pivo je dobré Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>To pivo je dobré</TableCell>
        <TableCell>Esta cerveza está buena</TableCell>
      </TableRow>

      {/* Ta žena je krásná */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-Fliki_sample (1).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ta žena je krásná Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ta žena je krásná</TableCell>
        <TableCell>Esta mujer es hermosa</TableCell>
      </TableRow>

      {/* Ten muž je vysoký */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-CZ-AntoninNeural.mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ten muž je vysoký Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ten muž je vysoký</TableCell>
        <TableCell>Ese hombre es alto</TableCell>
      </TableRow>

      {/* Ten dům je velký */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-CZ-AntoninNeural (1).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ten dům je velký Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ten dům je velký</TableCell>
        <TableCell>Ese casa es grande</TableCell>
      </TableRow>

      {/* Ten pes je malý */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-CZ-AntoninNeural (2).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ten pes je malý Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ten pes je malý</TableCell>
        <TableCell>Ese perro es pequeño</TableCell>
      </TableRow>

      {/* Ta Kačka je malá */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson4/cs-CZ-AntoninNeural (3).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ta Kačka je malá Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ta kočka je malá</TableCell>
        <TableCell>Esta gata es pequeña</TableCell>
      </TableRow>

      <TableRow>
  <TableCell>
    <button
      onClick={() => playAudio("/lesson4/cs-CZ-AntoninNeural (4).mp3")}
      className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
      aria-label="Play To auto je nové Audio"
    >
      <FaPlay size={20} />
    </button>
  </TableCell>
  <TableCell>To auto je nové</TableCell>
  <TableCell>Este coche es nuevo</TableCell>
</TableRow>

    </TableBody>
  </Table>
</div>


</section>

</div>


  )

}

export default lesson4