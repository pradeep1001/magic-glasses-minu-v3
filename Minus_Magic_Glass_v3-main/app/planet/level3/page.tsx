"use client"
import { useRouter } from "next/navigation"

export default function Level3Page() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      {/* Character and Title */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="/minu-character.png"
          alt="Minu character"
          className="w-32 h-32 mb-4"
        />
        <h2 className="text-lg font-semibold text-purple-400">Level 3</h2>
        <h1 className="text-4xl font-bold mt-2">Edge Detection</h1>
      </div>

      {/* Watch, Play, Quiz Buttons */}
      <div className="flex gap-8 mt-4">
        <button
          onClick={() => router.push("/planet/level3/watch")}
          className="btn btn-outline text-lg px-8 py-4"
        >
          Watch
        </button>
        <button
          onClick={() => router.push("/planet/level3/play")}
          className="btn btn-outline text-lg px-8 py-4"
        >
          Play
        </button>
        <button
          onClick={() => router.push("/planet/level3/quiz")}
          className="btn btn-primary text-lg px-8 py-4"
        >
          Quiz
        </button>
      </div>
    </main>
  )
}
