"use client"
import { useState } from "react"

export default function CircleRound() {
  const [traced, setTraced] = useState(false)
  const [hoveredDots, setHoveredDots] = useState<number[]>([])

  const handleTrace = (index: number) => {
    if (!hoveredDots.includes(index)) {
      const newDots = [...hoveredDots, index]
      setHoveredDots(newDots)
      if (newDots.length >= 20) setTraced(true)
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center">
      <h1 className="text-3xl font-bold mb-4">Round 1 – Circle</h1>
      <p className="mb-6 text-gray-300">Trace over the dots to complete the circle!</p>

      {/* SVG circle with dots + connecting lines */}
      <svg width="250" height="250" viewBox="0 0 250 250" className="mt-4">
        {/* Draw connecting lines */}
        {hoveredDots.map((dotIndex, i) => {
          if (i === 0) return null
          const prevIndex = hoveredDots[i - 1]
          const angle1 = (prevIndex / 20) * 2 * Math.PI
          const angle2 = (dotIndex / 20) * 2 * Math.PI
          const x1 = 125 + 90 * Math.cos(angle1)
          const y1 = 125 + 90 * Math.sin(angle1)
          const x2 = 125 + 90 * Math.cos(angle2)
          const y2 = 125 + 90 * Math.sin(angle2)
          return (
            <line
              key={`line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#facc15"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0,200"
                to="200,0"
                dur="0.3s"
                fill="freeze"
              />
            </line>
          )
        })}

        {/* Render dots */}
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * 2 * Math.PI
          const x = 125 + 90 * Math.cos(angle)
          const y = 125 + 90 * Math.sin(angle)
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

      {/* Progress display */}
      <p className="mt-6 text-purple-300">
        Dots traced: {hoveredDots.length}/20
      </p>

      {/* Completion message */}
      {traced && (
        <p className="mt-4 text-green-400 font-semibold">
          ✅ Circle completed! Great job!
        </p>
      )}
    </main>
  )
}
