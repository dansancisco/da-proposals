import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white p-8 md:p-12 border-4 border-black w-full max-w-md text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-4 h-4 bg-signal" />
          <span className="font-mono text-xs uppercase tracking-widest">
            Digital Assembly
          </span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
          Proposal Not Found
        </h2>

        <p className="text-neutral-500 mb-8">
          This proposal doesn&apos;t exist or the link may be incorrect.
        </p>

        <Link
          href="https://digitalassembly.agency/contact"
          className="inline-block bg-signal text-white px-8 py-4 uppercase font-mono text-xs tracking-widest font-bold hover:bg-black transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
