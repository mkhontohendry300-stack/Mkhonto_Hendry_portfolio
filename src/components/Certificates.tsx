import { ExternalLink, Calendar, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const certificates = [
  {
    title: "Full Stack Development",
    issuer: "FNB App Academy",
    date: "July 2025",
    type: "Professional",
    description: "32 credits certificate covering full stack development including UX design, APIs, backend development, and business funding.",
    skills: ["Full Stack", "UX Design", "APIs", "Backend Development"],
    link: "#",
    pdf: "/certificates/fnb-fullstack.pdf",
    image: "/certificates/fnb-fullstack.jpg"
  },
  {
    title: "AI & Machine Learning Fundamentals",
    issuer: "CAPACITI",
    date: "November 2025",
    type: "Professional",
    description: "Certificate of Achievement with a score of 92% covering AI and Machine Learning fundamentals.",
    skills: ["Machine Learning", "Artificial Intelligence", "Data Science"],
    link: "#",
    pdf: "/certificates/ml-fundamentals.pdf",
    image: "/certificates/ml-fundamentals.jpg"
  },
  {
    title: "Supervised Machine Learning",
    issuer: "DeepLearning.AI & Stanford University via Coursera",
    date: "2025",
    type: "Professional",
    description: "Comprehensive course on supervised machine learning covering regression and classification techniques.",
    skills: ["Machine Learning", "Regression", "Classification", "Python"],
    link: "https://coursera.org/verify/SYAW7Q40JKRH",
    pdf: "/certificates/supervised-ml.pdf",
    image: "/certificates/supervised-ml.jpg"
  },
  {
    title: "Python for Data Science and AI",
    issuer: "IBM via Coursera",
    date: "December 2025",
    type: "Professional",
    description: "Skills badge for Python programming applied to Data Science and AI development.",
    skills: ["Python", "Data Science", "AI Development"],
    link: "https://www.credly.com/badges/7aede22f-cc47-4c03-ad4b-55cf9565271c",
    pdf: "/certificates/python-data-science.pdf",
    image: "/certificates/python-data-science.jpg"
  },
  {
    title: "Student Counselling Peer Helper",
    issuer: "Cape Peninsula University of Technology",
    date: "2024",
    type: "Academic",
    description: "Certificate of Participation for successfully completing the Residence Peer Helper Programme.",
    skills: ["Counselling", "Peer Support", "Leadership", "Communication"],
    link: "#",
    pdf: "/certificates/peer-helper.pdf",
    image: "/certificates/peer-helper.jpg"
  }
];

const getTypeColor = (type: string) => type === "Professional" ? "secondary" : "default";

const QualificationsAndCertificates = () => {
  const totalCertificates = certificates.length;
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) setCardsPerSlide(1);
      else if (window.innerWidth < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };
    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);
    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

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

  return (
    <section id="qualifications-certificates" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Certificates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated showcase of my professional certifications.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button onClick={handlePrev} disabled={startIndex === 0} variant="outline" className="rounded-full p-2 shadow">
              &#10094;
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button onClick={handleNext} disabled={startIndex + cardsPerSlide >= totalCertificates} variant="outline" className="rounded-full p-2 shadow">
              &#10095;
            </Button>
          </div>

          <div className="flex gap-6 overflow-hidden px-12">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleCertificates.map(cert => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3" variant={getTypeColor(cert.type)}>
                        {cert.type}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{cert.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {cert.skills.slice(0, 3).map(skill => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-auto flex gap-2">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          onClick={() => setSelectedCertificate(cert)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        {cert.link !== "#" && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl h-[80vh]">
          <DialogHeader>
            <DialogTitle>{selectedCertificate?.title}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 h-full min-h-0">
            {selectedCertificate && (
              <iframe
                src={selectedCertificate.pdf}
                className="w-full h-full min-h-[60vh] rounded-md border"
                title={selectedCertificate.title}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default QualificationsAndCertificates;
