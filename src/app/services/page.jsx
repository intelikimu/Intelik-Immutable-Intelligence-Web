"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ServicesPage() {
  useEffect(() => {
    // Add any effects here if needed
    document.title = "Our Services | Intelik";
  }, []);

  return (
    <div className="container section-padding">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* AI Solutions */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">AI Solutions</h2>
          <p className="mb-4">Leverage the power of artificial intelligence to transform your business operations and drive innovation.</p>
          <Link href="/solutions/ai" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
        
        {/* Cloud Solutions */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">Cloud Solutions</h2>
          <p className="mb-4">Scale your infrastructure, reduce costs, and enhance security with our tailored cloud solutions.</p>
          <Link href="/solutions/cloud" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
        
        {/* Blockchain Solutions */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">Blockchain Solutions</h2>
          <p className="mb-4">Enhance transparency, security, and efficiency with our enterprise blockchain solutions.</p>
          <Link href="/solutions/blockchain" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
        
        {/* AI Development */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">AI Development</h2>
          <p className="mb-4">Custom AI solutions designed to address your specific business challenges and unlock new opportunities.</p>
          <Link href="/services/ai-development" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
        
        {/* Blockchain Solutions */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">Blockchain Implementation</h2>
          <p className="mb-4">Secure, transparent, and immutable blockchain systems for various applications from supply chain to financial services.</p>
          <Link href="/services/blockchain-solutions" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
        
        {/* Cloud Services */}
        <div className="p-6 rounded-lg border bg-card">
          <h2 className="text-2xl font-bold mb-4">Cloud Services</h2>
          <p className="mb-4">Comprehensive cloud solutions from migration and optimization to custom cloud-native application development.</p>
          <Link href="/services/cloud-services" className="text-accent hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
      
      <div className="mt-16 p-8 rounded-lg glassmorphism">
        <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
        <p className="mb-6">Contact our team to discuss your specific requirements and how we can help you achieve your goals.</p>
        <Link href="/contact" className="px-6 py-3 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors">
          Get in touch
        </Link>
      </div>
    </div>
  );
} 