"use client"
import Link from "next/link"

export default function LearnPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Learn: Spotting Differences</h1>

      <section className="max-w-2xl text-left space-y-4">
        <p>
          Spotting differences between images is a fundamental skill in pattern recognition.
          It teaches us to focus on <strong>visual features</strong> like edges, colors, and textures.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Shape differences</strong> – e.g., circle vs. square.</li>
          <li><strong>Color differences</strong> – e.g., red vs. blue object.</li>
          <li><strong>Texture differences</strong> – e.g., smooth vs. rough surface.</li>
        </ul>
        <p>
          In computer vision, these differences are detected using filters and feature extraction
          techniques, helping machines distinguish between objects.
        </p>
      </section>

      <Link href="/planet/level4" className="btn btn-outline mt-8">
        ⬅ Back to Level 4
      </Link>
    </main>
  )
}
