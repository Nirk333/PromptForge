// /src/web/app/head.tsx

export default function Head() {
  return (
    <>
      <title>Queryve — AI Prompt Engineering Evolved</title>
      <meta name="description" content="Queryve: The all-in-one platform for teams and creators to design, manage, and deploy AI prompts at scale. Build, collaborate, and launch your next-gen AI workflows." />
      <meta name="keywords" content="AI, prompt engineering, Queryve, LLM, generative AI, automation, workflow, SaaS, prompt library, collaboration" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Queryve — AI Prompt Engineering Evolved" />
      <meta property="og:description" content="Powerful platform for building, managing, and scaling AI prompt workflows. Build. Collaborate. Deploy. Evolve." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://queryve.com" />
      <meta property="og:image" content="/og-image.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Queryve — AI Prompt Engineering Evolved" />
      <meta name="twitter:description" content="Your AI prompt command center. Build, collaborate, and launch AI workflows." />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
