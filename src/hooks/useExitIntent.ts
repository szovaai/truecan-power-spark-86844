import { useEffect, useState } from 'react';

interface UseExitIntentOptions {
  onExitIntent: () => void;
  enabled?: boolean;
  delay?: number;
}

export const useExitIntent = ({ 
  onExitIntent, 
  enabled = true, 
  delay = 3000 
}: UseExitIntentOptions) => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!enabled || hasTriggered) return;

    // Delay before activating exit intent detection
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(readyTimer);
  }, [enabled, hasTriggered, delay]);

  useEffect(() => {
    if (!enabled || !isReady || hasTriggered) return;

    // Desktop: mouse movement to top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 50 && e.movementY < -5) {
        setHasTriggered(true);
        onExitIntent();
      }
    };

    // Mobile: scroll up gesture detection
    let lastScrollY = window.scrollY;
    let scrollUpCount = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < lastScrollY;
      
      if (scrolledUp && currentScrollY > 100) {
        scrollUpCount++;
        if (scrollUpCount > 3) {
          setHasTriggered(true);
          onExitIntent();
        }
      } else {
        scrollUpCount = 0;
      }
      
      lastScrollY = currentScrollY;
    };

    // Mobile: inactivity detection
    let inactivityTimer: NodeJS.Timeout;
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (window.innerWidth < 768) {
          setHasTriggered(true);
          onExitIntent();
        }
      }, 30000); // 30 seconds
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('touchstart', resetInactivityTimer);
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('touchstart', resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, [enabled, isReady, hasTriggered, onExitIntent]);

  return hasTriggered;
};
