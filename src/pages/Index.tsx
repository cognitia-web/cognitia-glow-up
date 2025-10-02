import { ParticleBackground } from '@/components/ParticleBackground';
import { FloatingSidebar } from '@/components/FloatingSidebar';
import { HeroSlideshow } from '@/components/HeroSlideshow';
import { GoalCard } from '@/components/GoalCard';
import { Footer } from '@/components/Footer';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const goals = [
  {
    title: 'Launch Marketing Campaign',
    description: 'Q1 2025 product launch with multi-channel strategy',
    progress: 75,
    category: 'Business',
    details: 'Comprehensive marketing campaign including social media, email outreach, and content marketing. Target audience segmentation completed, creative assets in final review.',
  },
  {
    title: 'Master TypeScript',
    description: 'Complete advanced TypeScript certification course',
    progress: 60,
    category: 'Learning',
    details: 'Working through advanced type systems, generics, and decorators. Building real-world projects to reinforce concepts. Currently on module 8 of 12.',
  },
  {
    title: 'Fitness Challenge',
    description: 'Complete 90-day transformation program',
    progress: 45,
    category: 'Health',
    details: 'Following structured workout plan with nutrition tracking. Lost 8 lbs so far. Strength training 4x per week, cardio 3x per week. Feeling great!',
  },
  {
    title: 'Build SaaS Product',
    description: 'MVP launch for productivity tool',
    progress: 82,
    category: 'Business',
    details: 'Core features implemented. Currently in beta testing with 50 users. Collecting feedback and iterating on UI/UX. Payment integration next milestone.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full relative">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to Content
      </a>

      <ParticleBackground />
      <FloatingSidebar />
      <ThemeToggleButton />

      <main 
        id="main-content" 
        className="md:ml-[72px] transition-all duration-300"
      >
        <HeroSlideshow />

        {/* Goals Section */}
        <section id="goals" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Active Goals
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Track your progress and achieve greatness, one goal at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <GoalCard key={index} {...goal} />
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <section id="analytics" className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Insights & Analytics
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Beautiful visualizations and intelligent insights to keep you motivated
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  12
                </div>
                <div className="text-sm text-muted-foreground">Goals Completed</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  4
                </div>
                <div className="text-sm text-muted-foreground">Active Goals</div>
              </div>
              <div className="text-center p-6 bg-background/50 rounded-xl">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  89%
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
