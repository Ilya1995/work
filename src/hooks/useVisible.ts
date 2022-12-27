import { RefCallback, useEffect, useState } from 'react';

export type ObserverOptionsType = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export const useVisible = (
  options: ObserverOptionsType
): [RefCallback<HTMLElement | null>, boolean] => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [Observer, setObserver] = useState<
    typeof window.IntersectionObserver | undefined
  >(() => window.IntersectionObserver);
  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') {
      // @ts-ignore
      import('intersection-observer').then(() => {
        setObserver(() => window.IntersectionObserver);
      });
    }
  }, []);

  useEffect(() => {
    if (element && Observer) {
      const handleObserve = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setInView(entry.isIntersecting);
        if (options.triggerOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      };
      const observer = new Observer(handleObserve, options);
      observer.observe(element);
      return () => {
        observer.disconnect();
      };
    }
  }, [element, options, Observer]);

  return [setElement, inView];
};
