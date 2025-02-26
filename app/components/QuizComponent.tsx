"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import awesome from "@/public/jimmy.gif";
import notbad from "@/public/notbad.gif";
import bad from "@/public/bad.gif";

type Question = {
  question: string;
  options: string[];
  answer: number;
};

type QuizProps = {
  questions: Question[];
};

function Quiz({ questions }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | undefined)[]>([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  // Ref for scrolling
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (questionIndex: number, value: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = value;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleTryAgain = () => {
    setSelectedAnswers([]);
    setScore(0);
    setSubmitted(false);
  };

  const allAnswersSelected = selectedAnswers.length === questions.length && !selectedAnswers.includes(undefined);

  // Automatically scroll to the bottom on submit
  useEffect(() => {
    if (submitted && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [submitted]);

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 ">
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index} className="mb-6 flex flex-col items-start gap-2">
            <Label className="text-lg font-thin">
              {index + 1}. {question.question}
            </Label>
            <RadioGroup
              value={selectedAnswers[index]?.toString() || ""}
              onValueChange={(value) => handleChange(index, parseInt(value))}
              className="peer"
            >
              {question.options.map((option, optionIndex) => {
                const isCorrect = selectedAnswers[index] === optionIndex && selectedAnswers[index] === question.answer;
                const isIncorrect = selectedAnswers[index] === optionIndex && selectedAnswers[index] !== question.answer;

                return (
                  <div key={optionIndex} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={optionIndex.toString()}
                      id={`option-${index}-${optionIndex}`}
                      disabled={submitted}
                      className={`dark:bg-white w-5 h-5 relative peer ${
                        submitted && isCorrect ? "bg-green-500" : ""
                      } ${submitted && isIncorrect ? "bg-red-500" : ""}`}
                    />
                    <Label
                      htmlFor={`option-${index}-${optionIndex}`}
                      className={`text-xl font-mono ${
                        submitted && isCorrect
                          ? "text-green-500"
                          : submitted && isIncorrect
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}

        <div className="flex md:justify-start justify-center">
          {!submitted && (
            <Button
              type="submit"
              disabled={!allAnswersSelected}
              className={`${
                allAnswersSelected ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"
              } text-white py-2 px-4 rounded`}
            >
              Zkontroluj/Chekear
            </Button>
          )}
        </div>

        <div className="flex md:justify-start justify-center">
          {submitted && (
            <Button
              onClick={handleTryAgain}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Zkusit znovu / Intentar de nuevo
            </Button>
          )}
        </div>
      </form>

      <div className="flex md:justify-start justify-center">
        {submitted && (
          <section className="mt-6">
            <h2 className="text-lg font-thin">
              Tvoje skóre (Tu resultado es):{" "}
              <span className="text-lg font-semibold">
                <span className="text-green-500 text-3xl">{score}</span> / {questions.length}
              </span>
            </h2>
          </section>
        )}
      </div>

      <div className="flex md:justify-start justify-center pb-8">
  {submitted && (
    <Image
      src={
        Number(score) > 9
          ? awesome // Display "awesome" if score is greater than 9
          : Number(score) > 5
          ? notbad // Display "notbad" if score is greater than 5 but less than or equal to 9
          : bad // Display "bad" if score is less than or equal to 5
      }
      alt="feedback"
      className="rounded-xl"
    />
  )}
</div>


      {/* Ref for scrolling to the bottom */}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default Quiz;
