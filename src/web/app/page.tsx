// /src/web/app/page.tsx

import Image from "next/image";
import Link from "next/link";

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
    </main>
  );
}
