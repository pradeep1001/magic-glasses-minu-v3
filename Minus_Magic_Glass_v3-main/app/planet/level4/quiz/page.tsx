"use client"
import { useState } from "react"

export default function Level4Quiz() {
  const questions = [
    {
      question: "Two figures are shown: one is a circle, the other is a square. On what feature do they differ?",
      options: ["Shape", "Color", "Texture"],
      answer: "Shape",
    },
    {
      question: "Two identical triangles are shown, but one is red and the other is blue. On what feature do they differ?",
      options: ["Shape", "Color", "Texture"],
      answer: "Color",
    },
    {
      question: "Two identical squares are shown, one smooth and one with a rough pattern. On what feature do they differ?",
      options: ["Shape", "Color", "Texture"],
      answer: "Texture",
    },
    {
      question: "Two rectangles are shown: one is green, the other is yellow. On what feature do they differ?",
      options: ["Shape", "Color", "Texture"],
      answer: "Color",
    },
    {
      question: "Two circles are shown: one smooth, the other with a dotted fill. On what feature do they differ?",
      options: ["Shape", "Color", "Texture"],
      answer: "Texture",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore(score + 1)
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
    }
  }

  const retryQuiz = () => {
    setCurrent(0)
    setScore(0)
    setShowResult(false)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Quiz</h1>

      {!showResult ? (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-semibold mb-4">
            {questions[current].question}
          </p>
          <div className="flex flex-col gap-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="btn btn-outline px-4 py-2"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Question {current + 1} of {questions.length}
          </p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg mb-4">
            Your Score: {score} / {questions.length}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={retryQuiz}
              className="btn btn-outline px-4 py-2"
            >
              Retry Quiz
            </button>
            <a href="/planet/level4" className="btn btn-primary px-4 py-2">
              Back to Level 4 Hub
            </a>
          </div>
        </div>
      )}
    </main>
  )
}
