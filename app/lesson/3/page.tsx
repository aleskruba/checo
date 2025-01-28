"use client"

import SectionTopComponent from '@/app/components/SectionTopComponents'
import React from 'react'
import { FaPlay } from "react-icons/fa";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
function lesson3() {

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className='w-full min-h-screen px-0 md:px-12  '>
      
       <SectionTopComponent
    title='El verbo "být" ser/estar en presente'
    description='En esta lección, aprenderemos el verbo "být" en checo y cómo usarlo en frases básicas para presentarnos y preguntar por el nombre de otras personas.'
  />
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
    <h1>En checo usamos solo una forma del verbo 'být' para los dos casos, como 'ser' y 'estar'.</h1>
    <h1 className='mt-4'><span className='font font-bold text-red-500'>¡OJO!</span> En checo, la letra  <span className='font font-extrabold text-blue-500'>'  j  '</span> se pronuncia como una <span className='font font-extrabold text-blue-500'> doble ' l ' </span> en español.</h1>
    <div className="overflow-x-auto mt-4">
        <Table className="min-w-full">
          <TableHeader>
          <TableRow>
            <TableHead className="text-center font-bold">Audio</TableHead>
            <TableHead className="text-center font-bold">Česky/En checo</TableHead>
            <TableHead className="text-center font-bold">Španělsky/En español</TableHead>
          </TableRow>

          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/jajsem.m4a")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem</TableCell>
              <TableCell>Yo soy</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/tyjsi.m4a")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi</TableCell>
              <TableCell>Tú eres</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/onje.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play On je Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On je</TableCell>
              <TableCell>Él es</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/onaje.m4a")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ona je Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ona je</TableCell>
              <TableCell>Ella es</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/myjsme.m4a")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play My jsme Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>My jsme</TableCell>
              <TableCell>Nosotros somos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/vyste.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Vy jste Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Vy jste</TableCell>
              <TableCell>Vosotros sois/Ustedes son</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/onijsou.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Oni jsou Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Oni jsou</TableCell>
              <TableCell>Ellos/Ellas  son</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h1 className='mt-4'>Nos centraremos más en los plurales en las próximas lecciones</h1>
  </section>
  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
  <h1 className='mt-4'><span className='font font-bold text-red-500'>¡OJO!</span> En checo, la letra  <span className='font font-extrabold text-blue-500'>'  ch  '</span> se pronuncia como una <span className='font font-extrabold text-blue-500'> ' jota ' </span> en español.</h1>
  <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Audio</TableHead>
              <TableHead className="text-center">Czech</TableHead>
              <TableHead className="text-center">Spanish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Já jsem */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/jacech.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem Čech</TableCell>
              <TableCell>Soy checo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/jame.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem Mexičan Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem Mexičan</TableCell>
              <TableCell>Soy mexicano</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/jabr.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem Brazilec Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem Brazilec</TableCell>
              <TableCell>Soy brasileño</TableCell>
            </TableRow>

            {/* Ty jsi */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/tyce.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi Čech</TableCell>
              <TableCell>Tú eres checo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/type.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi Peruánec Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi Peruánec</TableCell>
              <TableCell>Tú eres peruano</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/tysp.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi Španěl Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi Španěl</TableCell>
              <TableCell>Tú eres español</TableCell>
            </TableRow>

            {/* On/Ona je */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/oncech.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play On je Čech Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On je Čech</TableCell>
              <TableCell>Él es checo</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/onaarg.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ona je Argentinka Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ona je Argentinka</TableCell>
              <TableCell>Ella es argentina</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/onkol.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play On je Kolumbijec Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On je Kolumbijec</TableCell>
              <TableCell>Él es colombiano</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
   

  </section>

  <section className="mt-2 shadow-lg rounded-2xl p-4 dark:bg-gray-800 bg-white">
<div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Audio</TableHead>
              <TableHead className="text-center">Czech</TableHead>
              <TableHead className="text-center">Spanish</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Já jsem */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-st.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem šťastný Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem šťastný</TableCell>
              <TableCell>Estoy feliz</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-una.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem unavený Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem unavený</TableCell>
              <TableCell>Estoy cansado</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-zdr.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Já jsem zdravý Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Já jsem zdravý</TableCell>
              <TableCell>Estoy saludable</TableCell>
            </TableRow>

            {/* Ty jsi */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-sm.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi smutný Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi smutný</TableCell>
              <TableCell>Estás triste</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-ves.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi veselý Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi veselý</TableCell>
              <TableCell>Estás alegre</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-pom.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ty jsi pomalý Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ty jsi pomalý</TableCell>
              <TableCell>Estás lento</TableCell>
            </TableRow>

            {/* On/Ona je */}
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-kra.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play Ona je krásná Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>Ona je krásná</TableCell>
              <TableCell>Ella es hermosa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <button
                  onClick={() => playAudio("/lesson3/adj-vy.mp3")}
                  className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400"
                  aria-label="Play On je vysoký Audio"
                >
                  <FaPlay size={20} />
                </button>
              </TableCell>
              <TableCell>On je vysoký</TableCell>
              <TableCell>Él es alto</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
</section>
  </div>
  )
}

export default lesson3