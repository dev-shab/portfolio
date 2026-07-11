import skillsData from '@/data/skills.json';
import type { SkillCategory } from '@/data/types';

const categories = skillsData as SkillCategory[];

function fileNameFor(category: string) {
  return `${category
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')}.ts`;
}

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-16">
      <p className="font-mono text-sm text-accent">$ ls ./skills</p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-mono font-semibold text-text">
        Skills
      </h2>
      <p className="mt-2 text-muted max-w-2xl">
        Grouped the way I'd organize a real codebase.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <p className="font-mono text-xs text-muted">
              # {fileNameFor(cat.category)}
            </p>
            <h3 className="mt-1 font-mono text-sm text-text">{cat.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-accent/25 bg-accent/[0.08] px-2.5 py-1 font-mono text-[11px] text-text/90 hover:border-accent hover:bg-accent/[0.15] hover:text-accent transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
