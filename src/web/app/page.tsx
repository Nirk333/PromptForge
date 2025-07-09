// /src/web/app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#fafbfc] px-6">
      {/* Logo (swap src if you have a real logo) */}
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
    </main>
  );
}
