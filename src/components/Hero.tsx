import { Terminal } from './Terminal';
import { Button } from './ui/button';
import profile from '@/data/profile.json';

const outputLines = [
  `name     : ${profile.name}`,
  `role     : ${profile.role}`,
  `based_in : ${profile.location}`,
  `exp      : ${profile.yearsExperience}+ years`,
  `stack    : React · TypeScript · Node.js · GraphQL · AWS`,
  `status   : open to work`,
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  return (
    <section id="about" className="pt-12 sm:pt-20 pb-16 sm:pb-24 scroll-mt-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p className="font-mono text-sm text-accent">$ whoami</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-mono font-semibold text-text leading-tight text-balance">
            {profile.name}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-4 text-text/80 leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollTo('experience')}>
              View experience
            </Button>
            <Button variant="outline" onClick={() => scrollTo('contact')}>
              Get in touch
            </Button>
          </div>
        </div>

        <Terminal
          command="whoami --verbose"
          output={outputLines}
          title="shabreesh@portfolio — bash"
        />
      </div>
    </section>
  );
}
