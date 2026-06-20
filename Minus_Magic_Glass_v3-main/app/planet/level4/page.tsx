"use client"
import Link from "next/link"

export default function Level4Hub() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-4xl font-bold mb-8">Level 4 Hub</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Choose what you’d like to do next:
      </p>

      <div className="grid grid-cols-2 gap-6">
        <Link
          href="/planet/level4/watch"
          className="btn btn-primary px-6 py-4 text-xl"
        >
          🎥 Watch
        </Link>
        <Link
          href="/planet/level4/learn"
          className="btn btn-secondary px-6 py-4 text-xl"
        >
          📘 Learn
        </Link>
        <Link
          href="/planet/level4/play"
          className="btn btn-accent px-6 py-4 text-xl"
        >
          🎮 Play
        </Link>
        <Link
          href="/planet/level4/quiz"
          className="btn btn-outline px-6 py-4 text-xl"
        >
          📝 Quiz
        </Link>
      </div>
    </main>
  )
}
