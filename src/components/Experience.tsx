import experience from '@/data/experience.json';
import type { ExperienceEntry } from '@/data/types';
import { ExperienceItem } from './ExperienceItem';

const entries = experience as ExperienceEntry[];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 scroll-mt-16">
      <p className="font-mono text-sm text-accent">$ git log --stat</p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-mono font-semibold text-text">
        Experience
      </h2>
      <p className="mt-2 text-muted max-w-2xl">
        Every role, as a commit. Click into any of them for the full diff.
      </p>

      <div className="mt-10">
        {entries.map((entry, i) => (
          <ExperienceItem
            key={entry.slug}
            entry={entry}
            isLast={i === entries.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
