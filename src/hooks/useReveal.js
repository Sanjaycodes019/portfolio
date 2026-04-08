import { useEffect } from 'react';

export function useReveal(sectionRef, options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -10% 0px' } = options;

  useEffect(() => {
    const rootEl = sectionRef?.current;
    if (!rootEl) return;

    const elements = rootEl.querySelectorAll('.reveal');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionRef, threshold, rootMargin]);
}


