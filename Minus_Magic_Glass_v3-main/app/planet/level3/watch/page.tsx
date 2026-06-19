"use client"
import Link from "next/link"

export default function WatchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 3 – Watch: Edge Detection</h1>

      <section className="max-w-2xl text-left space-y-4">
        <p>
          In this section, you can watch how <strong>edge detection</strong> works in practice. 
          Imagine an image of a simple shape, like a square. Edge detection highlights the 
          boundaries where pixel intensity changes, making the outline of the square visible.
        </p>

        <p>
          Common filters like the <strong>Sobel operator</strong> or the <strong>Canny detector</strong> 
          are applied to images to reveal these outlines. This helps computers understand 
          where objects begin and end.
        </p>

        <p>
          A demo video or animation can be embedded here to show edges being detected 
          step by step — from the original image to the processed edge map.
        </p>
      </section>

      {/* Back to Level 3 button */}
      <Link href="/planet/level3" className="btn btn-outline mt-8">
        ⬅ Back to Level 3
      </Link>
    </main>
  )
}
export default function WatchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Level 3 – Watch</h1>
      <video
        src="/Intro.mp4"
        controls
        width="640"
        height="360"
        className="rounded-lg shadow-lg"
      />
    </main>
  )
}
