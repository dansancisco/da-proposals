export function ProposalFooter() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-shell mx-auto px-4 md:px-8 text-center">
        <p className="font-display text-2xl md:text-3xl mb-8">
          Thank you for your consideration.
        </p>

        <div className="flex items-center justify-center gap-3">
          <div className="w-4 h-4 bg-signal" />
          <span className="font-mono text-sm uppercase tracking-widest">
            Digital Assembly
          </span>
        </div>
      </div>
    </footer>
  );
}
