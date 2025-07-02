"use client";

import Link from "next/link";
import { Container } from "./ui/container";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-accent/5">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific needs and discover how our innovative solutions can drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="px-8 py-6 text-base font-medium bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 border-0 rounded-full"
            >
              <Link href="/contact">
                Schedule a Consultation
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-base font-medium backdrop-blur-sm border border-indigo-500/20 rounded-full"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
