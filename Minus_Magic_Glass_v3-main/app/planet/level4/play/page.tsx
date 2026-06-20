"use client"
import { useState } from "react"

export default function Level4Play() {
  const questions = [
    {
      image: "/assets/level4/img1.png",
      correct: "Shape",
    },
    {
      image: "/assets/level4/img2.png",
      correct: "Color",
    },
    {
      image: "/assets/level4/img3.png",
      correct: "Texture",
    },
    {
      image: "/assets/level4/img4.png",
      correct: "Shape",
    },
    {
      image: "/assets/level4/img5.png",
      correct: "Color",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (option: string) => {
    if (option === questions[current].correct) {
      setFeedback("✅ Correct! Moving to next...")
      setTimeout(() => {
        if (current + 1 < questions.length) {
          setCurrent(current + 1)
          setFeedback("")
        } else {
          setCompleted(true)
        }
      }, 1000)
    } else {
      setFeedback("❌ Try again")
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Play: Feature Recognition</h1>

      {!completed ? (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <img
            src={questions[current].image}
            alt={`Question ${current + 1}`}
            className="w-full h-64 object-contain mb-4 rounded-lg border border-gray-700"
          />
          <p className="text-lg mb-4">
            On what feature do the given figures differ?
          </p>
          <div className="flex flex-col gap-3">
            {["Shape", "Color", "Texture"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="btn btn-outline px-4 py-2"
              >
                {opt}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{feedback}</p>
        </div>
      ) : (
        <div className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">🎉 Activity Completed!</h2>
          <p className="text-lg mb-4">
            You’ve successfully recognized all features across 5 pairs of figures.
          </p>
          <a href="/planet/level4/quiz" className="btn btn-primary px-4 py-2">
            Proceed to Quiz
          </a>
        </div>
      )}
    </main>
  )
}
