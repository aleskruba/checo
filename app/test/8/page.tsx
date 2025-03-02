"use client"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { quizQuestions } from "./test8";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Quiz from "@/app/components/QuizComponent";

function Test8() {


  return (
    <div className="">
    <Quiz questions={quizQuestions} />
    </div>
  );
}

export default Test8;