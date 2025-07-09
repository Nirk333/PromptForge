// /src/web/app/page.tsx

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    icon: "🗃️",
    title: "Prompt Library",
    desc: "Store, organize, and version every prompt. Your knowledge base for generative AI, always up to date.",
  },
  {
    icon: "🤝",
    title: "Real-Time Collaboration",
    desc: "Invite your team, share ideas, and edit together. No more lost prompts or conflicting versions.",
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    desc: "Chain prompts, set triggers, and deploy to any AI model. Build scalable AI workflows without code.",
  },
  {
    icon: "🔒",
    title: "Secure & Private",
    desc: "Your data, your rules. End-to-end encrypted, fully GDPR-compliant. Queryve is built for trust.",
  },
];

export default function Home() {
  // Early access form state
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    // Simple email regex validation
    if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) {
      setError("Please enter a valid email.");
      return;
    }
    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fafbfc] px-6">
      {/* Logo */}
      <Image
        src="/logo-queryve.svg"
        alt="Queryve Logo"
        width={72}
        height={72}
        className="mb-6"
        priority
      />
      {/* Tagline */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
        Queryve
      </h1>
      <p className="text-xl text-gray-600 mb-6 text-center font-medium">
        AI Prompt Engineering Evolved
      </p>
      {/* Value prop */}
      <p className="text-md text-gray-500 mb-8 max-w-lg text-center">
        Build, organize, and deploy world-class AI prompt workflows. Collaborate in real-time. Scale your automation. Queryve is your command center for generative AI.
      </p>
      {/* CTA */}
      <Link
        href="/login"
        className="inline-block bg-black text-white rounded-full px-8 py-3 font-semibold text-base shadow hover:bg-gray-800 transition"
      >
        Get Started
      </Link>
      {/* Subtle flair */}
      <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-br from-yellow-100 to-transparent pointer-events-none -z-10" />

      {/* Features Section */}
      <section className="w-full max-w-5xl mx-auto mt-20 mb-10 px-2">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Why Queryve?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Early Access Section */}
      <section className="w-full max-w-xl mx-auto mb-24 px-4">
        <div className="bg-white/80 rounded-2xl shadow p-8 flex flex-col items-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
            🚀 Early Access
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Be first in line for Queryve! Drop your email and we’ll ping you when we launch.
          </p>
          <form className="w-full flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              disabled={submitted}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
            />
            <button
              type="submit"
              disabled={submitted}
              className="bg-black text-white rounded-lg px-6 py-3 font-semibold text-base transition hover:bg-gray-800 disabled:opacity-60"
            >
              {submitted ? "Added!" : "Request Early Access"}
            </button>
          </form>
          {error && (
            <p className="mt-4 text-red-500 text-sm">{error}</p>
          )}
          {submitted && (
            <p className="mt-4 text-green-600 text-sm">
              You’re on the list! We’ll let you know when Queryve goes live.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
