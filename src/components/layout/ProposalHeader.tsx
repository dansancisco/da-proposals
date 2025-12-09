import Link from "next/link";

interface ProposalHeaderProps {
  contactName: string;
}

export function ProposalHeader({ contactName }: ProposalHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-shell mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link
          href="https://digitalassembly.agency"
          className="flex items-center gap-3"
        >
          <div className="w-4 h-4 bg-signal" />
          <span className="font-mono text-xs uppercase tracking-widest">
            Digital Assembly
          </span>
        </Link>

        <span className="font-mono text-xs text-neutral-500">
          Prepared for: {contactName}
        </span>
      </div>
    </header>
  );
}
