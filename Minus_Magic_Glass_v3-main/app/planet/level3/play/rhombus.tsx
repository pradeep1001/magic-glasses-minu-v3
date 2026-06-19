"use client"
import { useState } from "react"

export default function RhombusRound() {
  const [traced, setTraced] = useState(false)
  const [hoveredDots, setHoveredDots] = useState<number[]>([])

  const handleTrace = (index: number) => {
    if (!hoveredDots.includes(index)) {
      const newDots = [...hoveredDots, index]
      setHoveredDots(newDots)
      if (newDots.length >= 12) setTraced(true) // 4 sides × 3 dots each
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-4">Round 3 – Rhombus</h1>
      <p className="mb-6 text-gray-300">Trace over the dots to complete the rhombus!</p>

      <svg width="250" height="250" viewBox="0 0 250 250" className="mt-4">
        {/* Dots forming a diamond shape */}
        {[...Array(12)].map((_, i) => {
          let x = 0, y = 0
          if (i < 3) { x = 125 - i * 25; y = 50 + i * 50 }       // left diagonal
          else if (i < 6) { x = 125 + (i - 3) * 25; y = 50 + (i - 3) * 50 } // right diagonal
          else if (i < 9) { x = 125 + (i - 6) * 25; y = 200 - (i - 6) * 50 } // bottom right
          else { x = 125 - (i - 9) * 25; y = 200 - (i - 9) * 50 } // bottom left
          const isHovered = hoveredDots.includes(i)
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="6"
              fill={isHovered ? "#facc15" : "#a78bfa"}
              onMouseEnter={() => handleTrace(i)}
              onTouchStart={() => handleTrace(i)}
            />
          )
        })}
      </svg>

      <p className="mt-6 text-purple-300">
        Dots traced: {hoveredDots.length}/12
      </p>

      {traced && (
  <div className="mt-6 flex flex-col items-center">
    <p className="text-green-400 font-semibold mb-4">
      ✅ Rhombus completed! Excellent work!
    </p>
    {/* Auto-redirect to Quiz */}
    <script>
      {`setTimeout(() => { window.location.href = '/planet/level3/quiz'; }, 1500);`}
    </script>
    <p className="text-purple-300">Redirecting to Quiz…</p>
  </div>
)}
