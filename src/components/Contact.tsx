import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Check,
  Copy,
} from 'lucide-react';
import profile from '@/data/profile.json';
import { Button } from './ui/button';
import { useCopyToClipboard } from '@/lib/useCopyToClipboard';

const rows = [
  {
    icon: Mail,
    label: 'email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    copyable: true,
  },
  {
    icon: Phone,
    label: 'phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'location',
    value: profile.location,
    href: undefined,
    copyable: false,
  },
  {
    icon: Linkedin,
    label: 'linkedin',
    value: 'shabreesh-sivaraj-nair',
    href: profile.links.linkedin,
    copyable: false,
  },
  {
    icon: Github,
    label: 'github',
    value: 'dev-shab',
    href: profile.links.github,
    copyable: false,
  },
];

export function Contact() {
  const { copiedLabel, copy } = useCopyToClipboard();

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-16">
      <p className="font-mono text-sm text-accent">$ ./contact.sh</p>
      <h2 className="mt-3 text-2xl sm:text-3xl font-mono font-semibold text-text">
        Get in touch
      </h2>
      <p className="mt-2 text-muted max-w-2xl">
        Open to Senior / Staff Full Stack roles.
      </p>

      <div className="mt-8 rounded-lg border border-border bg-surface p-5 sm:p-6 max-w-xl">
        <dl className="space-y-4 font-mono text-sm">
          {rows.map(({ icon: Icon, label, value, href, copyable }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon size={16} className="shrink-0 text-accent" />
              <dt className="w-20 shrink-0 text-cyan">{label}</dt>
              {href ? (
                <dd className="truncate flex items-center gap-1" title={value}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="text-text hover:text-accent transition-colors"
                  >
                    {value}
                  </a>
                  {copyable && (
                    <button
                      type="button"
                      onClick={() => copy(value, label)}
                      aria-label={`Copy ${label}`}
                      className="shrink-0 text-muted hover:text-accent transition-colors"
                    >
                      {copiedLabel === label ? (
                        <Check size={14} className="text-accent" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  )}
                </dd>
              ) : (
                <dd className="text-text truncate" title={value}>
                  {value}
                </dd>
              )}
            </div>
          ))}
        </dl>

        <Button
          onClick={() => (window.location.href = `mailto:${profile.email}`)}
          className="mt-6 w-full sm:w-auto"
        >
          Say hello
        </Button>
      </div>
    </section>
  );
}
