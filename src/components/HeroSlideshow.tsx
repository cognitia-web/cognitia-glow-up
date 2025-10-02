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
    <section className="relative w-full h-[600px] md:h-[700px]" id="home">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade, Pagination, Keyboard]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{
          delay: 5000,
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
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(153,118,244,0.1),transparent_50%)]" />
              
              <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in">
                  {slide.title}
                </h1>
                
                <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </h2>
                
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 btn-bounce"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
