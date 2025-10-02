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
        "fixed top-6 right-6 z-50 w-14 h-14 rounded-2xl glass-strong hover:scale-110 transition-all duration-300 btn-bounce group",
        isRotating && "animate-[rotate360_0.6s_ease-in-out]"
      )}
      aria-label="Toggle theme"
    >
      {isLight ? (
        <Sun className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      ) : (
        <Moon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      )}
    </Button>
  );
};
