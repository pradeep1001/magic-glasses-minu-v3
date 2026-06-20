"use client"

export default function Level4Watch() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-6">
      <h1 className="text-3xl font-bold mb-6">Level 4 – Watch</h1>

      <section className="max-w-2xl text-left space-y-4">
        <p>
          In this activity, you’ll see <strong>pairs of images side by side</strong>. 
          Each pair has a subtle difference — it could be a change in shape, color, or texture.
        </p>

        <p>
          Watching examples helps you train your eyes to notice small variations. 
          This skill is important in computer vision tasks like <strong>anomaly detection</strong> 
          or <strong>quality inspection</strong>.
        </p>
      </section>

      {/* 🎥 Embed video lesson */}
      <div className="w-full max-w-lg aspect-video bg-gray-800 flex items-center justify-center rounded-lg mt-6">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // replace with your actual video link
          title="Level 4 Video Lesson"
          className="w-full h-full rounded-lg"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Back to Level 4 hub */}
      <a href="/planet/level4" className="btn btn-outline mt-8">
        ⬅ Back to Level 4
      </a>
    </main>
  )
}
