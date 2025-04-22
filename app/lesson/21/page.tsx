"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React, { useEffect } from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAudio } from "../../context/AudioContext"; 
import Image from "next/image";
import Bus from "@/public/bus.jpg";
function lesson20() {

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
  title="Verbos reflexivos en checo"
  description="Aprende cómo se usan los verbos reflexivos en checo, su conjugación y cuándo se emplean en diferentes contextos."
/>


{/* <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">
<div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 También puedes ver el contenido de esta clase en este vídeo:{" "}
      </p>
      <a
        href="https://youtu.be/KCtROO4dX6M"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
      </div>
      </section> */}
      
      <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-4">
  <div className="flex flex-col justify-center items-center gap-4">


    <p className="text-gray-700 dark:text-gray-300">
      En checo, los verbos reflexivos se forman con la adición de la palabra <strong>"se"</strong> después del verbo. Esto es similar al uso de los pronombres reflexivos en español, como <strong>"me", "te", "se"</strong> (por ejemplo, <em>me llamo</em>, <em>te miras</em>, <em>se viste</em>).
    </p>

    <p className="text-gray-700 dark:text-gray-300">
      Sin embargo, no todos los verbos reflexivos en español son reflexivos en checo. Por ejemplo, en español usamos verbos como <em>levantarse</em> (levantarse) o <em>acostarse</em> (acostarse), pero en checo no usamos reflexivos en estos casos. En su lugar, se usan los verbos simples sin el <strong>"se"</strong>.
    </p>

    <h2 className="text-xl font-bold text-gray-700 dark:text-gray-300">Ejemplos de verbos reflexivos en checo:</h2>
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
      <li><strong>"jmenovat se"</strong> - "llamarse"</li>
      <li><strong>"učit se"</strong> - "aprender" </li>
      <li><strong>"dívat se"</strong> - "mirar" </li>
      <li><strong>"oblékat se"</strong> - "vestirse"</li>
      <li><strong>"koupat se"</strong> - "bañarse"</li>
      <li><strong>"sprchovat se"</strong> - "ducharse" </li>
      <li><strong>"smát se"</strong> - "reírse" </li>
      <li><strong>"bát se"</strong> - "temer" </li>
      <li><strong>"stydět se"</strong> - "avergonzarse" </li>
      <li><strong>"zlobit se"</strong> - "enfadarse" </li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Conjugación:</h3>
    <p className="text-gray-700 dark:text-gray-300">
      Estos verbos reflexivos se conjugan de manera regular, pero con el pronombre reflexivo "se" añadido. Aquí te muestro cómo se conjugan:
    </p>
    <ul className="list-inside text-gray-700 dark:text-gray-300">
      <li><strong>“jmenovat se”</strong> - "llamarse" (yo me llamo = "já se jmenuji")</li>
      <li><strong>“učit se”</strong> - "aprender" (yo aprendo = "já se učím")</li>
      <li><strong>“dívat se”</strong> - "mirar" (yo miro = "já se dívám")</li>
      <li><strong>“oblékat se”</strong> - "vestirse" (yo me visto = "já se oblékám")</li>
      <li><strong>“koupat se”</strong> - "bañarse" (yo me baño = "já se koupu")</li>
      <li><strong>“sprchovat se”</strong> - "ducharse" (yo me ducho = "já se sprchuji")</li>
      <li><strong>“smát se”</strong> - "reírse" (yo me río = "já se směji")</li>
      <li><strong>“bát se”</strong> - "temer" (yo temo = "já se bojím")</li>
      <li><strong>“stydět se”</strong> - "avergonzarse" (yo me avergüenzo = "já se stydím")</li>
      <li><strong>“zlobit se”</strong> - "enfadarse" (yo me enfado = "já se zlobím")</li>
    </ul>

    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">¿Por qué se usan los verbos reflexivos en checo?</h3>
    <p className="text-gray-700 dark:text-gray-300">
      Los verbos reflexivos en checo se usan para indicar que la acción recae sobre la misma persona que la realiza. Es decir, cuando alguien hace algo "a sí mismo". Como en español, donde decimos "me lavo" o "te duchas", en checo usamos "<strong>se</strong>" para hacer lo mismo: "<strong>já se umývám</strong>" (me lavo).
    </p>

    <p className="text-gray-700 dark:text-gray-300">
      Recuerda, no todos los verbos reflexivos en español tienen un equivalente reflexivo en checo. Por ejemplo, en español decimos <em>me siento</em> (sentarse), pero en checo simplemente se dice <em>seda</em> sin el reflexivo.
    </p>
  </div>
</section>


<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-6 w-full">
<h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
  Conjugación del verbo reflexivo "jmenovat se" (llamarse)
</h2>
<p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
  Aprende cómo se conjuga en checo el verbo reflexivo <strong>"jmenovat se"</strong>, que significa <em>"llamarse"</em> en español. Es un verbo comúnmente usado para presentarse o decir el nombre de alguien.
</p>


  <div className="overflow-x-auto w-full">
  <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
  <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
    <tr>
      <th className="px-4 py-2">Checo</th>
      <th className="px-4 py-2">Español</th>
    </tr>
  </thead>
  <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
    {[
      ["já se jmenuju", "yo me llamo"],
      ["ty se jmenuješ", "tú te llamas"],
      ["on/ona/to se jmenuje", "él/ella se llama"],
      ["my se jmenujeme", "nosotros nos llamamos"],
      ["vy se jmenujete", "vosotros os llamáis / usted se llama"],
      ["oni se jmenují", "ellos se llaman"]
    ].map(([cz, es], idx) => (
      <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <td className="px-4 py-2">{cz}</td>
        <td className="px-4 py-2 italic">{es}</td>
      </tr>
    ))}
  </tbody>
</table>

  </div>
</section>

<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-6 w-full">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
    Conjugación del verbo reflexivo "učit se" (aprender)
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende cómo se conjuga en checo el verbo reflexivo <strong>"učit se"</strong>, que significa <em>"aprender"</em> en español. Es un verbo muy útil cuando hablas sobre estudiar o adquirir conocimientos.
  </p>

  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <tr>
          <th className="px-4 py-2">Checo</th>
          <th className="px-4 py-2">Español</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {[
          ["já se učím", "yo aprendo / estoy aprendiendo"],
          ["ty se učíš", "tú aprendes"],
          ["on/ona/to se učí", "él/ella aprende"],
          ["my se učíme", "nosotros aprendemos"],
          ["vy se učíte", "vosotros aprendéis / usted aprende"],
          ["oni se učí", "ellos aprenden"]
        ].map(([cz, es], idx) => (
          <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-2">{cz}</td>
            <td className="px-4 py-2 italic">{es}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 bg-white flex flex-col justify-center items-center gap-6 w-full">
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
    Conjugación del verbo reflexivo "dívat se" (mirar / ver)
  </h2>
  <p className="text-gray-700 dark:text-gray-300 text-center max-w-2xl">
    Aprende cómo se conjuga en checo el verbo reflexivo <strong>"dívat se"</strong>, que significa <em>"mirar"</em> o <em>"ver"</em> en español. Se usa frecuentemente para hablar de observar algo o ver la televisión, por ejemplo.
  </p>

  <div className="overflow-x-auto w-full">
    <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
      <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
        <tr>
          <th className="px-4 py-2">Checo</th>
          <th className="px-4 py-2">Español</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-300 dark:divide-gray-600">
        {[
          ["já se dívám", "yo miro / estoy mirando"],
          ["ty se díváš", "tú miras"],
          ["on/ona/to se dívá", "él/ella mira"],
          ["my se díváme", "nosotros miramos"],
          ["vy se díváte", "vosotros miráis / usted mira"],
          ["oni se dívají", "ellos miran"]
        ].map(([cz, es], idx) => (
          <tr key={idx} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <td className="px-4 py-2">{cz}</td>
            <td className="px-4 py-2 italic">{es}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>





<div className="overflow-x-auto mt-4">
  <h1 className="mt-4 text-xl font-bold text-center">Frases con "jmenovat se", "učit se" y "dívat se"</h1>
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
        { cs: "Jmenuji se José.", es: "Me llamo José", file: "cs-CZ-VlastaNeural.mp3" },
        { cs: "Jak se jmenuješ?", es: "¿Cómo te llamas?", file: "cs-CZ-VlastaNeural (1).mp3" },
        { cs: "Já se jmenuju Aleš.", es: "Yo me llamo Aleš", file: "cs-CZ-VlastaNeural (5).mp3" },
        { cs: "Jak se jmenuje ta dívka?", es: "¿Cómo se llama la muchacha?", file: "cs-CZ-VlastaNeural (4).mp3" },
        { cs: "Ta dívka se jmenuje Pavla.", es: "Esa chica se llama Pavla", file: "cs-CZ-VlastaNeural (2).mp3" },
        { cs: "Moje sestra se také jmenuje Pavla.", es: "Mi hermana también se llama Pavla", file: "cs-CZ-VlastaNeural (3).mp3" },

 
        { cs: "Učíš se česky?", es: "¿Aprendes checo?", file: "cs-CZ-VlastaNeural (7).mp3" },
        { cs: "Ano, učím se česky a anglicky.", es: "Sí, aprendo checo e inglés", file: "cs-CZ-VlastaNeural (6).mp3" },
        { cs: "Můj bratr se učí španělsky.", es: "Mi hermano aprende español", file: "cs-CZ-VlastaNeural (8).mp3" },
        { cs: "On se učí o víkendu.", es: "Él aprende los fines de semana", file: "cs-CZ-VlastaNeural (9).mp3" },
        { cs: "Moje sestra se učí německy.", es: "Mi hermana aprende alemán", file: "cs-CZ-VlastaNeural (10).mp3" },
        { cs: "Učíš se často?", es: "¿Aprendes con frecuencia?", file: "cs-CZ-VlastaNeural (12).mp3" },
        { cs: "Učím se každý den půl hodiny.", es: "Aprendo media hora todos los días", file: "cs-CZ-VlastaNeural (11).mp3" },
      
        { cs: "Já se také učím anglicky.", es: "Yo también estoy aprendiendo inglés", file: "cs-CZ-VlastaNeural (13).mp3" },
        { cs: "Ona se někdy učí německy.", es: "Ella a veces aprende alemán", file: "cs-CZ-VlastaNeural (14).mp3" },

        { cs: "Díváš se často na televizi?", es: "¿Miras la televisión con frecuencia?", file: "cs-CZ-VlastaNeural (16).mp3" },
        { cs: "Ne, nedívám se často na televizi.", es: "No, no miro la televisión con frecuencia", file: "cs-CZ-VlastaNeural (15).mp3" },
      
        { cs: "On se dívá někdy na filmy.", es: "Él a veces mira películas", file: "cs-CZ-VlastaNeural (17).mp3" },
        { cs: "Občas se dívá na filmy.", es: "A veces mira películas", file: "cs-CZ-VlastaNeural (18).mp3" },
        { cs: "Díváme se na hokej.", es: "Miramos hockey", file: "cs-CZ-VlastaNeural (19).mp3" },
        { cs: "Dívám se ven.", es: "Miro hacia afuera", file: "cs-CZ-VlastaNeural (20).mp3" },
        { cs: "Často se dívám na komedie.", es: "A menudo miro comedias", file: "cs-CZ-VlastaNeural (21).mp3" },
        { cs: "Občas se dívám na fotbal.", es: "A veces miro el fútbol", file: "cs-CZ-VlastaNeural (22).mp3" },
        { cs: "Oni se dívají na obrazovku.", es: "Ellos miran la pantalla", file: "cs-CZ-VlastaNeural (23).mp3" }
      ].map(({ cs, es, file }, index) => (
        <TableRow key={index}>
          <TableCell className="text-center">
            <button
              onClick={() => playAudio(`/lesson21/${file}`)}
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

export default lesson20