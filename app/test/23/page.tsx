"use client"


import { quizQuestions } from "./test23"
import Quiz from "@/app/components/QuizComponent";
import React, { useEffect } from 'react'
import { useAudio } from "../../context/AudioContext"; 
function Test20() {

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
      <div className="flex flex-col ">
       <p className=" text-sm pb-4">
      📌 El contenido de este test proviene de este video:{" "}
      </p>
      <a
        href="https://youtu.be/8YYeICudg4c"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-semibold hover:underline"
      >
        Ver en YouTube
      </a>
      </div>
    <h1 className="font-mono text-center mt-4">El caso genitivo (2. pád)</h1>
    <Quiz questions={quizQuestions} />
    </div>
  );
}

export default Test20;