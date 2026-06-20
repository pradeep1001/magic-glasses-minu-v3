"use client"
import { useState } from "react"
import Link from "next/link"

export default function SquareRound() {
  const gridSize = 6
  const totalEdges = 16
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  // Coordinates of boxes forming the square outline
  const squareEdges = [
    // Top row
    0, 1, 2, 3, 4, 5,
    // Bottom row
    30, 31, 32, 33, 34, 35,
    // Left column
    6, 12, 18, 24,
    // Right column
    11, 17, 23, 29
  ]

  const handleClick = (index: number) => {
    if (squareEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <Link
        href="/planet/level3/play"
        className="absolute top-6 left-4 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Circle Round
      </Link>

      <h1 className="text-3xl font-bold mb-6">Level 3 – Play: Square Round</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Trace the dots (boxes) to complete the square!
      </p>

      {/* Grid of boxes */}
      <div className="grid grid-cols-6 gap-1 border-2 border-red-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = squareEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`w-12 h-12 cursor-pointer transition-colors ${
                isFound
                  ? "bg-red-400"
                  : isEdge
                  ? "bg-gray-600 hover:bg-red-200"
                  : "bg-gray-800"
              }`}
            />
          )
        })}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Edges Found: {edgesFound.length}/{totalEdges}
      </p>

      {edgesFound.length === totalEdges && (
        <div className="mt-6">
          <p className="text-green-400 font-semibold">
            ✅ Square completed! Well done!
          </p>
          <Link
            href="/planet/level3/play/rhombus"
            className="mt-4 inline-block rounded-full bg-secondary px-6 py-2 font-bold text-foreground hover:bg-secondary/80"
          >
            Next → Rhombus Round
          </Link>
        </div>
      )}
    </main>
  )
}
