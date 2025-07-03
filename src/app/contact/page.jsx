"use client";

import { useState } from "react";
import { Container } from "../../components/ui/container";
import ContactForm from "../../components/contact-form";
import { MapPin, Phone, Mail, Clock, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

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
    details: [
      { email: "business@intelik.net", href: "mailto:business@intelik.net" },
      { email: "contact@intelik.net", href: "mailto:contact@intelik.net" }
    ],
    isEmail: true,
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 10AM - 6PM", "Saturday - Sunday: Closed"],
  },
];

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact Us | Intelik";
  }, []);

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
                              <p className="hover:text-indigo-500 transition-colors mb-2">
                                {detail}
                              </p>
                              
                              <div className="flex gap-3">
                                <motion.button
                                  onClick={() => handleCall(detail)}
                                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <PhoneCall size={18} />
                                </motion.button>
                                <motion.button
                                  onClick={() => handleWhatsApp(detail)}
                                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    stroke="none"
                                  >
                                    <path
                                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                    />
                                  </svg>
                                </motion.button>
                              </div>
                            </div>
                          ) : item.isEmail ? (
                            <motion.a
                              href={detail.href}
                              className="flex items-center text-muted-foreground hover:text-indigo-500 transition-colors"
                              whileHover={{ x: 2 }}
                            >
                              <span>{detail.email}</span>
                            </motion.a>
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