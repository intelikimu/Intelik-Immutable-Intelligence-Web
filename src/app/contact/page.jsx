"use client";

import { useState } from "react";
import { Container } from "../../components/ui/container";
import ContactForm from "../../components/contact-form";
import { MapPin, Phone, Mail, Clock, PhoneCall, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Setting document title via useEffect
import { useEffect } from "react";

// ...rest of imports

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Gulshan-e-Iqbal 13-C", "Karachi", "Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+923470213263"],
    actions: true,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["business@intelik.net", "contact@intelik.net"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 10AM - 6PM", "Saturday - Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [activePhone, setActivePhone] = useState(null);
  
  useEffect(() => {
    document.title = "Contact Us | Intelik";
  }, []);

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
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Have a question or ready to explore how Intelik can help your enterprise? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      {item.details.map((detail, i) => (
                        <div key={i} className="relative">
                          {item.actions ? (
                            <div className="relative">
                              <p 
                                onClick={() => handlePhoneClick(detail)}
                                className="cursor-pointer hover:text-indigo-500 transition-colors inline-block"
                              >
                                {detail}
                              </p>
                              
                              <AnimatePresence>
                                {activePhone === detail && (
                                  <motion.div 
                                    className="flex mt-2 gap-3"
                                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <motion.button
                                      onClick={() => handleCall(detail)}
                                      className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <PhoneCall size={18} />
                                    </motion.button>
                                    <motion.button
                                      onClick={() => handleWhatsApp(detail)}
                                      className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:bg-emerald-600"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <MessageSquare size={18} />
                                    </motion.button>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          ) : (
                            <p>{detail}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 md:mt-20 h-96 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.121343819712!2d67.07572887345643!3d24.92746242550261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338b8d2e25b23%3A0xd0c826708a48971b!2sGulshan-e-Iqbal%20Block%2013%20C%2C%20Gulshan-e-Iqbal%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1656789012345!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Intelik office location"
            aria-label="Map showing Intelik office location in Karachi, Pakistan"
          ></iframe>
        </div>
      </Container>
    </div>
  );
} 