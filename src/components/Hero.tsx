import { useState, useEffect } from 'react';
import {Download , Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/profile-photo.png';

const Hero = () => {
  const text = "Digital Associate | Data Analyst | Tech Enthusiast";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        setIsTyping(false); // typing finished
      }
    }, 100); // typing speed in ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-charcoal">
                Hi, I'm{' '}
                <span className="text-gold">
                  Mkhonto Hendry Mike
                </span>
              </h1>

              {/* Typing animation */}
              <h3 className="text-lg md:text-xl text-charcoal-light h-6">
                {displayedText}
                {isTyping && <span className="animate-pulse text-gold">|</span>}
              </h3>

              <p className="text-lg text-gray leading-relaxed max-w-lg">
                Detail-oriented Data Analyst passionate about transforming data into actionable insights and driving digital innovation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-gold hover:bg-gold-dark text-charcoal transition-all duration-300"
                size="lg"
              >
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5"
              >
                <a
                  href="https://github.com/mkhontohendry300-stack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5"
              >
                <a
                  href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">5+</div>
                <div className="text-sm text-gray">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">2</div>
                <div className="text-sm text-gray">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">Cape Town</div>
                <div className="text-sm text-gray">Based</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-full overflow-hidden shadow-elegant w-5/6 mx-auto border-2 border-gold/20 aspect-square">
              <img
                src={heroImage}
                alt="Mkhonto Hendry Mike - Data Analyst workspace"
                className="w-full h-auto object-cover"
                fetchPriority="high"
                loading="eager"
                width="600"
                height="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
