"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, Phone, PhoneCall, MessageSquare } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Workflow Automation", href: "/services#ai-automation" },
      { label: "Blockchain Solutions", href: "/services#blockchain" },
      { label: "Cloud Architecture", href: "/services#cloud" },
      { label: "Enterprise Software", href: "/services#software" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const socialLinks = [
  { 
    label: "Twitter", 
    href: "https://twitter.com/intelik", 
    icon: <Twitter size={16} /> 
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/company/intelik", 
    icon: <Linkedin size={16} /> 
  },
  { 
    label: "GitHub", 
    href: "https://github.com/intelik", 
    icon: <Github size={16} /> 
  },
];

const contactInfo = [
  {
    label: "Phone",
    value: "+923470213263",
    icon: <Phone size={16} />,
    href: "tel:+923470213263"
  },
  {
    label: "Business Email",
    value: "business@intelik.net",
    icon: <Mail size={16} />,
    href: "mailto:business@intelik.net"
  },
  {
    label: "Contact Email",
    value: "contact@intelik.net",
    icon: <Mail size={16} />,
    href: "mailto:contact@intelik.net"
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [activePhone, setActivePhone] = useState(null);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const handlePhoneClick = (phone) => {
    setActivePhone(activePhone === phone ? null : phone);
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = (phone) => {
    // Remove any non-digit characters from the phone number
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanPhone}`, '_blank');
  };

  return (
    <motion.footer 
      className="py-12 mt-16 border-t relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/5 dark:bg-black/10 -z-10"></div>
      
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
      
      {/* Decorative tech elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 border border-indigo-500/10 rounded-full opacity-60"></div>
      <div className="absolute bottom-1/3 right-10 w-40 h-40 border border-indigo-500/10 rounded-full opacity-60"></div>
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"
        animate={{ 
          boxShadow: ["0 0 0 rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.5)", "0 0 0 rgba(99, 102, 241, 0)"] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand and description */}
          <motion.div 
            className="md:col-span-5 lg:col-span-4"
            variants={fadeInUp}
          >
            <Link href="/" className="inline-block">
              <motion.h2 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                INTELIK
              </motion.h2>
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Enterprise-grade AI automation, blockchain solutions, cloud architecture, and custom software development for forward-thinking organizations.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 space-y-2">
              {contactInfo.map((item) => (
                <div key={item.label} className="relative">
                  {item.label === "Phone" ? (
                    <div>
                      <motion.div
                        className="flex items-center text-foreground/70 hover:text-indigo-500 transition-colors cursor-pointer"
                        onClick={() => handlePhoneClick(item.value)}
                        whileHover={{ x: 2 }}
                      >
                        <span className="mr-2 text-indigo-500">{item.icon}</span>
                        <span>{item.value}</span>
                      </motion.div>
                      
                      <AnimatePresence>
                        {activePhone === item.value && (
                          <motion.div 
                            className="flex mt-2 gap-3"
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.button
                              onClick={() => handleCall(item.value)}
                              className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <PhoneCall size={14} />
                            </motion.button>
                            <motion.button
                              onClick={() => handleWhatsApp(item.value)}
                              className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <MessageSquare size={14} />
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="flex items-center text-foreground/70 hover:text-indigo-500 transition-colors"
                      whileHover={{ x: 2 }}
                    >
                      <span className="mr-2 text-indigo-500">{item.icon}</span>
                      <span>{item.value}</span>
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-indigo-500/20 text-indigo-500 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
            variants={staggerContainer}
          >
            {footerLinks.map((group) => (
              <motion.div key={group.title} variants={fadeInUp}>
                <h3 className="font-semibold mb-4 text-foreground">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-foreground/70 hover:text-indigo-500 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom section with copyright */}
        <motion.div 
          className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/60 text-sm"
          variants={fadeInUp}
        >
          <p>© {currentYear} Intelik. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-indigo-500 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-indigo-500 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </Container>
    </motion.footer>
  );
} 