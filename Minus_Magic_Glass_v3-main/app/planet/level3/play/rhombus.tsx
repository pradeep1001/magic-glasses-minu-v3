"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RhombusRound() {
  const router = useRouter()
  const gridSize = 6
  const totalEdges = 8
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  // Coordinates forming a rhombus (diamond shape) in the 6x6 grid
  const rhombusEdges = [
    2,        // top tip
    8, 14,    // upper-left diagonal
    20,       // left tip
    26, 32,   // lower-left diagonal
    28,       // bottom tip
    22, 16,   // lower-right diagonal
    10, 4     // upper-right diagonal back to top
  ]

  const handleTrace = (index: number) => {
    if (rhombusEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  // Auto‑advance to Quiz after completion
  useEffect(() => {
    if (edgesFound.length === totalEdges) {
      const timer = setTimeout(() => {
        router.push("/planet/level3/quiz")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [edgesFound, totalEdges, router])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Play: Rhombus Round</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Trace the rhombus by moving over the boxes!
      </p>

      {/* Grid of boxes */}
      <div className="grid grid-cols-6 gap-1 border-2 border-purple-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = rhombusEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onMouseEnter={() => handleTrace(i)}
              onTouchMove={() => handleTrace(i)}
              className={`w-12 h-12 cursor-crosshair transition-colors ${
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
        <p className="mt-6 text-green-400 font-semibold">
          ✅ Rhombus completed! Moving to Quiz…
        </p>
      )}
    </main>
  )
}
