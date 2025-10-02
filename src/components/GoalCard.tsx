import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GoalCardProps {
  title: string;
  description: string;
  progress: number;
  details: string;
  category: string;
}

export const GoalCard = ({ title, description, progress, details, category }: GoalCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animateProgress) {
            setAnimateProgress(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [animateProgress]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card
      ref={cardRef}
      className="hover-lift cursor-pointer transition-all duration-450"
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-xs font-semibold text-primary mb-2">{category}</div>
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-primary">{progress}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out",
                animateProgress && "animate-progress-fill"
              )}
              style={{
                width: animateProgress ? `${progress}%` : '0%',
                '--progress-value': `${progress}%`,
              } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Expandable Details */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-450 ease-in-out",
            isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">{details}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
