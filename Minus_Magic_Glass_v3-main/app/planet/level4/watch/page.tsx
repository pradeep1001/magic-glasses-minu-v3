"use client"
import Link from "next/link"

export default function WatchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Watch: Spot the Difference</h1>

      <section className="max-w-2xl text-left space-y-4">
        <p>
          In this activity, you’ll see pairs of images side by side. Each pair has a subtle difference —
          it could be a change in <strong>shape</strong>, <strong>color</strong>, or <strong>texture</strong>.
        </p>
        <p>
          Watching examples helps you train your eyes to notice small variations. This skill is important
          in computer vision tasks like anomaly detection or quality inspection.
        </p>
      </section>

      <Link href="/planet/level4" className="btn btn-outline mt-8">
        ⬅ Back to Level 4
      </Link>
    </main>
  )
}
