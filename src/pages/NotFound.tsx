import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFound() {
  useDocumentTitle('404 - Shabreesh Nair');
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-mono text-accent text-sm">$ cd ./page-you-wanted</p>
      <p className="font-mono text-muted text-sm mt-1">
        bash: no such file or directory
      </p>
      <h1 className="mt-8 text-4xl font-mono text-text">404</h1>
      <Link
        to="/"
        className="mt-6 inline-block font-mono text-sm text-accent hover:underline underline-offset-4"
      >
        $ cd ~
      </Link>
    </div>
  );
}
