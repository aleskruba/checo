"use client";

import React, { useState, useEffect, useRef } from "react";
import stringComparison from "string-comparison";

const frases = [
  { cz: "Chtěl bych chleba.", es: "Quisiera pan." },
  { cz: "Chladný vzduch.", es: "Aire frío." },
  { cz: "Jdu do obchodu.", es: "Voy a la tienda." },
  { cz: "Chlapec chodí.", es: "El niño camina." },
  { cz: "Chci trochu vody.", es: "Quiero un poco de agua." },
  { cz: "Byla tam chyba.", es: "Había un error." },
  { cz: "Máme nový obchod.", es: "Tenemos una tienda nueva." },
  { cz: "Pes je v chladu.", es: "El perro está en el frío." }
];

const SpeechCheck: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetSentence, setTargetSentence] = useState(frases[0].cz);
  const targetRef = useRef(targetSentence);
  const recognition = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Váš prohlížeč nepodporuje Web Speech API.");
      return;
    }

    recognition.current = new SpeechRecognition();
    recognition.current.lang = "cs-CZ";
    recognition.current.interimResults = false;
    recognition.current.maxAlternatives = 1;

    recognition.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log("Recognized:", transcript);
      setSpokenText(transcript);
      evaluateSimilarity(transcript, targetRef.current);
      setIsListening(false);
    };

    recognition.current.onerror = (event: any) => {
      console.log("Recognition error:", event.error);
      alert("Chyba rozpoznávání: " + event.error);
      setIsListening(false);
    };

    recognition.current.onspeechend = () => {
      console.log("Speech ended.");
      recognition.current.stop();
      setIsListening(false);
    };

    recognition.current.onend = () => {
      console.log("Recognition ended.");
      setIsListening(false);
    };
  }, []);

  useEffect(() => {
    targetRef.current = targetSentence;
  }, [targetSentence]);

  function normalizeText(text: string) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[.,!?]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function evaluateSimilarity(input: string, target: string) {
    const dice = stringComparison.diceCoefficient;
    const normalizedInput = normalizeText(input);
    const normalizedTarget = normalizeText(target);
    const similarity = dice.similarity(normalizedInput, normalizedTarget);
    setScore(Math.round(similarity * 100));
  }

  function startListening() {
    setScore(null);
    setSpokenText("");
    setIsListening(true);
    recognition.current.start();
  }

  function tryAgain() {
    setScore(null);
    setSpokenText("");
    setIsListening(true);
    recognition.current.start();
  }

  function nextWord() {
    const nextIndex = (currentIndex + 1) % frases.length;
    setCurrentIndex(nextIndex);
    setTargetSentence(frases[nextIndex].cz);
    setScore(null);
    setSpokenText("");
  }

  function stopListening() {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Řekni frázi: / Di la frase:
      </h2>

      <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>"{targetSentence}"</p>

      <div className="flex flex-col">
        {score === null && !isListening && (
          <button
            onClick={startListening}
            disabled={isListening}
            className={`
              px-5 py-2 text-white font-semibold mb-16 mt-8 text-2xl rounded-full shadow-md
              transition-colors duration-300 
              ${isListening ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
              mr-2
            `}
          >
            🎤 Mikrofon
          </button>
        )}

        {isListening && (
          <button
            onClick={stopListening}
            style={{ padding: "10px 20px", fontSize: "1rem", backgroundColor: "red", color: "white" }}
          >
            Stop
          </button>
        )}

        {spokenText && (
          <>
            <h3>Tvůj výstup:</h3>
            <p>"{spokenText}"</p>
          </>
        )}

        {score !== null && (
          <>
            <h3 className="text-xl font-semibold text-center mb-4">
              Podobnost: <span className={score >= 80 ? "text-green-600" : "text-red-600"}>{score}%</span> {score >= 80 ? "👍" : "👎"}
            </h3>
            <div className="mt-4 flex flex-col justify-center gap-4">
              <button
                onClick={tryAgain}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md font-medium transition"
                style={{ marginRight: 10 }}
              >
                Zkus to znovu / Intentar otra vez
              </button>
              <button
                onClick={nextWord}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
              >
                Nová fráze / Nueva frase
              </button>
            </div>
          </>
        )}

        {score === null && !isListening && (
          <button
            onClick={nextWord}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition"
          >
            <span>Nová fráze / Nueva frase</span>
            <span>➡️</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SpeechCheck;
