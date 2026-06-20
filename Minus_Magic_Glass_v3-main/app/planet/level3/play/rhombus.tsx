"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RhombusRound() {
  const router = useRouter()
  const gridSize = 6
  const totalEdges = 12
  const [edgesFound, setEdgesFound] = useState<number[]>([])

  const rhombusEdges = [2,7,8,10,16,19,25,22,28,31,32,33]

  const handleClick = (index: number) => {
    if (rhombusEdges.includes(index) && !edgesFound.includes(index)) {
      setEdgesFound([...edgesFound, index])
    }
  }

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
      <h1 className="text-3xl font-bold mb-6">Rhombus Round</h1>
      <div className="grid grid-cols-6 gap-1 border-2 border-purple-400 p-2 rounded-lg">
        {[...Array(gridSize * gridSize)].map((_, i) => {
          const isEdge = rhombusEdges.includes(i)
          const isFound = edgesFound.includes(i)
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`w-12 h-12 cursor-pointer ${
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
      <p className="mt-4">Edges Found: {edgesFound.length}/{totalEdges}</p>
      {edgesFound.length === totalEdges && (
        <p className="mt-6 text-green-400 font-semibold">✅ Rhombus completed! Moving to Quiz…</p>
      )}
    </main>
  )
}
