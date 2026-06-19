"use client"
import { useState } from "react"

export default function SquareRound() {
  const [traced, setTraced] = useState(false)
  const [hoveredDots, setHoveredDots] = useState<number[]>([])

  const handleTrace = (index: number) => {
    if (!hoveredDots.includes(index)) {
      const newDots = [...hoveredDots, index]
      setHoveredDots(newDots)
      if (newDots.length >= 16) setTraced(true) // 4 sides × 4 dots each
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-4">Round 2 – Square</h1>
      <p className="mb-6 text-gray-300">Trace over the dots to complete the square!</p>

      <svg width="250" height="250" viewBox="0 0 250 250" className="mt-4">
        {/* Dots along square edges */}
        {[...Array(16)].map((_, i) => {
          const side = Math.floor(i / 4)
          const pos = i % 4
          let x = 0, y = 0
          if (side === 0) { x = 50 + pos * 50; y = 50 }        // top edge
          if (side === 1) { x = 200; y = 50 + pos * 50 }       // right edge
          if (side === 2) { x = 200 - pos * 50; y = 200 }      // bottom edge
          if (side === 3) { x = 50; y = 200 - pos * 50 }       // left edge
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
        Dots traced: {hoveredDots.length}/16
      </p>

      {traced && (
        <div className="mt-6 flex flex-col items-center">
          <p className="text-green-400 font-semibold mb-4">
            ✅ Square completed! Well done!
          </p>
          <a
            href="/planet/level3/triangle"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
          >
            Go to Round 3 – Triangle
          </a>
        </div>
      )}
    </main>
  )
}
