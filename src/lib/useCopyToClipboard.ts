import { useCallback, useState } from 'react';

export function useCopyToClipboard() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const copy = useCallback((text: string, label: string) => {
    const markCopied = () => {
      setCopiedLabel(label);
      window.setTimeout(() => {
        setCopiedLabel((current) => (current === label ? null : current));
      }, 1500);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(markCopied)
        .catch((err) => {
          console.error('Failed to copy:', err);
        });
    } else {
      // Fallback for non-secure contexts / older browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        markCopied();
      } catch (err) {
        console.error('Fallback copy failed:', err);
      } finally {
        document.body.removeChild(textarea);
      }
    }
  }, []);

  return { copiedLabel, copy };
}
