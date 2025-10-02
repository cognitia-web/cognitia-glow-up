import { useState } from 'react';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggleButton = () => {
  const [isLight, setIsLight] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const handleToggle = () => {
    setIsRotating(true);

    // At 55% of rotation (330ms), swap icon and theme
    setTimeout(() => {
      setIsLight(!isLight);
      document.documentElement.classList.toggle('light');
    }, 330);

    // Reset rotation state after animation
    setTimeout(() => {
      setIsRotating(false);
    }, 600);
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="icon"
      className={cn(
        "fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-lg border-2 border-primary/30 hover:border-primary transition-all duration-300 btn-bounce",
        isRotating && "animate-[rotate360_0.6s_ease-in-out]"
      )}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <Sun className="w-5 h-5 text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </Button>
  );
};
