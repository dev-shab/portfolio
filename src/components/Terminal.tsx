import { useEffect, useState } from 'react';

interface TerminalProps {
  command: string;
  output: string[];
  title?: string;
}

export function Terminal({ command, output, title = 'bash' }: TerminalProps) {
  const [typed, setTyped] = useState('');
  const [visibleLines, setVisibleLines] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      setTyped(command);
      setVisibleLines(output.length);
      setTypingDone(true);
      return;
    }

    let charIndex = 0;
    const typeTimer = setInterval(() => {
      charIndex++;
      setTyped(command.slice(0, charIndex));
      if (charIndex >= command.length) {
        clearInterval(typeTimer);
        setTypingDone(true);

        let lineIndex = 0;
        const lineTimer = setInterval(() => {
          lineIndex++;
          setVisibleLines(lineIndex);
          if (lineIndex >= output.length) clearInterval(lineTimer);
        }, 160);
      }
    }, 45);

    return () => clearInterval(typeTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full rounded-lg border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface2">
        <span className="h-3 w-3 rounded-full bg-diffRemove/70" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-diffAdd/70" />
        <span className="ml-2 truncate font-mono text-xs text-muted">
          {title}
        </span>
      </div>

      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        <div className="flex flex-wrap items-center">
          <span className="mr-2 text-accent">➜</span>
          <span className="mr-2 text-cyan">~</span>
          <span className="text-text">{typed}</span>
          <span
            aria-hidden
            className="ml-0.5 inline-block h-4 w-2 bg-accent animate-blink"
          />
        </div>

        {visibleLines > 0 && (
          <div className="mt-3 space-y-1 text-muted whitespace-pre">
            {output.slice(0, visibleLines).map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        )}

        {typingDone && visibleLines >= output.length && (
          <p className="mt-3 text-muted/50 text-xs">Process finished. ✓</p>
        )}
      </div>
    </div>
  );
}
