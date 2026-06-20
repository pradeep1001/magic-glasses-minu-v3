"use client"

import Link from "next/link"

export default function Level3PlayPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <Link
        href="/planet/level3"
        className="absolute top-6 left-4 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Level 3
      </Link>

      <h1 className="text-3xl font-bold mb-6">Level 3 – Play</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Interactive practice goes here! Learners can trace shapes or solve tasks.
      </p>
    </main>
  )
}
