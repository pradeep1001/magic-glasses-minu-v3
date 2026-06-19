import Link from 'next/link'

export default function Level2WatchPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <Link href="/planet/level2" className="absolute top-6 left-4 text-sm text-muted-foreground hover:text-foreground">
        ← Back to Level 2
      </Link>
      <h1 className="text-3xl font-bold mb-6">Level 2 - Watch</h1>
      <iframe
        src="https://drive.google.com/file/d/1CfkS048BD3lpBAV6lywvG5ppxAiIK9ZQ/preview"
        className="w-full max-w-3xl rounded-xl shadow-lg"
        style={{ height: '480px' }}
        allow="autoplay"
      />
    </main>
  )
}
