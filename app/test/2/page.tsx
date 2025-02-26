"use client"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { quizQuestions } from "./test2";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Quiz from "@/app/components/QuizComponent";

function Test2() {


  return (
    <div className="">
    <Quiz questions={quizQuestions} />
    </div>
  );
}

export default Test2;
