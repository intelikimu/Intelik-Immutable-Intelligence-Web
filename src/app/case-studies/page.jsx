"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CaseStudiesPage() {
  useEffect(() => {
    document.title = "Case Studies | Intelik";
  }, []);

  const caseStudies = [
    {
      id: "fintech-fraud-detection",
      title: "AI-Powered Fraud Detection for Global Fintech",
      industry: "Financial Services",
      description: "How we reduced false positives by 87% while increasing fraud detection rates by 34% for a leading financial technology provider.",
      results: [
        "87% reduction in false positive alerts",
        "34% increase in fraud detection rate",
        "Estimated $15M in annual savings",
        "95% reduction in manual review time"
      ]
    },
    {
      id: "healthcare-blockchain",
      title: "Secure Patient Data Sharing with Blockchain",
      industry: "Healthcare",
      description: "Implementing a HIPAA-compliant blockchain solution for secure patient data sharing across multiple healthcare providers.",
      results: [
        "100% HIPAA compliance with audit trails",
        "73% reduction in duplicate medical tests",
        "Improved care coordination across 12 hospitals",
        "Enhanced patient trust with transparent access"
      ]
    },
    {
      id: "retail-cloud-transformation",
      title: "Retail Cloud Migration and Transformation",
      industry: "Retail",
      description: "Improving system reliability to 99.99% while reducing operational costs by 43% for a national retail chain.",
      results: [
        "99.99% system reliability, up from 97.3%",
        "43% reduction in operational IT costs",
        "5x capacity during peak seasons",
        "70% faster deployment of new features"
      ]
    },
    {
      id: "manufacturing-automation",
      title: "Smart Factory Automation",
      industry: "Manufacturing",
      description: "Implementing IoT sensors and AI-driven analytics to optimize production processes for a manufacturing client.",
      results: [
        "28% increase in production efficiency",
        "45% reduction in quality defects",
        "17% decrease in energy consumption",
        "ROI achieved within 14 months"
      ]
    },
    {
      id: "logistics-optimization",
      title: "Supply Chain Optimization Platform",
      industry: "Logistics",
      description: "Building a comprehensive supply chain visibility and optimization platform for a global logistics company.",
      results: [
        "32% reduction in delivery times",
        "24% decrease in transportation costs",
        "Real-time tracking across 14 countries",
        "85% improvement in delivery prediction accuracy"
      ]
    },
    {
      id: "education-platform",
      title: "Personalized Learning Platform",
      industry: "Education",
      description: "Creating an adaptive learning platform that personalizes educational content based on student performance and learning patterns.",
      results: [
        "41% improvement in student engagement",
        "27% increase in completion rates",
        "Personalized learning paths for over 50,000 students",
        "18% higher test scores compared to traditional methods"
      ]
    }
  ];

  return (
    <div className="container section-padding">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-muted-foreground">
          Explore how we've helped businesses across industries solve complex challenges and achieve measurable results.
        </p>
      </div>
      
      {/* Case studies grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {caseStudies.map(study => (
          <div key={study.id} className="border rounded-xl overflow-hidden flex flex-col bg-card">
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-muted mb-4">
                {study.industry}
              </span>
              <h2 className="text-xl font-bold mb-3">{study.title}</h2>
              <p className="text-muted-foreground mb-4">{study.description}</p>
              
              <h3 className="font-semibold mb-2">Key Results:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-6">
                {study.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto p-6 pt-0">
              <Link href={`/case-studies/${study.id}`} className="text-accent hover:underline">
                Read full case study →
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA section */}
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-accent/10 to-primary/10 p-8 md:p-12 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to become our next success story?
        </h2>
        <p className="text-lg mb-8">
          Let's discuss how our solutions can address your business challenges and deliver measurable results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/services" 
            className="px-6 py-3 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
          >
            Explore Our Services
          </Link>
          <Link 
            href="/contact" 
            className="px-6 py-3 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 