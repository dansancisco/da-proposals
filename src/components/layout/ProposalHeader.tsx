import Link from "next/link";

export function ProposalHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="https://digitalassembly.agency"
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
        >
          <div className="h-4 w-4 bg-signal" />
          <span className="font-mono text-[10px] uppercase tracking-tight">
            Digital Assembly
          </span>
        </Link>

        <div className="hidden items-center gap-2 border border-black px-3 py-1 font-mono text-[10px] uppercase md:flex">
          <div className="h-2 w-2 bg-signal" />
          Proposal
        </div>
      </div>
    </header>
  );
}
