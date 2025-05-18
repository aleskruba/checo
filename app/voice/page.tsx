"use client"
import React, { useState, useEffect, useRef } from "react";
import stringComparison from "string-comparison";

const TARGET_SENTENCE = "toto je dům";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const SpeechCheck: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState("");
  const [score, setScore] = useState<number | null>(null);
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
      setSpokenText(transcript);
      evaluateSimilarity(transcript);
      setIsListening(false);
    };

    recognition.current.onerror = (event: any) => {
      alert("Chyba rozpoznávání: " + event.error);
      setIsListening(false);
    };

    recognition.current.onend = () => {
      setIsListening(false);
    };
  }, []);

  function startListening() {
    setScore(null);
    setSpokenText("");
    setIsListening(true);
    recognition.current.start();
  }

  function evaluateSimilarity(text: string) {
    const dice = stringComparison.diceCoefficient;
    const similarity = dice.similarity(text.toLowerCase(), TARGET_SENTENCE.toLowerCase());
    setScore(Math.round(similarity * 100));
  }

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Řekni větu:</h2>
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>"{TARGET_SENTENCE}"</p>

      <button onClick={startListening} disabled={isListening} style={{ padding: "10px 20px", fontSize: "1rem" }}>
        {isListening ? "Poslouchám..." : "Začni mluvit"}
      </button>

      {spokenText && (
        <>
          <h3>Tvůj výstup:</h3>
          <p>"{spokenText}"</p>
        </>
      )}

      {score !== null && (
        <h3>Podobnost: {score}% {score >= 80 ? "👍" : "👎"}</h3>
      )}
    </div>
  );
};

export default SpeechCheck;
