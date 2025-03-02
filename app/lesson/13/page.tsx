"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson11() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
      
      <SectionTopComponent
  title='La conjugación de los verbos checos para principiantes'
  description='Aprende a conjugar los verbos básicos en tiempo presente en checo con ejemplos claros y explicaciones sencillas.'
/>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <p className="text-gray-700 dark:text-gray-300">
    En esta lección, aprenderás a conjugar los verbos más comunes en checo, como "dělat" (hacer), "mluvit" (hablar), "pracovat" (trabajar), "jíst" (comer) y "pít" (beber). A través de ejemplos sencillos y explicaciones claras, dominarás la conjugación en tiempo presente.
  </p>
</section>

<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
    La conjugación de los verbos checos
  </h2>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    En checo, los verbos se conjugan de manera diferente que en español. Aquí te explicamos cómo funciona:
  </p>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Al igual que en español, las terminaciones de los verbos cambian según la persona que realiza la acción. Sin embargo, en checo, estas terminaciones son más variadas y dependen del verbo específico.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">
    Comparación con el español:
  </h3>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    En español, por ejemplo, para el verbo "comer" tenemos:
  </p>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
    <li><strong>Yo como</strong></li>
    <li><strong>Tú comes</strong></li>
    <li><strong>Él/Ella come</strong></li>
  </ul>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    En checo, la conjugación de "jíst" (comer) es diferente y se conjuga de esta forma:
  </p>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
    <li><strong>Já jím</strong> (Yo como)</li>
    <li><strong>Ty jíš</strong> (Tú comes)</li>
    <li><strong>On/Ona jí</strong> (Él/Ella come)</li>
  </ul>

  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">
    Las tres categorías principales de conjugación:
  </h3>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Los verbos en checo se agrupan en tres categorías según sus terminaciones. Cada grupo tiene un patrón diferente:
  </p>

  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
    <li><strong>Primera categoría (-ám, -áš, -á):</strong> Ejemplo: <em>dělám</em> (yo hago), <em>mám</em> (yo tengo)</li>
    <li><strong>Segunda categoría (-ím, -íš, -í):</strong> Ejemplo: <em>píšu</em> (yo escribo), <em>běhám</em> (yo corro)</li>
    <li><strong>Tercera categoría (-u, -eš, -e):</strong> Ejemplo: <em>jdu</em> (yo voy), <em>vidím</em> (yo veo)</li>
  </ul>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    A diferencia del español, cada verbo checo puede tener una conjugación única, lo que significa que no hay una única regla para todos los verbos. Por eso, es importante aprender las conjugaciones de cada verbo individualmente.
  </p>

  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-4 mb-2">
    ¿Cómo aprender las conjugaciones en checo?
  </h3>
  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Para dominar las conjugaciones en checo, la clave es la práctica constante. Cada vez que aprendas un nuevo verbo, asegúrate de memorizar su conjugación completa en presente.
  </p>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    ¡No te preocupes! Con práctica, te acostumbrarás a las variaciones y la conjugación se volverá más fácil con el tiempo. Lo más importante es seguir practicando y familiarizándote con los diferentes tipos de terminaciones verbales.
  </p>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    ¡Vamos a practicar juntos con algunos ejemplos!
  </p>
</section>

<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>jíst / comer</h1>

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
        onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110429.585.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Já jím Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Já jím</TableCell>
      <TableCell>Yo como</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110446.964.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ty jíš Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty jíš</TableCell>
      <TableCell>Tú comes</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110503.536.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play On jí Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>On jí</TableCell>
      <TableCell>Él come</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110519.688.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ona jí Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ona jí</TableCell>
      <TableCell>Ella come</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
   onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110537.911.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play My jíme Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>My jíme</TableCell>
      <TableCell>Nosotros comemos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110556.602.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Vy jíte Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vy jíte</TableCell>
      <TableCell>Vosotros coméis/Ustedes comen</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
   onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T110611.086.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oni jedí Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Oni jedí</TableCell>
      <TableCell>Ellos/Ellas comen</TableCell>
    </TableRow>
  </TableBody>
</Table>
  </div>


  <div className="overflow-x-auto mt-4">
  <h1 className='mt-4'>mluvit / hablar  </h1>

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
        onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111206.355.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Já mluvím Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Já mluvím</TableCell>
      <TableCell>Yo hablo</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111222.208.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ty mluvíš Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty mluvíš</TableCell>
      <TableCell>Tú hablas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
        onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111238.308.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play On mluví Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>On mluví</TableCell>
      <TableCell>Él habla</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
     onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111253.962.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ona mluví Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ona mluví</TableCell>
      <TableCell>Ella habla</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111309.021.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play My mluvíme Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>My mluvíme</TableCell>
      <TableCell>Nosotros hablamos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111324.926.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Vy mluvíte Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vy mluvíte</TableCell>
      <TableCell>Vosotros habláis/Ustedes hablan</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural - 2025-03-02T111339.268.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oni mluví Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Oni mluví</TableCell>
      <TableCell>Ellos/Ellas hablan</TableCell>
    </TableRow>
  </TableBody>
</Table>
</div>


<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>dělat / hacer </h1>
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
         onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural.mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Já dělám Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Já dělám</TableCell>
      <TableCell>Yo hago</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (1).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ty děláš Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty děláš</TableCell>
      <TableCell>Tú haces</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (2).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play On dělá Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>On dělá</TableCell>
      <TableCell>Él hace</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (3).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ona dělá Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ona dělá</TableCell>
      <TableCell>Ella hace</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (4).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play My děláme Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>My děláme</TableCell>
      <TableCell>Nosotros hacemos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
  onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (5).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Vy děláte Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vy děláte</TableCell>
      <TableCell>Vosotros hacéis/Ustedes hacen</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
     onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (6).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oni dělají Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Oni dělají</TableCell>
      <TableCell>Ellos/Ellas hacen</TableCell>
    </TableRow>
  </TableBody>
</Table>

</div>

<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>pracovat / trabajar</h1>
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
           onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (7).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Já pracuji Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Já pracuji</TableCell>
      <TableCell>Yo trabajo</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (8).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ty pracuješ Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty pracuješ</TableCell>
      <TableCell>Tú trabajas</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
     onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (9).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play On pracuje Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>On pracuje</TableCell>
      <TableCell>Él trabaja</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
     onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (10).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ona pracuje Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ona pracuje</TableCell>
      <TableCell>Ella trabaja</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (11).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play My pracujeme Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>My pracujeme</TableCell>
      <TableCell>Nosotros trabajamos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
             onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (12).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Vy pracujete Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vy pracujete</TableCell>
      <TableCell>Vosotros trabajáis/Ustedes trabajan</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
     onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (13).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oni pracují Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Oni pracují</TableCell>
      <TableCell>Ellos/Ellas trabajan</TableCell>
    </TableRow>
  </TableBody>
</Table>


</div>

<div className="overflow-x-auto mt-4">
<h1 className='mt-4'>pít / beber(tomar)</h1>
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
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (14).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Já piji Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Já piji</TableCell>
      <TableCell>Yo bebo</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (15).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ty piješ Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ty piješ</TableCell>
      <TableCell>Tú bebes</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (16).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play On pije Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>On pije</TableCell>
      <TableCell>Él bebe</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
         onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (17).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Ona pije Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Ona pije</TableCell>
      <TableCell>Ella bebe</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
       onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (18).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play My pijeme Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>My pijeme</TableCell>
      <TableCell>Nosotros bebemos</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
          onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (19).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Vy pijete Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Vy pijete</TableCell>
      <TableCell>Vosotros bebéis/Ustedes beben</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <button
           onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (20).mp3")}
          className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
          aria-label="Play Oni pijí Audio"
        >
          <FaPlay size={20} />
        </button>
      </TableCell>
      <TableCell>Oni pijí</TableCell>
      <TableCell>Ellos/Ellas beben</TableCell>
    </TableRow>
  </TableBody>
</Table>

</div>




<div className="overflow-x-auto mt-4">
Praktické příklady / Ejemplos prácticos
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky/En checo</TableHead>
        <TableHead className="text-center">Španělsky/En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {/* Příklady pro sloveso "pít" */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (21).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Já piji Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Já piji čáj</TableCell>
        <TableCell>Yo bebo té</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (22).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ty piješ Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ty piješ kafe</TableCell>
        <TableCell>Tú bebes café</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (23).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play On pije Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>On pije vodu</TableCell>
        <TableCell>Él bebe agua</TableCell>
      </TableRow>

      {/* Příklady pro sloveso "dělat" */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (24).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Já dělám Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Já dělám úkol</TableCell>
        <TableCell>Yo hago la tarea</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (25).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ty děláš Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ty děláš snídani</TableCell>
        <TableCell>Tú haces el desayuno</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (26).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play On dělá Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>On dělá oběd</TableCell>
        <TableCell>Él hace el almuerzo</TableCell>
      </TableRow>

      {/* Příklady pro sloveso "mluvit" */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (27).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Já mluvím Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Já mluvím česky</TableCell>
        <TableCell>Yo hablo checo</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (28).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ty mluvíš Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ty mluvíš anglicky</TableCell>
        <TableCell>Tú hablas inglés</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (29).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play On mluví Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>On mluví španělsky</TableCell>
        <TableCell>Él habla español</TableCell>
      </TableRow>

      {/* Příklady pro sloveso "pracovat" */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (30).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Já pracuji Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Já pracuji v kanceláři</TableCell>
        <TableCell>Yo trabajo en la oficina</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (31).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ty pracuješ Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ty pracuješ ve škole</TableCell>
        <TableCell>Tú trabajas en la escuela</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (32).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play On pracuje Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>On pracuje jako učitel</TableCell>
        <TableCell>Él trabaja como maestro</TableCell>
      </TableRow>

      {/* Příklady pro sloveso "jíst" */}
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (33).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Já jím Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Já jím jablko</TableCell>
        <TableCell>Yo como una manzana</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (34).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play Ty jíš Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>Ty jíš chleba</TableCell>
        <TableCell>Tú comes pan</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <button
            onClick={() => playAudio("/lesson13/cs-CZ-VlastaNeural (35).mp3")}
            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
            aria-label="Play On jí Audio"
          >
            <FaPlay size={20} />
          </button>
        </TableCell>
        <TableCell>On jí oběd</TableCell>
        <TableCell>Él come el almuerzo</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>

  </div>
  )
}

export default lesson11