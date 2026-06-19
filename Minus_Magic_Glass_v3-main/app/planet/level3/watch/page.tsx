import Link from 'next/link'

export default function WatchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <Link
        href="/planet/level3"
        className="absolute top-6 left-4 text-sm text-muted-foreground hover:text-foreground"
      >
        ← Back to Level 3
      </Link>

      <h1 className="text-3xl font-bold mb-6">Level 3 - Edge Detection</h1>

      <video
        controls
        className="w-full max-w-3xl rounded-xl shadow-lg"
      >
        <source src="/videos/MINU Cartoon Video 3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  )
}