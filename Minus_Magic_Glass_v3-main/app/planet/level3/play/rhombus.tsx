"use client"
import { useState } from "react"
import Link from "next/link"

export default function RhombusRound() {
  const gridSize = 6
  const totalEdges = 12
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  // Coordinates of boxes forming a rhombus (diamond shape)
  const rhombusEdges = [
    2,        // top
    7, 8,     // upper-left diagonal
    10, 16,   // upper-right diagonal
    19, 25,   // lower-left diagonal
    22, 28,   // lower-right diagonal
    31, 32,   // bottom
    33        // bottom tip
  ]

  const handleClick = (index: number) => {
    if (rhombusEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <Link
        href="/planet/level3/play/square"
        className="absolute top-6 left-4 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Square Round
      </Link>

      <h1 className="text-3xl font-bold mb-6">Level 3 – Play: Rhombus Round</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Trace the edges of the rhombus by clicking the boxes!
      </p>

      {/* Grid of boxes */}
      <div className="grid grid-cols-6 gap-1 border-2 border-purple-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = rhombusEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`w-12 h-12 cursor-pointer transition-colors ${
                isFound
                  ? "bg-purple-400"
                  : isEdge
                  ? "bg-gray-600 hover:bg-purple-200"
                  : "bg-gray-800"
              }`}
            />
          )
        })}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Edges Found: {edgesFound.length}/{totalEdges}
      </p>

      {edgesFound.length === totalEdges && (
        <div className="mt-6">
          <p className="text-green-400 font-semibold">
            ✅ Rhombus completed! Excellent work!
          </p>
          <Link
            href="/planet/level3/quiz"
            className="mt-4 inline-block rounded-full bg-secondary px-6 py-2 font-bold text-foreground hover:bg-secondary/80"
          >
            Next → Quiz
          </Link>
        </div>
      )}
    </main>
  )
}
