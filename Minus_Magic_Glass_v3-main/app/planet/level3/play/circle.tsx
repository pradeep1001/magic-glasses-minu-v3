"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CircleRound() {
  const router = useRouter()
  const gridSize = 6
  const totalEdges = 8
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  // Circle outline coordinates (matching your drawn circle)
  const circleEdges = [3, 4, 8, 14, 21, 22, 17, 11]

  // Mark boxes when hovered or touched
  const handleTrace = (index: number) => {
    if (circleEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  // Auto‑advance to Square after completion
  useEffect(() => {
    if (edgesFound.length === totalEdges) {
      const timer = setTimeout(() => {
        router.push("/planet/level3/play/square")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [edgesFound, totalEdges, router])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Play: Circle Round</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Trace the circle by moving over the boxes!
      </p>

      {/* Grid of boxes */}
      <div className="grid grid-cols-6 gap-1 border-2 border-yellow-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = circleEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onMouseEnter={() => handleTrace(i)}
              onTouchMove={() => handleTrace(i)}
              className={`w-12 h-12 cursor-crosshair transition-colors ${
                isFound
                  ? "bg-yellow-400"
                  : isEdge
                  ? "bg-gray-600 hover:bg-yellow-200"
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
          ✅ Circle completed! Moving to Square…
        </p>
      )}
    </main>
  )
}
