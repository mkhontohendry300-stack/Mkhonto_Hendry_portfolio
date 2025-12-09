import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import resumeImage from '@/assets/resume-optimized.webp';
import AuthorImage from '@/assets/author-optimized.webp';

const Projects = () => {
  const projects = [
    {
      title: "Tech Training Platform",
      description: "Built a comprehensive tech training and education platform with multi-role authentication supporting Admin, Mentor, Candidate, and Client access. Features project browsing and collaborative learning.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop",
      technologies: ["React", "Authentication", "Role Management", "EdTech"],
      challenges: "Implementing multi-role access control and creating an intuitive learning experience",
      githubUrl: "",
      liveUrl: "https://admauv.readdy.co/"
    },
    {
      title: "UbuntuConnect AI Chatbot",
      description: "Built a multilingual AI chatbot to help users understand core concepts in Artificial Intelligence. Supports multiple South African languages including English, Afrikaans, Zulu, and Setswana.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop",
      technologies: ["AI", "NLP", "Chatbot Development", "Multilingual Processing"],
      challenges: "Creating accurate AI explanations across multiple languages and cultural contexts",
      githubUrl: "",
      liveUrl: "https://share.chatling.ai/s/p9ACa8o9Ze9kPVg"
    },
    {
      title: "CareerCraft Platform",
      description: "Created a comprehensive career management platform with user authentication, profile management, and job tracking features to help professionals navigate their career journey.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      technologies: ["React", "Supabase", "Authentication", "Full Stack Development"],
      challenges: "Building secure authentication and scalable user management system",
      githubUrl: "",
      liveUrl: "https://career-craft-copy-1f567484.base44.app/"
    },
    {
      title: "MindPulse AI",
      description: "Designed an AI-powered mental wellness application that provides personalized insights and support for mental health management through intelligent data analysis and user interaction.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
      technologies: ["React", "AI/ML", "Data Analytics", "Healthcare Tech"],
      challenges: "Ensuring data privacy and creating empathetic AI interactions for sensitive topics",
      githubUrl: "",
      liveUrl: "https://mind-pulse-ai-copy-9dbbaec5.base44.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
               <span className="text-gold">Projects</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              A showcase of my data analysis and visualization work, demonstrating my ability to transform complex data into actionable insights.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-gold/20 hover:shadow-elegant transition-all duration-300 group bg-white"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-charcoal group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-charcoal-light font-medium mb-2">Challenges Solved:</p>
                    <p className="text-sm text-gray">{project.challenges}</p>
                  </div>
                  
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs font-medium bg-gold/10 text-charcoal border-gold/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 border-charcoal/20 hover:bg-charcoal hover:text-white transition-colors"
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gold hover:bg-gold-dark text-charcoal transition-colors"
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Projects Button */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8 text-charcoal">More Projects</h3>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-gold/30 text-charcoal hover:border-gold hover:bg-gold/5"
            >
              <a 
                href="https://github.com/mkhontohendry300-stack" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Section End Divider */}
    <div className="flex justify-center my-8">
      <div className="flex items-center gap-2 text-gray">
        <span className="h-px w-24 bg-gold/30" />
        <span className="text-xs uppercase tracking-widest">End of Projects</span>
        <span className="h-px w-24 bg-gold/30" />
      </div>
    </div>
    </section>
  );
};

export default Projects;