import Link from "next/link";

export function ProposalHeader() {
  return (
    <header className="border-b border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        <Link
          href="https://digitalassembly.agency"
          className="group flex items-center gap-3"
        >
          <div className="h-3 w-3 bg-signal transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-display text-base font-bold lowercase tracking-tighter">
            digital assembly
          </span>
        </Link>
      </div>
    </header>
  );
}
