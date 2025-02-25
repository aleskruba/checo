"use client"

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { quizQuestions } from "./test1";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function Test1() {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | undefined)[]>([]);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionIndex: number, value: number) => {
    // Update the selected answer for each question
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = value;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    let newScore = 0;
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleTryAgain = () => {
    // Reset state to initial values
    setSelectedAnswers([]);
    setScore(0);
    setSubmitted(false);
  };

  // Check if all answers are selected by comparing with the length of quizQuestions
  const allAnswersSelected = selectedAnswers.length === quizQuestions.length && !selectedAnswers.includes(undefined);

  return (
    <div className="max-w-2xl mx-auto py-6 px-4 ">
      <form onSubmit={handleSubmit}>
        {quizQuestions.map((question, index) => (
          <div key={index} className="mb-6 flex flex-col items-start gap-2">
                <Label className="text-lg font-thin "> {/* Make the label text larger */}
             {index+1}<span className="text-2xl  mr-2">.</span>{question.question}
            </Label>
            <RadioGroup
              value={selectedAnswers[index]?.toString() || ""} // Convert number to string
              onValueChange={(value) => handleChange(index, parseInt(value))} // Ensure value is a number
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
                      className={`dark:bg-white w-5 h-5 relative peer ${submitted && isCorrect ? "bg-green-500" : ""} ${submitted && isIncorrect ? "bg-red-500" : ""}`}
                    />
                    <Label
                      htmlFor={`option-${index}-${optionIndex}`}
                      className={`text-xl font-mono ${submitted && isCorrect ? "text-green-500" : submitted && isIncorrect ? "text-red-500" : ""} `}
                    >
                      {option}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}

{!submitted && (
        <Button
          type="submit"
          disabled={!allAnswersSelected} // Disable button if not all answers are selected
          className={`${
            allAnswersSelected ? "bg-green-500 hover:bg-green-600" : "bg-gray-300 cursor-not-allowed"
          } text-white py-2 px-4 rounded`}
        >
          Zkontroluj/Chekear
        </Button>
)
}
        {/* Show "Zkusit znovu" button after submission */}
        {submitted && (
          <Button
            onClick={handleTryAgain} // Call the reset function when clicked
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Zkusit znovu
          </Button>
        )}
      </form>

      {/* Display score after submission */}
      {submitted && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Tvoje skóre: {score} / {quizQuestions.length}</h2>
        </section>
      )}
    </div>
  );
}

export default Test1;
