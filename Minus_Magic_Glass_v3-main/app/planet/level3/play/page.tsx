"use client"
import { useState } from "react"

export default function Level3PlayPage() {
  const [completed, setCompleted] = useState(false)

  // Mark tracing complete when user moves over the SVG
  const handleTrace = () => {
    setCompleted(true)
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Play</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Trace the dots to complete the shape!
      </p>

      {/* Circle made of dots */}
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="mt-8"
        onMouseMove={handleTrace}
        onTouchMove={handleTrace}
      >
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * 2 * Math.PI
          const x = 100 + 80 * Math.cos(angle)
          const y = 100 + 80 * Math.sin(angle)
          return <circle key={i} cx={x} cy={y} r="4" fill="#a78bfa" />
        })}
      </svg>

      {completed && (
        <p className="mt-6 text-green-400 font-semibold">
          ✅ Circle completed! Great job!
        </p>
      )}
    </main>
  )
}
