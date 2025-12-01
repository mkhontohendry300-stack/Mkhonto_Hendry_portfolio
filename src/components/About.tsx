import { useState, useEffect } from 'react';
import { Code, Database, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import graduationImage from '@/assets/graduation-photo.png';
const About = () => {
  const [yearsExp, setYearsExp] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [toolsMastered, setToolsMastered] = useState(0);
  useEffect(() => {
    const animateCounter = (target: number, setter: (value: number) => void, duration: number = 2000) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 50);
      return timer;
    };
    const timer1 = animateCounter(2, setYearsExp);
    const timer2 = animateCounter(10, setProjectsCompleted);
    const timer3 = animateCounter(15, setToolsMastered);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, []);
  const highlights = [{
    icon: Database,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights with advanced analytics",
    color: "text-gold"
  }, {
    icon: Code,
    title: "Technical Skills",
    description: "Python, R, SQL, and modern data visualization tools",
    color: "text-charcoal"
  }, {
    icon: Zap,
    title: "Innovation",
    description: "Combining analytical precision with modern technology",
    color: "text-gold-dark"
  }, {
    icon: Users,
    title: "Collaboration",
    description: "Driving data-driven decision making across teams",
    color: "text-charcoal-light"
  }];
  return <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
              About <span className="text-gold">Me</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Detail-oriented and analytical professional passionate about data-driven insights and innovation
            </p>
          </div>

          {/* Animated Counters */}
          <div className="grid grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-gold/20 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">{yearsExp}</div>
                <div className="text-sm text-gray">Years of Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-gold/20 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">{projectsCompleted}+</div>
                <div className="text-sm text-gray">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-white border-gold/20 hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-gold mb-2">{toolsMastered}+</div>
                <div className="text-sm text-gray">Tools Mastered</div>
              </CardContent>
            </Card>
          </div>

          {/* Main layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side → Graduation picture */}
            

            {/* Right side → Text + Highlights */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-charcoal">My Journey</h3>
                <p className="text-gray leading-relaxed mb-4">
                  I am a detail-oriented and analytical professional passionate about data-driven insights and innovation. I hold a Diploma in Mathematical Sciences from Cape Peninsula University of Technology. I have worked as an intern specializing in Data Analysis at Statistics South Africa, analyzing statistical data, creating insightful visualizations, and developing interactive dashboards to support data-driven decision making.
                </p>
                <p className="text-gray leading-relaxed">
                  Currently working at CAPACITI as a Digital Associate, I excel in data visualization and digital transformation projects. I am driven to combine analytical precision with modern technology to solve real-world challenges.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => <Card key={index} className="bg-white border-border/50 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`${highlight.color} mt-1`}>
                          <highlight.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-charcoal">{highlight.title}</h4>
                          <p className="text-sm text-gray">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;