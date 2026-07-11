import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ExperienceEntry } from '@/data/types';

interface Props {
  entry: ExperienceEntry;
  isLast: boolean;
}

export function ExperienceItem({ entry, isLast }: Props) {
  return (
    <div className="relative pl-8 sm:pl-10">
      {/* graph rail */}
      <span
        aria-hidden
        className={`absolute left-[7px] sm:left-[9px] top-2 w-px bg-border ${
          isLast ? 'h-6' : 'h-full'
        }`}
      />
      <span
        aria-hidden
        className={`absolute left-0 sm:left-0.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
          entry.current
            ? 'border-accent bg-accent/20'
            : 'border-border bg-surface'
        }`}
      />

      <div className="pb-10 sm:pb-12">
        <p className="font-mono text-xs sm:text-sm text-accent">
          commit {entry.hash}
          {entry.current && (
            <span className="ml-2 text-muted">(HEAD -&gt; main)</span>
          )}
        </p>
        <p className="font-mono text-xs text-muted mt-1">
          Company: {entry.company}
          {entry.client ? ` × ${entry.client}` : ''}
        </p>
        <p className="font-mono text-xs text-muted">
          Date: {entry.startDate} – {entry.endDate}
        </p>

        <div className="mt-3 pl-3 sm:pl-4 border-l-2 border-border/60">
          <h3 className="font-mono text-base sm:text-lg text-text">
            {entry.role} <span className="text-muted">@ {entry.company}</span>
          </h3>
          <p className="mt-2 text-sm sm:text-base text-text/80 leading-relaxed max-w-2xl">
            {entry.summary}
          </p>
        </div>

        <p className="mt-3 font-mono text-xs text-muted">
          {entry.achievements.length} files changed,{' '}
          <span className="text-diffAdd">
            +{entry.achievements.length} insertions
          </span>
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {entry.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-accent/25 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11px] text-text/90"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to={`/experience/${entry.slug}`}
          className="mt-4 inline-flex items-center gap-1 font-mono text-sm text-cyan hover:underline underline-offset-4"
        >
          view diff <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
