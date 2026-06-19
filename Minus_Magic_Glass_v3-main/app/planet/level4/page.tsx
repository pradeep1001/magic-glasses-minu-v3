"use client"
import { useRouter } from "next/navigation"

export default function Level4Page() {
  const router = useRouter()

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Spot the Difference</h1>

      <p className="mb-6 text-lg text-muted-foreground max-w-xl">
        In this level, you’ll practice identifying differences between pairs of images —
        focusing on <strong>shape</strong>, <strong>color</strong>, and <strong>texture</strong>.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/planet/level4/watch")}
          className="btn btn-outline"
        >
          Watch
        </button>
        <button
          onClick={() => router.push("/planet/level4/learn")}
          className="btn btn-outline"
        >
          Learn
        </button>
        <button
          onClick={() => router.push("/planet/level4/quiz")}
          className="btn btn-primary"
        >
          Quiz
        </button>
      </div>
    </main>
  )
}
