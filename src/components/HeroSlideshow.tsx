import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Keyboard } from 'swiper/modules';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Master Your Goals with Intelligence',
    subtitle: 'Transform ambitions into achievements with AI-powered insights',
    cta: 'Get Started',
  },
  {
    title: 'Track Progress in Real-Time',
    subtitle: 'Visualize your journey with beautiful analytics and metrics',
    cta: 'Explore Features',
  },
  {
    title: 'Achieve More, Stress Less',
    subtitle: 'Smart reminders and intelligent planning keep you on track',
    cta: 'Start Free Trial',
  },
];

export const HeroSlideshow = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!swiperRef.current) return;
      
      if (e.key === 'ArrowLeft') {
        swiperRef.current.swiper.slidePrev();
      } else if (e.key === 'ArrowRight') {
        swiperRef.current.swiper.slideNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        if (swiperRef.current.swiper.autoplay.running) {
          swiperRef.current.swiper.autoplay.stop();
        } else {
          swiperRef.current.swiper.autoplay.start();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden" id="home">
      {/* Ambient light effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-slow pointer-events-none" />
      
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary/30',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
        }}
        keyboard={{ enabled: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center gradient-mesh">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,118,244,0.15),transparent_60%)]" />
              
              {/* Animated gradient orbs */}
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
              
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
                    {slide.title}
                  </h1>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                  <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    {slide.subtitle}
                  </h2>
                </div>
                
                <div className="animate-scale-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                  <Button
                    size="lg"
                    className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-bounce btn-ripple text-lg px-8 py-6 h-auto"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style>{`
        .swiper-pagination {
          bottom: 40px !important;
        }
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          margin: 0 8px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};
