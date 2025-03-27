"use client"


import { quizQuestions } from "./test11"
import Quiz from "@/app/components/QuizComponent";
import React, { useEffect } from 'react'
import { useAudio } from "../../context/AudioContext"; 
function Test11() {

const { isPlayingAll, stopAllAudio, isPlayingOne } = useAudio(); // Using context


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
    <div className="">
       <p className=" text-sm pb-4">
      📌 El contenido de este test proviene de este video:{" "}
      <a
        href="https://youtu.be/LMFJ2Z0oi9s"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
    </p>
    <Quiz questions={quizQuestions} />
    </div>
  );
}

export default Test11;