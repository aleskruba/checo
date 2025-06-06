"use client"


import { quizQuestions } from "./test2";
import Quiz from "@/app/components/QuizComponent";
import React, { useEffect } from 'react'
import { useAudio } from "../../context/AudioContext"; 
function Test2() {

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
 
    <Quiz questions={quizQuestions} />
    </div>
  );
}

export default Test2;
