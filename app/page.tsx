"use client";

import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col items-center mb-8">
          <Logo width={180} height={38} />
          <h1 className="text-4xl font-bold mb-2">Queryve</h1>
          <p className="text-xl font-medium text-gray-700 mb-4">
            AI Prompt Engineering Evolved
          </p>
          <p className="text-gray-600 text-center">
            Build, organize, and deploy world-class AI prompt workflows.
            Collaborate in real-time. Scale your automation.
            <br />
            Queryve is your command center for generative AI.
          </p>
        </div>

        <section className="grid gap-6 mb-10">
          <Feature
            emoji="📚"
            title="Prompt Library"
            desc="Store, organize, and version every prompt. Your knowledge base for generative AI, always up to date."
          />
          <Feature
            emoji="🤝"
            title="Real-Time Collaboration"
            desc="Invite your team, share ideas, and edit together. No more lost prompts or conflicting versions."
          />
          <Feature
            emoji="⚡"
            title="Workflow Automation"
            desc="Chain prompts, set triggers, and deploy to any AI model. Build scalable AI workflows without code."
          />
          <Feature
            emoji="🔒"
            title="Secure & Private"
            desc="Your data, your rules. End-to-end encrypted, fully GDPR-compliant. Queryve is built for trust."
          />
          <Feature
            emoji="🚀"
            title="Early Access"
            desc="Be first in line for Queryve! Drop your email and we’ll ping you when we launch."
          />
        </section>

        <form className="flex flex-col sm:flex-row items-center gap-2 justify-center">
          <input
            className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto"
            type="email"
            placeholder="you@email.com"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition font-semibold"
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
