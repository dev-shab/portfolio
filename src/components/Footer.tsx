import profile from '@/data/profile.json';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 font-mono text-sm text-muted">
        <p>
          <span className="text-accent/70">$</span> echo "thanks for stopping
          by"
        </p>
        <p className="mt-1 text-muted/70">thanks for stopping by</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted/60">
          <span>
            © {year} {profile.name}
          </span>
          <span>built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
