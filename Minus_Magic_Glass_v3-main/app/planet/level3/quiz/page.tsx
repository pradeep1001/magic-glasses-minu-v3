"use client"
import { useState } from "react"

export default function Level3Quiz() {
  const [score, setScore] = useState<number | null>(null)

  const questions = [
    {
      question: "Which shape has four equal sides and four right angles?",
      options: ["Circle", "Square", "Rhombus"],
      answer: "Square",
    },
    {
      question: "Which shape is round and has no corners?",
      options: ["Circle", "Square", "Triangle"],
      answer: "Circle",
    },
    {
      question: "Which shape looks like a diamond?",
      options: ["Rhombus", "Square", "Circle"],
      answer: "Rhombus",
    },
  ]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    let correct = 0
    questions.forEach((q, i) => {
      if (formData.get(`q${i}`) === q.answer) correct++
    })
    setScore(correct)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-6">Level 3 Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((q, i) => (
          <div key={i} className="text-left">
            <p className="mb-2 font-semibold">{q.question}</p>
            {q.options.map((opt) => (
              <label key={opt} className="block">
                <input type="radio" name={`q${i}`} value={opt} required /> {opt}
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Submit Answers
        </button>
      </form>

      {score !== null && (
        <p className="mt-6 text-green-400 font-semibold">
          You scored {score}/{questions.length} correct!
        </p>
      )}
    </main>
  )
}
