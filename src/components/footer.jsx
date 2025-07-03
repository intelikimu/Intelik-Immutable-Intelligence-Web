"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, PhoneCall, MessageSquare } from "lucide-react";

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
    label: "X", 
    href: "https://x.com/intelik", 
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="text-[#000000] dark:text-white"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: "https://linkedin.com/company/intelik", 
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#0A66C2" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  { 
    label: "GitHub", 
    href: "https://github.com/intelik", 
    icon: (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="#6e5494" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )
  },
];

const contactInfo = [
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

  const handleCall = () => {
    window.location.href = `tel:+923470213263`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/923470213263`, '_blank');
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
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="flex items-center text-foreground/70 hover:text-indigo-500 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <span className="mr-2 text-indigo-500">{item.icon}</span>
                    <span>{item.value}</span>
                  </motion.a>
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
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-indigo-500/20 bg-white/5 dark:bg-black/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon}
                </motion.a>
              ))}
              <motion.button
                onClick={handleCall}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-indigo-500/20 bg-white/5 dark:bg-black/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneCall size={14} className="text-green-500" />
              </motion.button>
              <motion.button
                onClick={handleWhatsApp}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-indigo-500/20 bg-white/5 dark:bg-black/5 hover:bg-indigo-500/10 hover:border-indigo-500/40 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48903C18.2579 1.24324 15.2568 0 12.0644 0C5.46761 0 0.129867 5.33774 0.129867 11.9345C0.129867 14.0402 0.708177 16.0937 1.80584 17.8909L0 24L6.25159 22.2366C7.98325 23.2437 9.99865 23.7749 12.0588 23.7749H12.0644C18.6556 23.7749 24 18.4372 24 11.8402C24 8.64775 22.7475 5.73482 20.5027 3.48903ZM12.0644 21.7804C10.2612 21.7804 8.49681 21.2708 6.97521 20.3108L6.61582 20.0937L2.86943 21.1323L3.92468 17.4756L3.68538 17.1056C2.63013 15.5253 2.07453 13.7595 2.07453 11.9345C2.07453 6.43549 6.56539 1.99449 12.07 1.99449C14.7139 1.99449 17.1921 3.01126 19.0401 4.85939C20.8882 6.70752 21.9111 9.18571 21.9054 11.8402C21.9054 17.3449 17.5689 21.7804 12.0644 21.7804ZM17.5295 14.4102C17.2326 14.2617 15.7616 13.5402 15.4872 13.4388C15.2128 13.3374 15.0103 13.2866 14.8022 13.5836C14.5997 13.8805 14.0272 14.5513 13.8472 14.7538C13.6672 14.9619 13.4816 14.9873 13.1847 14.8388C12.8878 14.6902 11.9165 14.3679 10.7712 13.3431C9.87468 12.5423 9.27748 11.5606 9.09189 11.2637C8.9119 10.9667 9.0694 10.8013 9.22689 10.6472C9.36629 10.5077 9.53629 10.2842 9.69378 10.1042C9.85128 9.92424 9.90228 9.79744 10.0037 9.58934C10.1051 9.38684 10.0541 9.20684 9.97768 9.05834C9.90228 8.90984 9.30508 7.43884 9.05018 6.84504C8.80088 6.26684 8.54598 6.34224 8.35478 6.33124C8.17478 6.32024 7.96668 6.32024 7.76418 6.32024C7.56168 6.32024 7.23688 6.39564 6.96248 6.69264C6.68808 6.98964 5.91658 7.71114 5.91658 9.18214C5.91658 10.6532 6.98908 12.0727 7.14658 12.2752C7.30408 12.4777 9.27188 15.5141 12.2892 16.8066C13.0551 17.1431 13.6559 17.3456 14.1261 17.4976C14.9031 17.7496 15.6127 17.7101 16.1773 17.6341C16.8089 17.5496 18.0048 16.9109 18.2652 16.2171C18.5256 15.5233 18.5256 14.9295 18.4502 14.7594C18.3748 14.5894 18.1723 14.4917 17.8754 14.3431L17.5295 14.4102Z" />
                </svg>
              </motion.button>
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