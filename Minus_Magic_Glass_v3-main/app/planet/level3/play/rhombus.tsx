"use client"
import { useState } from "react"

export default function RhombusRound() {
  const [traced, setTraced] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const handleTrace = () => {
    setTraced(true)
  }

  // Generate rhombus dots (diamond shape)
  const dots = []
  const step = 20
  for (let i = 0; i <= 160; i += step) {
    // Top-left to bottom-left diagonal
    dots.push({ x: 100 - i / 2, y: 20 + i })
    // Top-right to bottom-right diagonal
    dots.push({ x: 100 + i / 2, y: 20 + i })
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-4">Round 3 – Rhombus</h1>
      <p>Trace over the dots to complete the rhombus!</p>

      {/* SVG rhombus with dots */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="mt-8"
        onMouseMove={handleTrace}
        onTouchMove={handleTrace}
      >
        {dots.map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="#f59e0b" />
        ))}
      </svg>

      {traced && (
        <p className="mt-6 text-yellow-400 font-semibold">
          ✅ Rhombus completed! Excellent work!
        </p>
      )}

      {/* Hint button */}
      <div className="mt-6">
        <button
          onClick={() => setShowHint(!showHint)}
          className="btn btn-outline"
        >
          Show Hint
        </button>
        {showHint && (
          <p className="mt-2 text-sm text-yellow-300">
            Hint: Trace along the diamond outline from top to bottom.
          </p>
        )}
      </div>
    </main>
  )
}
