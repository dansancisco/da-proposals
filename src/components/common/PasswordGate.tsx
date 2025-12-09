"use client";

import { useState, useEffect } from "react";
import type { Proposal } from "@/types/proposal";

interface PasswordGateProps {
  children: React.ReactNode;
  proposal: Proposal;
}

export function PasswordGate({ children, proposal }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const isAuth = sessionStorage.getItem("proposal_auth") === "true";
    setAuthenticated(isAuth);
    setChecking(false);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    if (password === process.env.NEXT_PUBLIC_PROPOSAL_PASSWORD) {
      sessionStorage.setItem("proposal_auth", "true");
      setAuthenticated(true);

      // Notify on first view only
      const viewedKey = `viewed_${proposal.slug}`;
      if (!sessionStorage.getItem(viewedKey)) {
        try {
          await fetch("/api/notify-view", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              clientName: proposal.clientName,
              contactName: proposal.contactName,
              slug: proposal.slug,
            }),
          });
          sessionStorage.setItem(viewedKey, "true");
        } catch (err) {
          console.error("Failed to send view notification:", err);
        }
      }
    } else {
      setError(true);
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white font-mono text-sm">Loading...</div>
      </div>
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 md:p-12 border-4 border-black w-full max-w-md"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-4 bg-signal" />
          <span className="font-mono text-xs uppercase tracking-widest">
            Digital Assembly
          </span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
          {proposal.clientName}
        </h2>
        <p className="text-neutral-500 mb-8">
          Enter the password to view your proposal.
        </p>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block font-mono text-xs uppercase tracking-widest mb-2"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-black p-4 w-full font-mono text-sm focus:outline-none focus:border-signal"
            placeholder="Enter password"
            autoFocus
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">Incorrect password</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-signal text-white px-6 py-4 w-full uppercase font-mono text-xs tracking-widest font-bold hover:bg-black transition-colors"
        >
          View Proposal
        </button>
      </form>
    </div>
  );
}
