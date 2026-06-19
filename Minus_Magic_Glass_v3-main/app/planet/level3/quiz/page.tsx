"use client"
import { useState } from "react"

export default function QuizPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const question = "Which shape is used in Edge Detection Round 1?"
  const options = ["Circle", "Square", "Rhombus"]
  const correctAnswer = "Circle"

  const handleAnswer = (option: string) => {
    setSelected(option)
    if (option === correctAnswer) {
      setFeedback("✅ Correct! Round 1 uses a Circle.")
    } else {
      setFeedback("❌ Try again! Hint: It’s round.")
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Quiz</h1>
      <p className="mb-4 text-lg">{question}</p>

      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className={`btn ${
              selected === option ? "btn-primary" : "btn-outline"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {feedback && (
        <p className="mt-6 text-lg font-semibold">
          {feedback}
        </p>
      )}
    </main>
  )
}
