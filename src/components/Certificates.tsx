import { ExternalLink, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const certificates = [
	{
		title: "Active Listening: Enhancing Communication Skills",
		issuer: "Coursera Instructor Network",
		date: "2025",
		type: "Professional",
		description:
			"Training to master active listening, boost empathy, and sharpen interpersonal communication skills.",
		skills: [
			"Active Listening",
			"Communication",
			"Empathy",
			"Interpersonal Skills",
		],
		link: "https://coursera.org/share/419e28e8d710cca35ade10ff3c7ba0b8",
		image: "/certificates/active-listening.png",
	},
	{
		title: "AI For Everyone",
		issuer: "Coursera — Andrew Ng",
		date: "2025",
		type: "Professional",
		description:
			"A non-technical introduction to artificial intelligence, its business applications, and ethical considerations.",
		skills: [
			"Artificial Intelligence",
			"AI Applications",
			"Business Strategy",
			"Ethics in AI",
		],
		link: "https://coursera.org/share/50a6011bd051d43b7db0686f9335e544",
		image: "/certificates/ai-for-everyone.png",
	},
	{
		title: "Emotional Intelligence",
		issuer: "Arizona State University via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Learned strategies to enhance self-awareness, self-regulation, empathy, and social skills.",
		skills: ["Emotional Intelligence", "Self-Awareness", "Empathy", "Social Skills"],
		link: "https://coursera.org/share/84eb3b06ebdbce6a5d2afe37b558fb58",
		image: "/certificates/emotional-intelligence.png",
	},
	{
		title: "Introduction to Artificial Intelligence (AI)",
		issuer: "IBM via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Fundamentals of AI, including real-world applications and societal impact.",
		skills: ["Artificial Intelligence", "AI Applications", "Ethics in AI"],
		link: "https://coursera.org/share/756ef2ceca7bfff3460e013bc496bc99",
		image: "/certificates/intro-to-ai.png",
	},
	{
		title: "Introduction to Generative AI",
		issuer: "Google Cloud via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Overview of generative AI, its applications, and techniques for creative solutions.",
		skills: ["Generative AI", "AI Models", "Creativity"],
		link: "https://www.coursera.org/account/accomplishments/verify/M9GN4IXJ9CZ2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
		image: "/certificates/intro-to-gen-ai.png",
	},
	{
		title: "Generative AI with Large Language Models",
		issuer: "DeepLearning.AI & AWS via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Hands-on understanding of large language models and generative AI applications.",
		skills: ["Large Language Models", "Generative AI", "Practical AI"],
		link: "https://coursera.org/share/7c1f9fb144517b85886ad4a5aa15a411",
		image: "/certificates/gen-ai-and-llm.png",
	},
	{
		title: "AI Foundations: Prompt Engineering with ChatGPT",
		issuer: "Arizona State University via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Techniques for crafting effective prompts to guide AI responses in ChatGPT.",
		skills: ["Prompt Engineering", "AI Interaction", "ChatGPT"],
		link: "https://coursera.org/share/50aa99f692361738df41e8505cdb1d11",
		image: "/certificates/promt-eng.png",
	},
	{
		title: "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity",
		issuer: "University of California, Irvine via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Practical strategies for productivity, task prioritization, and effective time management.",
		skills: ["Time Management", "Productivity", "Prioritization", "Efficiency"],
		link: "https://coursera.org/share/be9c60a9c5e7ae5890d9ab6504537948",
		image: "/certificates/work-smarter.png",
	},
	{
		title: "Developing Interpersonal Skills",
		issuer: "IBM via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Strengthened communication, teamwork, and collaboration abilities.",
		skills: ["Interpersonal Skills", "Collaboration", "Teamwork"],
		link: "https://coursera.org/share/0701f9b09e10eacbfe540a64b02639bb",
		image: "/certificates/develop-inter.png",
	},
	{
		title: "Verbal Communications and Presentation Skills",
		issuer: "Starweaver via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Learned effective verbal communication and professional presentation techniques.",
		skills: ["Presentation", "Communication", "Public Speaking"],
		link: "https://coursera.org/share/e5a5f9bc33dfad69c6fa00aa6fa36d8f",
		image: "/certificates/verbal.png",
	},
	{
		title: "Write Professional Emails in English",
		issuer: "Georgia Institute of Technology via Coursera",
		date: "2025",
		type: "Professional",
		description:
			"Techniques for crafting professional and clear emails in English for workplace communication.",
		skills: ["Professional Writing", "Email Communication", "Clarity"],
		link: "https://coursera.org/share/21ca39f9019258ce0579d776599a6414",
		image: "/certificates/proff-email.png",
	},
];

const getTypeColor = (type: string) => (type === "Professional" ? "secondary" : "default");

const QualificationsAndCertificates = () => {
	
  const totalCertificates = certificates.length;
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) setCardsPerSlide(1); // mobile
      else if (window.innerWidth < 1024) setCardsPerSlide(2); // tablet
      else setCardsPerSlide(3); // desktop
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  // Ensure startIndex is valid whenever cardsPerSlide changes
  useEffect(() => {
    if (startIndex + cardsPerSlide > totalCertificates) {
      setStartIndex(Math.max(0, totalCertificates - cardsPerSlide));
    }
  }, [cardsPerSlide, startIndex, totalCertificates]);

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + cardsPerSlide >= totalCertificates
        ? totalCertificates - cardsPerSlide
        : prev + cardsPerSlide
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - cardsPerSlide < 0 ? 0 : prev - cardsPerSlide));
  };

  const visibleCertificates = certificates.slice(startIndex, startIndex + cardsPerSlide);

  return (
    <section id="qualifications-certificates" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of my professional certifications.
          </p>
        </div>

        <div className="relative">
          {/* Prev Button */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="rounded-full p-2 shadow hover:bg-stone-100"
            >
              &#10094;
            </Button>
          </div>

          {/* Next Button */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              onClick={handleNext}
              disabled={startIndex + cardsPerSlide >= totalCertificates}
              className="rounded-full p-2 shadow hover:bg-stone-100"
            >
              &#10095;
            </Button>
          </div>

          {/* Carousel */}
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleCertificates.map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] flex flex-col"
                >
                  <Card className="bg-gradient-to-br from-white to-stone-50 border border-border/30 hover:shadow-xl transition-all duration-300 rounded-2xl flex flex-col h-full">
                    {/* Image */}
                    <div className="w-full h-36 flex justify-center mt-2">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover rounded-lg shadow-md border border-stone-200"
                        loading="lazy"
                        width="320"
                        height="180"
                      />
                    </div>

                    {/* Header */}
                    <CardHeader className="mt-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <Star className="text-stone-600 mt-1" size={20} />
                          <div>
                            <CardTitle className="text-md font-semibold mb-1 text-stone-800">
                              {c.title}
                            </CardTitle>
                            <p className="text-stone-700 text-sm font-medium">{c.issuer}</p>
                          </div>
                        </div>
                        <Badge variant={getTypeColor(c.type)} className="text-xs">
                          {c.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground mt-1">
                        <Calendar size={14} />
                        <span className="text-sm">{c.date}</span>
                      </div>
                    </CardHeader>

                    {/* Content */}
                    <CardContent className="flex flex-col justify-between flex-1 space-y-3">
                      <div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                          {c.description}
                        </p>
                        <h4 className="font-semibold mb-2 text-sm">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-1">
                          {c.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center mt-2">
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-stone-400 text-stone-700 hover:border-stone-700 hover:bg-stone-100"
                        >
                          <a href={c.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" />
                            View Certificate
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsAndCertificates;
