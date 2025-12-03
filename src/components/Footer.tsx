import { Github, Linkedin, Mail, Heart, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" }
  ];

  const services = [
    "Data Analysis",
    "Visualization",
    "Statistical Modeling",
    "Digital Solutions"
  ];

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
      href: "mailto:mkhontohendry300@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-charcoal">Hendry Mike</h3>
              <p className="text-gray text-sm leading-relaxed">
                Data Analyst & Digital Associate passionate about transforming data into insights.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-charcoal">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4 text-charcoal">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-gray text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-charcoal">Get In Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <a href="mailto:mkhontohendry300@gmail.com" className="text-gray hover:text-gold transition-colors break-all">
                    mkhontohendry300@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gray">Cape Town, South Africa</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <a href="tel:+27793003577" className="text-gray hover:text-gold transition-colors">
                    +27 793003577
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 py-8 border-t border-border">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:text-gold hover:bg-charcoal-light transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center pt-6 border-t border-border">
            <p className="text-gray text-sm flex items-center justify-center gap-1 flex-wrap">
              Made with Javascript <Heart size={14} className="text-gold fill-current" /> by Hendry Mike
              <span className="mx-2">©</span>
              {currentYear}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
