import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  User,
  Briefcase,
  Code2,
  Send,
} from 'lucide-react';
import profile from '@/data/profile.json';

const navItems = [
  { label: 'about', id: 'about', icon: User },
  { label: 'experience', id: 'experience', icon: Briefcase },
  { label: 'skills', id: 'skills', icon: Code2 },
  { label: 'contact', id: 'contact', icon: Send },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-4">
        <Link
          to="/"
          state={{ scrollTo: 'about' }}
          onClick={() => setOpen(false)}
          className="font-mono text-sm text-text hover:text-accent transition-colors"
        >
          <span className="text-muted">~/</span>
          <span>shabreesh</span>
          <span className="text-accent animate-blink">_</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-6 font-mono text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={'/'}
                state={{ scrollTo: item.id }}
                className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors"
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent transition-colors hidden min-[380px]:inline-block"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent transition-colors hidden min-[380px]:inline-block"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted hover:text-accent transition-colors hidden min-[380px]:inline-block"
          >
            <Mail size={18} />
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden text-muted hover:text-accent transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="sm:hidden border-t border-border/60 bg-bg/95 backdrop-blur px-4 py-4 flex flex-col gap-4 font-mono text-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                to={'/'}
                state={{ scrollTo: item.id }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-muted hover:text-accent transition-colors"
              >
                <Icon size={14} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
