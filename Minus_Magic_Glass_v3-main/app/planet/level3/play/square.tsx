"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SquareRound() {
  const router = useRouter()
  const gridSize = 6
  const totalEdges = 16
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  const squareEdges = [0,1,2,3,4,5, 11,17,23,29, 30,31,32,33,34,35, 6,12,18,24]

  const handleClick = (index: number) => {
    if (squareEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

  useEffect(() => {
    if (edgesFound.length === totalEdges) {
      const timer = setTimeout(() => {
        router.push("/planet/level3/play/rhombus")
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [edgesFound, totalEdges, router])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Square Round</h1>
      <div className="grid grid-cols-6 gap-1 border-2 border-red-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = squareEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`w-12 h-12 cursor-pointer ${
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
      <p className="mt-4">Edges Found: {edgesFound.length}/{totalEdges}</p>
      {edgesFound.length === totalEdges && (
        <p className="mt-6 text-green-400 font-semibold">✅ Square completed! Moving to Rhombus…</p>
      )}
    </main>
  )
}
