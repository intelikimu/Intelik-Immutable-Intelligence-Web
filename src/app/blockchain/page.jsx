import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";
import { BlockchainContent } from "./blockchain-content";

export const metadata = {
  title: "Blockchain Solutions | Intelik",
  description: "Explore how Intelik's blockchain solutions can transform your business with secure, transparent, and efficient distributed ledger technology.",
};

export default function BlockchainPage() {
  return (
    <BlockchainContent />
  );
}

// Statistics
const stats = [
  { value: "68%", label: "Reduction in transaction reconciliation time" },
  { value: "42%", label: "Decrease in supply chain disputes" },
  { value: "3.5x", label: "ROI for blockchain implementations" }
];

// Blockchain capabilities
const capabilities = [
  {
    title: "Smart Contracts",
    description: "Self-executing contracts with the terms directly written into code, automating agreements and eliminating intermediaries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Distributed Ledger",
    description: "Secure, transparent, and tamper-proof record-keeping systems that eliminate single points of failure.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Tokenization",
    description: "Converting rights to an asset into a digital token on a blockchain, enabling new models of ownership and exchange.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Consensus Mechanisms",
    description: "Customized validation processes that ensure network agreement without compromising on security or performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Industry applications
const industries = [
  {
    title: "Financial Services",
    description: "Revolutionizing payments, settlements, and asset management with transparent, secure blockchain systems.",
    benefits: [
      "Real-time settlement reducing costs by up to 70%",
      "Enhanced regulatory compliance through immutable audit trails",
      "Streamlined cross-border payments and remittances"
    ]
  },
  {
    title: "Supply Chain",
    description: "End-to-end visibility and traceability from manufacturer to consumer, enhancing trust and efficiency.",
    benefits: [
      "Real-time tracking of goods throughout the supply chain",
      "Counterfeit prevention through verified product provenance",
      "Automated supplier payments through smart contracts"
    ]
  },
  {
    title: "Healthcare",
    description: "Secure, interoperable patient data and pharmaceutical tracking systems that enhance care coordination.",
    benefits: [
      "Secure, patient-controlled health record access",
      "Counterfeit drug prevention through verifiable tracking",
      "Streamlined claims processing with reduced disputes"
    ]
  }
]; 