import { ExternalLink, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const certificates = [{
  title: "AI For Everyone",
  issuer: "DeepLearning.AI via Coursera",
  date: "September 2025",
  type: "Professional",
  description: "An online non-credit course covering AI fundamentals, applications, and business implications.",
  skills: ["Artificial Intelligence", "AI Applications", "Business Strategy"],
  link: "https://coursera.org/verify/Z4IIJQW4T1LE",
  image: "/certificates/ai-for-everyone-new.jpg"
}, {
  title: "Full Stack Development",
  issuer: "FNB App Academy",
  date: "July 2025",
  type: "Professional",
  description: "32 credits certificate covering full stack development including UX design, APIs, backend development, and business funding.",
  skills: ["Full Stack", "UX Design", "APIs", "Backend Development", "AI in Development"],
  link: "#",
  image: "/certificates/fnb-fullstack.jpg"
}, {
  title: "AI & Machine Learning Fundamentals",
  issuer: "CAPACITI",
  date: "November 2025",
  type: "Professional",
  description: "Certificate of Achievement with a score of 92% covering AI and Machine Learning fundamentals.",
  skills: ["Machine Learning", "Artificial Intelligence", "Data Science"],
  link: "#",
  image: "/certificates/ml-fundamentals.jpg"
}, {
  title: "Supervised Machine Learning: Regression and Classification",
  issuer: "DeepLearning.AI & Stanford University via Coursera",
  date: "2025",
  type: "Professional",
  description: "Comprehensive course on supervised machine learning covering regression and classification techniques.",
  skills: ["Machine Learning", "Regression", "Classification", "Python"],
  link: "https://coursera.org/verify/SYAW7Q40JKRH",
  image: "/certificates/supervised-ml.jpg"
}, {
  title: "Python for Data Science and AI",
  issuer: "IBM via Coursera",
  date: "December 2025",
  type: "Professional",
  description: "Skills badge for Python programming applied to Data Science and AI development.",
  skills: ["Python", "Data Science", "AI Development"],
  link: "https://www.credly.com/badges/7aede22f-cc47-4c03-ad4b-55cf9565271c",
  image: "/certificates/python-data-science.jpg"
}, {
  title: "Student Counselling Residence Peer Helper",
  issuer: "Cape Peninsula University of Technology",
  date: "2024",
  type: "Academic",
  description: "Certificate of Participation for successfully completing the Residence Peer Helper Programme.",
  skills: ["Counselling", "Peer Support", "Leadership", "Communication"],
  link: "#",
  image: "/certificates/peer-helper.jpg"
}];
const getTypeColor = (type: string) => type === "Professional" ? "secondary" : "default";
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
    setStartIndex(prev => prev + cardsPerSlide >= totalCertificates ? totalCertificates - cardsPerSlide : prev + cardsPerSlide);
  };
  const handlePrev = () => {
    setStartIndex(prev => prev - cardsPerSlide < 0 ? 0 : prev - cardsPerSlide);
  };
  const visibleCertificates = certificates.slice(startIndex, startIndex + cardsPerSlide);
  return <section id="qualifications-certificates" className="py-20 bg-stone-50">
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
            <Button onClick={handlePrev} disabled={startIndex === 0} className="rounded-full p-2 shadow hover:bg-stone-100">
              &#10094;
            </Button>
          </div>

          {/* Next Button */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button onClick={handleNext} disabled={startIndex + cardsPerSlide >= totalCertificates} className="rounded-full p-2 shadow hover:bg-stone-100">
              &#10095;
            </Button>
          </div>

          {/* Carousel */}
          <div className="flex gap-6 overflow-hidden">
            <AnimatePresence initial={false}>
              {visibleCertificates.map(c => <motion.div key={c.title} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.3
            }} className="flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] flex flex-col">
                  
                </motion.div>)}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>;
};
export default QualificationsAndCertificates;