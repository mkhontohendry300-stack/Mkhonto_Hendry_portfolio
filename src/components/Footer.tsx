import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Keitudimps?tab=repositories",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "http://linkedin.com/in/fereshteh-keitumetse-dimpe-4a378b237",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:Keitutimpe@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-charcoal mb-2">
              Mkhonto Hendry Mike
            </h3>
              <p className="text-muted-foreground">
                Data Analyst and Software Development
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-sage-dark transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © {currentYear} Mkhonto Hendry Mike. Built with
              <Heart size={16} className="text-gold fill-current" />
              using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;