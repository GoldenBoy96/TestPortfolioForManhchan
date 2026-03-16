import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  minScale?: number;
  maxDistance?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { minScale = 0.8, maxDistance = 400 } = options;
  const ref = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(minScale);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      
      // Distance from viewport center to element center
      const distance = Math.abs(elementCenter - viewportCenter);
      
      // Calculate scale: 1 when near center, minScale when far
      const calculatedScale = Math.max(minScale, 1 - (distance / maxDistance) * (1 - minScale));
      setScale(calculatedScale);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [minScale, maxDistance]);

  // Apply the scale transform to the element
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `scale(${scale})`;
      ref.current.style.transition = 'transform 0.1s ease-out';
      ref.current.style.transformOrigin = 'center';
    }
  }, [scale]);

  return ref;
};
