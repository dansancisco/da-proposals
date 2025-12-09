import Link from "next/link";

export function ProposalFooter() {
  return (
    <footer className="border-t border-black bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 font-display text-3xl font-bold uppercase md:text-4xl">
            Thank you for your consideration.
          </p>
          <p className="font-mono text-sm text-neutral-400">
            We look forward to working together.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 md:flex-row">
          <Link
            href="https://digitalassembly.agency"
            className="flex items-center gap-3 transition-opacity hover:opacity-70"
          >
            <div className="h-4 w-4 bg-signal" />
            <span className="font-mono text-[10px] uppercase tracking-tight">
              Digital Assembly
            </span>
          </Link>

          <div className="flex items-center gap-6 font-mono text-[10px] uppercase text-neutral-500">
            <a
              href="https://digitalassembly.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-signal"
            >
              Website
            </a>
            <a
              href="mailto:hello@digitalassembly.agency"
              className="transition-colors hover:text-signal"
            >
              Contact
            </a>
          </div>

          <div className="font-mono text-[10px] text-neutral-500">
            © {new Date().getFullYear()} Digital Assembly
          </div>
        </div>
      </div>
    </footer>
  );
}
