import { useEffect, useState, useRef } from 'react';

interface ScrollAnimationOptions {
  speed?: number;
  threshold?: number;
}

export const useScrollAnimation = <T extends HTMLElement = HTMLElement>(options: ScrollAnimationOptions = {}) => {
  const { speed = 0.15, threshold = 0.1 } = options;
  const [transform, setTransform] = useState(0);
  const elementRef = useRef<T>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        // Calculate when element enters viewport
        const elementTop = rect.top;
        const elementBottom = rect.bottom;
        
        // Only animate when element is in viewport
        if (elementBottom > 0 && elementTop < windowHeight) {
          // Calculate scroll progress (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, 
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          ));
          
          // Apply speed multiplier and threshold
          const translateY = (scrollProgress - 0.5) * speed * 100;
          
          setTransform(translateY);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, threshold]);

  return { transform, elementRef };
};
