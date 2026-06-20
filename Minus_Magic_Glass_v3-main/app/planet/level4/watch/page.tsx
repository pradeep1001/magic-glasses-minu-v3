"use client"

export default function Level4Watch() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Watch</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Here you can watch a short video lesson for Level 4.
      </p>
      {/* Embed video or placeholder */}
      <div className="w-full max-w-lg aspect-video bg-gray-800 flex items-center justify-center rounded-lg">
        <p className="text-gray-400">🎥 Video placeholder</p>
      </div>
    </main>
  )
}
