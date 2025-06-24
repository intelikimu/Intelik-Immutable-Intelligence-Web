"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      // In a real application, you would submit the form data to your backend here
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 0 5px rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.1 }
    }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 200, damping: 15 }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="p-8 md:p-12 rounded-xl backdrop-blur-md bg-white/5 dark:bg-black/10 border border-indigo-500/20 text-center"
        variants={successVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 mb-6"
          animate={{ scale: [0.8, 1.2, 1] }}
          transition={{ duration: 0.6, times: [0, 0.5, 1] }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
          Thanks for reaching out!
        </h3>
        <p className="text-foreground/80 mb-6">
          We've received your message and will get back to you shortly.
        </p>
        <motion.button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 border border-indigo-500/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send another message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="p-8 md:p-12 rounded-xl backdrop-blur-md bg-white/5 dark:bg-black/10 border border-indigo-500/20 shadow-lg shadow-indigo-900/5 relative overflow-hidden"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-500/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/[0.03] to-violet-500/[0.03] pointer-events-none" />

      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
        Get in Touch
      </h2>
      
      <div className="space-y-6 relative z-10">
        <motion.div variants={fieldVariants}>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground/90">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 border border-indigo-500/20 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none transition-all duration-300"
            placeholder="Your name"
          />
        </motion.div>
        
        <motion.div variants={fieldVariants}>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground/90">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 border border-indigo-500/20 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none transition-all duration-300"
            placeholder="your.email@example.com"
          />
        </motion.div>
        
        <motion.div variants={fieldVariants}>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-foreground/90">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 border border-indigo-500/20 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none transition-all duration-300"
            placeholder="Your company name"
          />
        </motion.div>
        
        <motion.div variants={fieldVariants}>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground/90">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-white/5 dark:bg-black/10 border border-indigo-500/20 focus:border-indigo-500/50 focus:ring focus:ring-indigo-500/20 outline-none transition-all duration-300 resize-none"
            placeholder="Tell us about your project or inquiry"
          />
        </motion.div>
        
        {error && (
          <motion.div 
            className="px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-medium relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative z-10 flex items-center justify-center">
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </span>
          {/* Animated gradient background for the button */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0"
            animate={{ opacity: isSubmitting ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm; 