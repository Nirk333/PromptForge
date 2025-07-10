"use client";

import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4 py-12">
  <div className="max-w-2xl w-full">
    <div className="flex flex-col items-center mb-12">
      <Logo width={180} height={38} />
        <h1 className="text-5xl font-extrabold mb-4 mt-4 text-gray-900 tracking-tight">
          Queryve
        </h1>
      <p className="text-2xl font-medium text-gray-700 mb-4 text-center">
        AI Prompt Engineering Evolved
    </p>
        <p className="text-gray-600 text-center mb-4">
          Build, organize, and deploy world-class AI prompt workflows.
          Collaborate in real-time. Scale your automation.<br />
          Queryve is your command center for generative AI.
    </p>
    </div>

    <section className="grid gap-8 mb-12">
      {/* Feature cards */}
    </section>

    <form className="flex flex-col sm:flex-row items-center gap-2 justify-center">
      <input
        className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto"
        type="email"
        placeholder="you@email.com"
      />
        <button
          type="submit"
          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-lg shadow hover:from-gray-800 hover:to-black transition font-bold text-lg"
        >
      Request Early Access
        </button>

    </form>
  </div>
</main>

  );
}

function Feature({
  emoji,
  title,
  desc,
}: {
  emoji: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-2xl">{emoji}</span>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}
