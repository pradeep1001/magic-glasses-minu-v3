"use client"
import { useState } from "react"

export default function CircleRound() {
  const gridSize = 6
  const totalEdges = 12
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  const handleClick = (index: number) => {
    if (!edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Play: Circle Round</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Find the edges – click them!
      </p>

      <div className="grid grid-cols-6 gap-1 border-2 border-yellow-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = [2, 3, 8, 9, 14, 15, 20, 21, 26, 27, 32, 33].includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onClick={() => isEdge && handleClick(i)}
              className={`w-12 h-12 cursor-pointer ${
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
        Edges Found: {edgesFound.length}/{totalEdges}
      </p>

      {edgesFound.length === totalEdges && (
        <div className="mt-6">
          <p className="text-green-400 font-semibold">
            ✅ Circle completed! Great job!
          </p>
          <a
            href="/planet/level3/play/square"
            className="mt-4 inline-block rounded-full bg-secondary px-6 py-2 font-bold text-foreground hover:bg-secondary/80"
          >
            Next → Square Round
          </a>
        </div>
      )}
    </main>
  )
}
