import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, Download, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");
  const contactInfo = [{
    icon: Mail,
    title: "Email",
    value: "mkhontohendry300@gmail.com",
    href: "mailto:mkhontohendry300@gmail.com"
  }, {
    icon: Phone,
    title: "Phone",
    value: "+27 793003577",
    href: "tel:+27793003577"
  }];
  const workBenefits = [{
    title: "Advanced data analysis and visualization with Python, R, and SQL"
  }, {
    title: "Experience in statistical modeling and machine learning"
  }, {
    title: "Proven track record in digital transformation projects"
  }, {
    title: "Strong analytical skills combined with business acumen"
  }];
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID as string, import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, formRef.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string).then(() => {
      setStatus("✅ Message sent successfully!");
      formRef.current?.reset();
    }, error => {
      console.error(error);
      setStatus("❌ Failed to send message. Please try again.");
    });
  };
  return <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Let&apos;s <span className="text-earth-dark">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Let&apos;s build something amazing together. I&apos;m available
            for data analyst roles, digital transformation projects, and exciting collaborations.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button variant="outline" size="lg" asChild className="border-sage-dark/40 text-sage-dark hover:bg-sage-dark/10">
              <a href="mailto:mkhontohendry300@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-earth-dark/40 text-earth-dark hover:bg-earth-dark/10">
              <a href="https://www.linkedin.com/in/hendry-mike-mkhonto-189904220" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild className="bg-sage-dark hover:bg-sage-dark/90 text-white transition-all duration-300" size="lg">
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Layout */}
        

        {/* Why Work With Me */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="max-w-5xl mx-auto mt-24">
          <h3 className="text-3xl font-semibold mb-10 text-center text-foreground">
            Why Work With Me?
          </h3>
          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            {workBenefits.map((benefit, index) => <div key={index} className="flex items-start gap-4 bg-muted/20 p-5 rounded-xl hover:shadow-md transition">
                <CheckCircle className="text-sage-dark mt-1" size={22} />
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.title}
                </p>
              </div>)}
          </div>

        </motion.div>
      </div>
    </section>;
};
export default Contact;