// /src/web/app/login/page.tsx
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign in to PromptForge</h1>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-4 py-3 font-medium hover:bg-gray-50"
          onClick={() => window.location.href = "/api/auth/google"}
        >
          <img src="/google.svg" alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-4 py-3 font-medium hover:bg-gray-50"
          onClick={() => window.location.href = "/api/auth/facebook"}
        >
          <img src="/facebook.svg" alt="Facebook" className="h-5 w-5" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}
