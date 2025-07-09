// /src/web/app/login/page.tsx
"use client";
import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleOAuth = async (provider: "google" | "facebook") => {
    setLoading(true);
    setError(null);
    try {
      window.location.href = `/api/auth/${provider}`;
    } catch (err) {
      setError("Whoops. Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign in to PromptForge</h1>
        {error && (
          <div className="text-red-500 text-center mb-2">{error}</div>
        )}
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-4 py-3 font-medium hover:bg-gray-50 disabled:opacity-50"
          onClick={() => handleOAuth("google")}
          disabled={loading}
        >
          <img src="/google.svg" alt="Google" className="h-5 w-5" />
          {loading ? "Redirecting..." : "Continue with Google"}
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-4 py-3 font-medium hover:bg-gray-50 disabled:opacity-50"
          onClick={() => handleOAuth("facebook")}
          disabled={loading}
        >
          <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
          {loading ? "Redirecting..." : "Continue with Facebook"}
        </button>
      </div>
    </div>
  );
}
