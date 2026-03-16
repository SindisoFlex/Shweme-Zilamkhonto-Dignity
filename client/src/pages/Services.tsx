import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { ServiceCard } from "@/components/sections/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Traditional Funerals",
      description: "Dignified and culturally respectful burial services tailored to your family's traditions.",
      features: ["Premium Caskets", "Transport & Hearse", "Family Cars", "Grave Equipment"]
    },
    {
      title: "Cremation Services",
      description: "Professional cremation options with meaningful memorial service arrangements.",
      features: ["Direct Cremation", "Memorial Service Setup", "Urn Selection", "Documentation"]
    },
    {
      title: "Repatriation",
      description: "Safe and respectful transport of your loved one across borders or provinces.",
      features: ["National Transport", "Cross-border Logistics", "Embassy Documentation", "Flight Arrangements"]
    },
    {
      title: "Tombstones & Memorials",
      description: "Beautifully crafted permanent memorials to honor and remember your loved one.",
      features: ["Custom Designs", "Granite & Marble", "Professional Installation", "Unveiling Ceremonies"]
    },
    {
      title: "Catering & Marquees",
      description: "Complete setup for the after-tears gathering to host family and community.",
      features: ["Large Marquees", "Seating & Tables", "Professional Catering", "Mobile Toilets"]
    },
    {
      title: "Floral Arrangements",
      description: "Elegant floral tributes for the casket, church, and gravesite.",
      features: ["Casket Sprays", "Wreaths", "Family Tributes", "Church Decorations"]
    },
    {
      title: "Program Design & Printing",
      description: "High-quality custom funeral programs and obituaries.",
      features: ["Custom Design", "Photo Retouching", "Premium Paper", "Fast Turnaround"]
    },
    {
      title: "Grief Counseling",
      description: "Professional support services to help families navigate their loss.",
      features: ["Individual Sessions", "Family Therapy", "Support Groups", "Resource Recommendations"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Comprehensive and dignified funeral arrangements tailored to honor your loved one.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
