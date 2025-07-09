// /src/web/components/AuthLayout.tsx
import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fafbfc",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          padding: 32,
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          background: "#fff",
        }}
      >
        {children}
      </div>
    </div>
  );
}
