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
        <p className="text-lg text-gray-300 mt-2 max-w-xl">
          Help Minu find the outlines hiding in a picture.
        </p>
      </div>

      {/* Watch, Learn, Quiz Buttons */}
      <div className="flex gap-6 mb-10">
        <button
          onClick={() => router.push("/planet/level3/watch")}
          className="btn btn-outline text-lg px-6 py-3"
        >
          Watch
        </button>
        <button
          onClick={() => router.push("/planet/level3/learn")}
          className="btn btn-outline text-lg px-6 py-3"
        >
          Learn
        </button>
        <button
          onClick={() => router.push("/planet/level3/quiz")}
          className="btn btn-primary text-lg px-6 py-3"
        >
          Quiz
        </button>
      </div>

      {/* Activity Section */}
      <div className="bg-gray-800 rounded-xl p-6 max-w-xl text-gray-200">
        <p className="mb-4">
          This level’s activity is coming soon — we’ll build it together next!
        </p>
        <button className="btn btn-primary px-6 py-3">
          ✅ Mark Calibrated
        </button>
      </div>
    </main>
  )
}
