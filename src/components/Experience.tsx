import { Calendar, MapPin, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Digital Associate",
      company: "CAPACITI",
      location: "Cape Town, South Africa", 
      period: "Sept 2024 - Present",
      type: "Full-time",
      description: "Assisting in digital innovation and data-driven business solutions, supporting project teams with data analysis and technology integration.",
      achievements: [
        "Assisting in digital innovation and data-driven business solutions",
        "Supporting project teams with data analysis and technology integration",
        "Contributing to digital upskilling and automation initiatives"
      ],
      technologies: ["Python", "Data Analysis", "Digital Transformation", "Project Management"]
    },
    {
      title: "Junior Data Analyst",
      company: "Statistics South Africa",
      location: "Cape Town, South Africa",
      period: "Jul 2024 - Dec 2024",
      type: "Internship",
      description: "Conducted data cleaning, modeling, and visualization on socio-economic projects, developing Python models and applying advanced analytics techniques.",
      achievements: [
        "Conducted data cleaning, modeling, and visualization on socio-economic projects",
        "Developed Python models to quantify the informal sector's impact on GDP",
        "Applied community detection algorithms using NetworkX and Pandas",
        "Created insightful visualizations and interactive dashboards"
      ],
      technologies: ["Python", "Pandas", "NetworkX", "Excel", "Data Visualization"]
    },
    {
      title: "Volunteer Peer Helper",
      company: "CPUT",
      location: "Cape Town, South Africa",
      period: "Feb 2024 - Sep 2024",
      type: "Volunteer",
      description: "Provided academic and emotional support to students, facilitating workshops on mental health and exam preparation.",
      achievements: [
        "Provided academic and emotional support to students",
        "Facilitated workshops on mental health and exam preparation",
        "Contributed to student well-being and success initiatives"
      ],
      technologies: ["Communication", "Workshop Facilitation", "Mentoring"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'secondary';
      case 'Full-time':
        return 'default';
      case 'Volunteer':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
              Professional <span className="text-gold">Experience</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              My journey in data analysis and digital transformation through hands-on experience and professional growth.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card key={index} className="bg-white border-gold/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-semibold mb-2 text-charcoal">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-gray">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span className="font-medium text-gold">{experience.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getTypeColor(experience.type)} className="bg-gold/10 text-charcoal border-gold/30">
                        {experience.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray">
                        <Calendar size={16} />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray leading-relaxed">
                    {experience.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-charcoal">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-charcoal">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-gold/30 text-charcoal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
