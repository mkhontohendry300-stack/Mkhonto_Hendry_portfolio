import { Target, Lightbulb, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Focus",
      description: "Data-driven insights, visualization, and digital transformation",
      color: "text-emerald-400"
    },
    {
      icon: Lightbulb,
      title: "Approach",
      description: "Combining analytical precision with modern technology",
      color: "text-amber-400"
    },
    {
      icon: Rocket,
      title: "Goal",
      description: "Solving real-world challenges through data analytics",
      color: "text-rose-400"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-charcoal">
              About <span className="text-gold">Me</span>
            </h2>
            
            <div className="space-y-6 text-gray leading-relaxed">
              <p>
                I am a detail-oriented and analytical professional passionate about data-driven insights and innovation. I hold a Diploma in Mathematical Sciences from Cape Peninsula University of Technology.
              </p>
              <p>
                I have worked as an intern specializing in Data Analysis at Statistics South Africa, where I focused on analyzing statistical data, creating insightful visualizations, and developing interactive dashboards to support data-driven decision-making.
              </p>
              <p>
                Currently working at CAPACITI as a Digital Associate, I excel in data visualization and digital transformation projects. I am driven to combine analytical precision with modern technology to solve real-world challenges.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white border-gold/20 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <highlight.icon className={highlight.color} size={20} />
                    <h4 className="font-semibold text-charcoal">{highlight.title}</h4>
                  </div>
                  <p className="text-sm text-gray">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;