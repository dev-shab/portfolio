import { Hero } from '@/components/Hero';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { useDocumentTitle } from '@/lib/useDocumentTitle';
import { useScrollToTarget } from '@/lib/useScrollToTarget';

export function Home() {
  useDocumentTitle('Shabreesh Nair — Senior Full Stack Engineer');
  useScrollToTarget();
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
