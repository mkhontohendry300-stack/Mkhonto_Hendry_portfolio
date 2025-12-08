import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Diploma Mathematical Sciences",
      field: "Cape Peninsula University of Technology",
      institution: "Cape Peninsula University of Technology",
      location: "Cape Town",
      period: "2024",
      status: "Completed",
      description: "Comprehensive program covering statistical analysis, mathematical modeling, and data science principles.",
      focusAreas: ["Advanced Statistics", "Data Analysis", "Mathematical Modeling", "Research Methods"]
    },
    {
      degree: "Full Stack Development",
      field: "FNB App Academy",
      institution: "FNB App Academy",
      location: "Cape Town",
      period: "2024",
      status: "Completed",
      description: "Intensive program covering modern web development, including frontend and backend technologies.",
      focusAreas: ["JavaScript", "React", "Node.js", "Database Design", "API Development"]
    },
    {
      degree: "Electrical Engineering (N1–N3)",
      field: "Technical Certificate",
      institution: "Gert Sibanda College",
      location: "Mpumalanga",
      period: "2020",
      status: "Completed",
      description: "Technical foundation in electrical engineering principles and systems.",
      focusAreas: ["Circuit Analysis", "Electronics", "Control Systems", "Technical Drawing"]
    },
    {
      degree: "National Senior Certificate",
      field: "Grade 12 (Admission to Bachelor Degree)",
      institution: "Mbambiso Secondary School",
      location: "Mpumalanga",
      period: "2018",
      status: "Completed",
      description: "Secondary education with university admission qualification, strong foundation in mathematics and sciences.",
      focusAreas: ["Mathematics", "Physical Sciences", "Academic Excellence"]
    }
  ];

  const completedCount = education.filter(edu => edu.status !== "Current").length;

  const getStatusColor = (status: string) => {
    return status === 'Current' ? 'default' : 'secondary';
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
              <span className="text-gold">Education</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-gold/30 space-y-10 pl-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gold/20 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 relative">
                  {/* Timeline marker */}
                  <div className="absolute -left-[1.65rem] top-6 w-4 h-4 rounded-full bg-gold border-2 border-white shadow-md"></div>
                  
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="text-gold mt-1">
                          <GraduationCap size={26} />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold mb-2 text-charcoal">
                            {edu.degree}
                          </CardTitle>
                          <h3 className="text-charcoal-light font-medium mb-1">
                            {edu.field}
                          </h3>
                          <div className="flex items-center gap-1 text-gray">
                            <MapPin size={16} />
                            <span>{edu.institution} - {edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={getStatusColor(edu.status)} className="text-xs bg-gold/10 text-charcoal border-gold/30">
                          {edu.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-gray">
                          <Calendar size={16} />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    <div>
                      <div className="flex items-center gap-2 text-charcoal mb-2">
                        <BookOpen size={16} className="text-gold" />
                        <span className="text-sm font-medium">Key Focus Areas:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.focusAreas.map((area, areaIndex) => (
                          <Badge 
                            key={areaIndex} 
                            variant="outline" 
                            className="text-xs bg-gold/5 text-charcoal border-gold/30 hover:bg-gold/10 transition-colors"
                          >
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="text-center mt-16 border-t border-gold/30 pt-10">
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">{completedCount}</div>
                <div className="text-sm text-gray">Qualifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">6+</div>
                <div className="text-sm text-gray">Years of Study</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
