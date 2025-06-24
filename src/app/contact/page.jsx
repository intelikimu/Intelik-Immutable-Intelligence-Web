import { Container } from "../../components/ui/container";
import ContactForm from "../../components/contact-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Intelik",
  description: "Get in touch with our team to discuss your enterprise technology needs and how we can help transform your business.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    details: ["Gulshan-e-Iqbal 13-C", "Karachi", "Pakistan"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 301 2345678", "+92 321 8765432"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@intelik.com", "support@intelik.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 10AM - 6PM", "Saturday - Sunday: Closed"],
  },
];

export default function ContactPage() {
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
                  <div>
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <div className="space-y-1 text-muted-foreground">
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
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