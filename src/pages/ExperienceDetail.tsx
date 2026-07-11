import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import experience from '@/data/experience.json';
import type { ExperienceEntry } from '@/data/types';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

const entries = experience as ExperienceEntry[];

export function ExperienceDetail() {
  const { slug } = useParams();
  const index = entries.findIndex((e) => e.slug === slug);
  const entry = entries[index];

  useDocumentTitle(
    entry ? `${entry.company} - Shabreesh Nair` : 'Not found - Shabreesh Nair'
  );

  if (!entry) return <Navigate to="/404" replace />;

  const olderEntry = entries[index + 1];
  const newerEntry = entries[index - 1];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <Link
        to="/"
        state={{ scrollTo: 'experience' }}
        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-sm text-text hover:border-accent hover:text-accent transition-colors"
      >
        <ArrowLeft size={16} /> back to experience
      </Link>

      <p className="mt-8 font-mono text-xs sm:text-sm text-accent">
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

      <h1 className="mt-6 font-mono text-xl sm:text-2xl text-text">
        {entry.role} <span className="text-muted">@ {entry.company}</span>
      </h1>
      <p className="mt-4 text-text/90 leading-relaxed">{entry.summary}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {entry.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-accent/25 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11px] text-text/90"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-muted">
        {entry.achievements.length} files changed,{' '}
        <span className="text-diffAdd">
          +{entry.achievements.length} insertions
        </span>
      </p>

      <ul className="mt-4 space-y-2 font-mono text-xs sm:text-sm rounded-md border border-border bg-surface p-4 sm:p-6">
        {entry.achievements.map((a, i) => (
          <li key={i} className="text-diffAdd/90 leading-relaxed">
            + {a}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-border/60 pt-6 font-mono text-sm">
        {olderEntry ? (
          <Link
            to={`/experience/${olderEntry.slug}`}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-text hover:border-accent hover:text-accent transition-colors"
          >
            <ArrowLeft size={14} /> {olderEntry.hash} · {olderEntry.company}
          </Link>
        ) : (
          <span />
        )}
        {newerEntry ? (
          <Link
            to={`/experience/${newerEntry.slug}`}
            className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-text hover:border-accent hover:text-accent transition-colors sm:ml-auto"
          >
            {newerEntry.hash} · {newerEntry.company} <ArrowRight size={14} />
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
