"use client"
import Link from "next/link"

export default function LearnPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Learn: Edge Detection</h1>

      <section className="max-w-2xl text-left space-y-4">
        <p>
          <strong>Edge detection</strong> is the process of identifying sharp changes in brightness or color in an image.
          These changes usually correspond to object boundaries. Detecting edges helps simplify visual data and is a
          crucial step in computer vision tasks like segmentation, recognition, and tracking.
        </p>

        <p>
          Think of edges as the outlines of objects. For example, when you look at a photo of a house, edge detection
          highlights the roof lines, windows, and doors by finding where pixel intensity changes abruptly.
        </p>

        <h2 className="text-xl font-semibold mt-6">Common Techniques</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Sobel Operator</strong> – detects edges using gradient filters.</li>
          <li><strong>Prewitt Operator</strong> – similar to Sobel, useful for vertical/horizontal edges.</li>
          <li><strong>Canny Detector</strong> – a multi‑stage method that produces clean, thin edges.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Example</h2>
        <p>
          Imagine a black square on a white background. Edge detection algorithms will highlight the boundary where the
          black pixels meet the white pixels, showing the outline of the square.
        </p>
      </section>

      {/* Back to Level 3 button */}
      <Link href="/planet/level3" className="btn btn-outline mt-8">
        ⬅ Back to Level 3
      </Link>
    </main>
  )
}

