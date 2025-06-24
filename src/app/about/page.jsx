import { Container } from "../../components/ui/container";
import Image from "next/image";

export const metadata = {
  title: "About Us | Intelik",
  description: "Learn about Intelik, our mission, values, and the team behind our enterprise AI and blockchain solutions.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering <span className="gradient-text">Enterprise Innovation</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Founded in 2025, Intelik is at the forefront of enterprise technology innovation, combining AI, blockchain, and cloud expertise to transform how businesses operate.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of technologists, strategists, and industry experts work together to deliver solutions that not only solve today's challenges but prepare organizations for tomorrow's opportunities.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="text-3xl font-bold gradient-text mb-2">40+</div>
                <div className="text-muted-foreground">Enterprise Clients</div>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <div className="text-3xl font-bold gradient-text mb-2">92%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              alt="Team collaboration at Intelik"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission & <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We're guided by a set of core principles that shape our approach to innovation and client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Client-Centric Innovation",
                description: "We develop solutions that address real business needs, not technology for technology's sake.",
              },
              {
                title: "Technical Excellence",
                description: "We maintain the highest standards in our engineering practices and technology implementations.",
              },
              {
                title: "Ethical AI & Blockchain",
                description: "We're committed to responsible innovation that considers societal impact and data privacy.",
              },
              {
                title: "Continuous Evolution",
                description: "We constantly evolve our skills and solutions to stay ahead of the technology curve.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 