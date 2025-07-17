"use client";

import Logo from "@/components/Logo";
import FeatureCard from "@/components/FeatureCard";
import { BookOpen, Users, Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: <BookOpen size={30} />,
    title: "Prompt Library",
    description:
      "Store, organize, and version every prompt. Your knowledge base for generative AI, always up to date.",
  },
  {
    icon: <Users size={30} />,
    title: "Real-Time Collaboration",
    description:
      "Invite your team, share ideas, and edit together. No more lost prompts or conflicting versions.",
  },
  {
    icon: <Zap size={30} />,
    title: "Workflow Automation",
    description:
      "Chain prompts, set triggers, and deploy to any AI model. Build scalable AI workflows without code.",
  },
  {
    icon: <Shield size={30} />,
    title: "Secure & Private",
    description:
      "Your data, your rules. End-to-end encrypted, fully GDPR-compliant. Queryve is built for trust.",
  },
  {
    icon: <Rocket size={30} />,
    title: "Early Access",
    description:
      "Be first in line for Queryve! Drop your email and we’ll ping you when we launch.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col items-center mb-14">
          <Logo width={900} height={190} />
          <h1 className="text-5xl font-extrabold mb-1 mt-4 text-gray-900 tracking-tight">
          Queryve
          </h1>
          {/* --- HERO THREE LINES, BOLD, MONTSERRAT --- */}
          <div
            className="text-center mb-8 font-bold text-xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <p className="mb-1">
              Build, organize, and deploy world-class AI prompt workflows.
            </p>
            <p className="mb-1">
              Collaborate in real-time. Scale your automation.
            </p>
            <p>
              Queryve is your command center for generative AI.
            </p>
          </div>
        </div>

        <section className="flex justify-center w-full mb-16">
  <div className="flex flex-col max-w-xl w-auto">
    {features.map((feature, i) => (
      <div
        key={i}
        className="flex flex-col items-start pb-16 mb-16 last:mb-0 last:pb-0"
        aria-label={`Feature: ${feature.title}`}
      >
        <div className="flex items-center mb-4">
          <span className="text-2xl">{feature.icon}</span>
          <span
            className="ml-14 font-bold text-lg text-gray-900"
            style={{ fontWeight: 700 }}
          >
            {feature.title}
          </span>
        </div>
        <div className="ml-16 text-gray-700 text-base leading-relaxed">
          {feature.description}
        </div>
      </div>
    ))}
  </div>
</section>

        <form className="flex flex-col sm:flex-row items-center gap-2 justify-center">
          <input
            className="px-4 py-2 rounded border border-gray-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-900 transition"
            type="email"
            placeholder="you@email.com"
            aria-label="Your email address"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-3 rounded-lg shadow hover:from-gray-800 hover:to-black transition font-bold text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            aria-label="Request Early Access"
          >
            Request Early Access
          </button>
        </form>

      </div>
    </main>
  );
}
