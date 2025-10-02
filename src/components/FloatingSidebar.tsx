import { useState } from 'react';
import { Home, Target, BarChart3, Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';

interface NavItem {
  name: string;
  icon: typeof Home;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'Goals', icon: Target, href: '#goals' },
  { name: 'Analytics', icon: BarChart3, href: '#analytics' },
  { name: 'Settings', icon: Settings, href: '#settings' },
];

export const FloatingSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 rounded-xl glass hover:glass-strong transition-all hover:scale-105"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Desktop Sidebar */}
      <nav
        className={cn(
          "hidden md:flex fixed left-0 top-0 h-screen z-40 flex-col py-6 glass-strong transition-all duration-300",
          isExpanded ? "w-64" : "w-[72px]"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo */}
        <div className="px-4 mb-8">
          {isExpanded ? (
            <Logo size="sm" showText={true} />
          ) : (
            <Logo size="sm" showText={false} />
          )}
        </div>

        <div className="flex-1 flex flex-col gap-2 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group relative",
                  isActive 
                    ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className={cn("w-6 h-6 flex-shrink-0", isActive && "text-primary")} />
                <span
                  className={cn(
                    "font-medium whitespace-nowrap transition-all duration-300",
                    isExpanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 absolute"
                  )}
                >
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg animate-glow" />
                )}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={cn(
          "md:hidden fixed inset-y-0 left-0 z-40 w-64 glass-strong transition-transform duration-300",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 mb-4">
          <Logo size="sm" showText={true} />
        </div>
        
        <div className="flex flex-col gap-2 px-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                  setIsMobileOpen(false);
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300",
                  isActive 
                    ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-4 border-primary" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="font-medium">{item.name}</span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};
