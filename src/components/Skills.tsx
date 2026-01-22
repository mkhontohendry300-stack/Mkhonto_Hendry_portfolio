import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, CheckCircle, Users } from "lucide-react";
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-gold" />,
      skills: ["Python", "R", "SQL", "JavaScript", "HTML", "CSS", "Shell (Bash)", "Scala"],
      color: "languages",
      bgColor: "bg-gradient-to-r from-white to-gray-50"
    },
    {
      title: "Statistical & Analysis Tools",
      icon: <Wrench className="w-5 h-5 text-gold" />,
      skills: ["SAS", "GitHub", "Vercel", "Excel", "NetworkX", "Pandas", "Matplotlib", "Power BI", "Statistical Testing"],
      color: "accent",
      bgColor: "bg-white"
    },
    {
      title: "Specializations",
      icon: <CheckCircle className="w-5 h-5 text-gold" />,
      skills: ["Data Visualization", "Statistical Modeling", "Machine Learning", "Database Management", "ETL / ELT Pipeline", "Airflow", "Star & Snowflake Schema"],
      color: "ocean",
      bgColor: "bg-gradient-to-r from-gray-50 to-white"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-gold" />,
      skills: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Accountability"],
      color: "soft",
      bgColor: "bg-white"
    }
  ];

  const getSkillVariant = (color: string) => {
    switch (color) {
      case 'languages':
        return 'default';
      case 'accent':
        return 'secondary';
      case 'ocean':
        return 'outline';
      case 'soft':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal">
              Skills & <span className="text-gold">Expertise</span>
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              A comprehensive toolkit built through education, hands-on experience, and continuous learning.
            </p>
            <p className="text-sm text-gray mt-2 italic">
              What I bring to the table 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`${category.bgColor} border border-gold/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
                >
                  <CardHeader className="flex items-center gap-2">
                    {category.icon}
                    <CardTitle className="text-xl font-semibold text-charcoal">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge
                            variant={getSkillVariant(category.color)}
                            className={`text-sm py-2 px-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110
                              ${category.color === 'languages' ? 'bg-gold/10 text-charcoal border-gold/30' : ''}
                              ${category.color === 'soft' ? 'bg-charcoal/5 text-charcoal border-charcoal/20' : ''}`}
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Section End Divider */}
    <div className="flex justify-center my-8">
      <div className="flex items-center gap-2 text-gray">
        <span className="h-px w-24 bg-gold/30" />
        <span className="text-xs uppercase tracking-widest">End of Skills</span>
        <span className="h-px w-24 bg-gold/30" />
      </div>
    </div>
    </section>
  );
};

export default Skills;
