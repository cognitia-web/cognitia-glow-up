import { Brain, Sparkles } from 'lucide-react';

export const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg">
      <div className="relative">
        {/* Animated rings */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-32 h-32 rounded-full border-4 border-primary/20 border-t-primary" />
        </div>
        
        {/* Center logo */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse" />
          <Brain className="w-16 h-16 text-primary relative z-10 animate-float" />
          <Sparkles className="absolute top-2 right-2 w-6 h-6 text-accent animate-ping" />
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse">
            Loading Cognitia
          </p>
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
