"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson24() {

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
  title="Los pronombres personales en checo - caso ACUSATIVO - 4. pád"
  description="Aprende a usar los pronombres personales como mě, tě, ho, ji... en frases como 'Vidím tě' que requieren el caso acusativo en checo."
/>


<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
<div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 También puedes ver el contenido de esta clase en este vídeo:{" "}
      </p>
      <a
        href="https://youtu.be/n5cwE31FPZ0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
      </div>
      </section>
      
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4 max-w-3xl w-full text-center">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white">
      ¿Qué son los pronombres personales en acusativo en checo?
    </h2>
    <p className="text-gray-700 dark:text-gray-300">
      En checo, el <strong>caso acusativo (4. pád)</strong> se usa para marcar el objeto directo de la oración, es decir, la persona o cosa que recibe directamente la acción del verbo.
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      Algunos pronombres en acusativo son: <br />
      <strong>
        já – mě / mne<br />
        ty – tě / tebe<br />
        on – ho / něho<br />
        ona – ji / ni<br />
        ono – to<br />
        my – nás<br />
        vy – vás<br />
        oni – je / ně
      </strong>
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      Ejemplos:<br />
      ➤ <em>Slyším tě.</em> – Te escucho.<br />
      ➤ <em>Myslím na tebe každý den.</em> – Pienso en ti todos los días.<br />
      ➤ <em>To je pro tebe.</em> – Esto es para ti.
    </p>
    <p className="text-gray-700 dark:text-gray-300">
      <strong>¿Cuál es la diferencia entre “tě” y “tebe”?</strong><br />
      ✅ <strong>Forma corta: “tě”</strong> – Se usa sin preposición, directamente después del verbo. <br />
      👉 Ejemplo: <em>Slyším tě.</em><br /><br />
      ✅ <strong>Forma larga: “tebe”</strong> – Se usa cuando el pronombre va después de una preposición como <em>na</em> (en), <em>pro</em> (para), etc. <br />
      👉 Ejemplo: <em>Myslím na tebe.</em>, <em>To je pro tebe.</em>
    </p>
  </div>
</section>










<div className="overflow-x-auto mt-4">
  <h1 className="mt-4 text-xl font-bold text-center">Ejemplos - Příklady</h1>
  <Table className="min-w-full">
    <TableHeader>
      <TableRow>
        <TableHead className="text-center">Audio</TableHead>
        <TableHead className="text-center">Česky / En checo</TableHead>
        <TableHead className="text-center">Španělsky / En español</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {[
  { cs: "Vidíš mě?", es: "¿Me ves?", file: "cs-CZ-VlastaNeural.mp3" },
  { cs: "Ano, vidím tě.", es: "Sí, te veo.", file: "cs-CZ-VlastaNeural (1).mp3" },
  { cs: "Vidíš ho?", es: "¿Lo ves (a él)?", file: "cs-CZ-VlastaNeural (2).mp3" },
  { cs: "Ne, nevidím ho.", es: "No, no lo veo.", file: "cs-CZ-VlastaNeural (3).mp3" },
  { cs: "Vidíš ji?", es: "¿La ves (a ella)?", file: "cs-CZ-VlastaNeural (4).mp3" },
  { cs: "Ano, vidím ji.", es: "Sí, la veo.", file: "cs-CZ-VlastaNeural (5).mp3" },
  { cs: "Vidíš nás?", es: "¿Nos ves?", file: "cs-CZ-VlastaNeural (6).mp3" },
  { cs: "Ano, vidím vás.", es: "Sí, os veo.", file: "cs-CZ-VlastaNeural (7).mp3" },
  { cs: "Vidíš je?", es: "¿Los ves?", file: "cs-CZ-VlastaNeural (8).mp3" },
  { cs: "Nevidím je.", es: "No los veo.", file: "cs-CZ-VlastaNeural (9).mp3" },

  { cs: "Slyšíš mě?", es: "¿Me oyes?", file: "cs-CZ-VlastaNeural (10).mp3" },
  { cs: "Ano, slyším tě.", es: "Sí, te oigo.", file: "cs-CZ-VlastaNeural (11).mp3" },

  { cs: "Hledáš to?", es: "¿Buscas eso?", file: "cs-CZ-VlastaNeural (12).mp3" },
  { cs: "Ne, nehledám to.", es: "No, no lo busco.", file: "cs-CZ-VlastaNeural (13).mp3" },

  { cs: "Znáš je?", es: "¿Los conoces?", file: "cs-CZ-VlastaNeural (14).mp3" },
  { cs: "Ano, znám je.", es: "Sí, los conozco.", file: "cs-CZ-VlastaNeural (15).mp3" },

  { cs: "Slyšíš ho?", es: "¿Lo oyes (a él)?", file: "cs-CZ-VlastaNeural (16).mp3" },
  { cs: "Ne, neslyším ho.", es: "No, no lo oigo.", file: "cs-CZ-VlastaNeural (17).mp3" },

  { cs: "Znáš ji?", es: "¿La conoces?", file: "cs-CZ-VlastaNeural (18).mp3" },
  { cs: "Ano, znám ji.", es: "Sí, la conozco.", file: "cs-CZ-VlastaNeural (19).mp3" },

  { cs: "Miluješ ho?", es: "¿Lo amas (a él)?", file: "cs-CZ-VlastaNeural (20).mp3" },
  { cs: "Ano, miluju ho.", es: "Sí, lo amo.", file: "cs-CZ-VlastaNeural (21).mp3" },

  { cs: "Miluje tě?", es: "¿Te ama?", file: "cs-CZ-VlastaNeural (22).mp3" },
  { cs: "Ne, nemiluje mě.", es: "No, no me ama.", file: "cs-CZ-VlastaNeural (23).mp3" },

  { cs: "Posloucháš mě?", es: "¿Me escuchas?", file: "cs-CZ-VlastaNeural (24).mp3" },
  { cs: "Ano, poslouchám tě.", es: "Sí, te escucho.", file: "cs-CZ-VlastaNeural (25).mp3" },

  { cs: "Učíš ho?", es: "¿Lo enseñas?", file: "cs-CZ-VlastaNeural (26).mp3" },
  { cs: "Ano, učím ho.", es: "Sí, lo enseño.", file: "cs-CZ-VlastaNeural (27).mp3" },

  { cs: "Učí tě?", es: "¿Te enseña?", file: "cs-CZ-VlastaNeural (28).mp3" },
  { cs: "Ano, učí mě.", es: "Sí, me enseña.", file: "cs-CZ-VlastaNeural (29).mp3" },

  { cs: "Myslím na něho často.", es: "Pienso en él a menudo.", file: "cs-CZ-VlastaNeural (30).mp3" },
  { cs: "To je pro něho.", es: "Esto es para él.", file: "cs-CZ-VlastaNeural (31).mp3" },

  { cs: "Mluvím na ni.", es: "Le hablo (a ella).", file: "cs-CZ-VlastaNeural (32).mp3" },
  { cs: "Tento dárek je pro ni.", es: "Este regalo es para ella.", file: "cs-CZ-VlastaNeural (33).mp3" },

  { cs: "Mluvím na ně.", es: "Les hablo.", file: "cs-CZ-VlastaNeural (34).mp3" },
  { cs: "Tento dárek je pro ně.", es: "Este regalo es para ellos.", file: "cs-CZ-VlastaNeural (35).mp3" }
]
.map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson24/${file}`)}
              className={`${
                isPlayingAll || isPlayingOne
                  ? "dark:text-gray-600 text-gray-300"
                  : "text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
              }`}
              disabled={isPlayingAll || isPlayingOne}
              aria-label={cs}
            >
              <FaPlay size={20} />
            </button>
          </TableCell>
          <TableCell>{cs}</TableCell>
          <TableCell>{es}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>




  </div>
  )
}

export default lesson24