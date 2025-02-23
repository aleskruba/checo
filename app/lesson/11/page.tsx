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
    title='El verbo "vidět/ ver" en presente'
    description='En esta lección, aprenderemos el verbo "vidět" en checo y cómo usarlo en frases básicas.'
/>
<section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
    <div className="overflow-x-auto mt-4">
        <Table className="min-w-full">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center ">Audio</TableHead>
                    <TableHead className="text-center">Česky/En checo</TableHead>
                    <TableHead className="text-center">Španělsky/En español</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>
                        <button
                            onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (59).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play Já vidím Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>Já vidím</TableCell>
                    <TableCell>Yo veo</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                            onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (60).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play Ty vidíš Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>Ty vidíš</TableCell>
                    <TableCell>Tú ves</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                          onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (61).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play On vidí Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>On vidí</TableCell>
                    <TableCell>Él ve</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                               onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (62).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play Ona vidí Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>Ona vidí</TableCell>
                    <TableCell>Ella ve</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                             onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (63).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play My vidíme Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>My vidíme</TableCell>
                    <TableCell>Nosotros vemos</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                            onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (64).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play Vy vidíte Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>Vy vidíte</TableCell>
                    <TableCell>Vosotros veis/Ustedes ven</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <button
                        onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (65).mp3")}
                            className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                            aria-label="Play Oni vidí Audio"
                        >
                            <FaPlay size={20} />
                        </button>
                    </TableCell>
                    <TableCell>Oni vidí / Ony vidí</TableCell>
                    <TableCell>Ellos ven / Ellas ven</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
</section>


<section className="mt-4 shadow-lg rounded-2xl p-6 dark:bg-gray-800 text-black bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">El caso acusativo en checo / 4.pád</h2>
      <div className="space-y-6">
      <div className="p-4 bg-orange-100 rounded-lg">
        <h3 className="text-lg font-semibold text-orange-700">🟠 Género femenino (Rod ženský)</h3>
        <p className="mt-2">En el caso acusativo, los sustantivos femeninos cambian su terminación:</p>
        <ul className="list-disc list-inside ml-4">
            <li><strong>Si termina en "a" → cambia a "u":</strong> <i>žena → ženu</i>, <i>kniha → knihu</i></li>
            <li><strong>Si termina en "e" → cambia a "i":</strong> <i>růže → růži</i>, <i>ulice → ulici</i></li>
            <li><strong>Excepción:</strong> Sustantivos inanimados con terminación <i>-e</i> o <i>-i</i> no cambian: <i>místnost → místnost</i>, <i>kost → kost</i></li>
        </ul>
        </div>

        <div className="p-4 bg-yellow-100 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-700">🟡 Género neutro (Rod střední)</h3>
          <p className="mt-2">Normalmente, la terminación no cambia:</p>
          <ul className="list-disc list-inside ml-4">
            <li><i>město → město</i>, <i>auto → auto</i>, <i>dítě → dítě</i></li>
            <li><strong>Excepción:</strong> Pronombres y algunos adjetivos: <i>to → to</i>, <i>moje → moje</i></li>
          </ul>
        </div>

        <div className="p-4 bg-blue-100 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-700">🔵 Género masculino (Rod mužský)</h3>
          <p className="mt-2">Diferencia entre sustantivos animados e inanimados:</p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Animado:</strong> Cambia la terminación: <i>vidím pán → vidím pána</i>, <i>muž → muže</i>, <i>pes → psa</i></li>
            <li><strong>Inanimado:</strong> La terminación no cambia: <i>vidím stůl → vidím stůl</i>, <i>hrad → hrad</i></li>
          </ul>
        </div>
      </div>
    </section>
    <section className="mt-2 shadow-lg rounded-2xl p-4 text-black dark:bg-gray-800 bg-white">
    <h2 className="text-2xl font-bold mb-4 dark:text-white">
Ejemplos con acusativo (caso 4) - El verbo "ver"
  <br />
  Příklady s akuzativem (4. pád) - Sloveso "vidět“  
</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="text-center p-2 bg-orange-100">🎧 Audio</th>
            <th className="text-center p-2 bg-orange-100">Česky</th>
            <th className="text-center p-2 bg-orange-100">Španělsky</th>
          </tr>
        </thead>
        <tbody>
          {/* Ženský rod */}
          <tr className="bg-orange-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (66).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Já vidím knihu (kniha-fem)</td>
            <td className="p-2">Yo Veo un libro</td>
          </tr>
          <tr className="bg-orange-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (67).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Ty vidíš ženu (žena-fem)</td>
            <td className="p-2">Tú ves a una mujer</td>
          </tr>
          <tr className="bg-orange-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (68).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">On vidí ulici (ulice-fem)</td>
            <td className="p-2">Él ve una calle</td>
          </tr>
          <tr className="bg-orange-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (69).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Ona Vidí růži (růže-fem)</td>
            <td className="p-2">Ella ve una rosa</td>
          </tr>
          {/* Střední rod */}
          <tr className="bg-yellow-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (70).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">My vidíme město (město-neutr)</td>
            <td className="p-2">Nosotros vemos una ciudad</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (71).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Vy vidíte auto (coche-neutr)</td>
            <td className="p-2">Vosotros veis un coche</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (72).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Oni vidí dítě (dítě-neutr)</td>
            <td className="p-2">Ellos ven un niño</td>
          </tr>
          <tr className="bg-yellow-100">
            <td className="text-center p-2">
              <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (73).mp3")}className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
                <FaPlay size={20} />
              </button>
            </td>
            <td className="p-2">Já vidím jablko (jablko-neutr)</td>
            <td className="p-2">Yo veo una manzana</td>
          </tr>
          <tr className="bg-blue-100">
  <td className="text-center p-2">
    <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (74).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
      <FaPlay size={20} />
    </button>
  </td>
  <td className="p-2">Já vidím souseda (soused-masc-animado)</td>
  <td className="p-2">Yo veo a un vecino</td>
</tr>

<tr className="bg-blue-100">
  <td className="text-center p-2">
    <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (75).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
      <FaPlay size={20} />
    </button>
  </td>
  <td className="p-2">Ty vidíš psa (pes-masc-animado)</td>
  <td className="p-2">Tú ves a un perro</td>
</tr>

<tr className="bg-blue-100">
  <td className="text-center p-2">
    <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (76).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
      <FaPlay size={20} />
    </button>
  </td>
  <td className="p-2">On vidí stůl (stůl-masc-inanimado)</td>
  <td className="p-2">Él ve una mesa</td>
</tr>

<tr className="bg-blue-100">
  <td className="text-center p-2">
    <button    onClick={() => playAudio("/lesson11/cs-CZ-VlastaNeural (77).mp3")} className="text-blue-600 hover:text-blue-800" aria-label="Play Audio">
      <FaPlay size={20} />
    </button>
  </td>
  <td className="p-2">Ona vidí dům (dům-masc-inanimado)</td>
  <td className="p-2">Ella ve una casa</td>
</tr>

        </tbody>
      </table>
    </section>
  </div>
  )
}

export default lesson11