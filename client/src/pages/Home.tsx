import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CoverPlanCard } from "@/components/sections/CoverPlanCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/images/hero.jpg";
import communityImg from "@/assets/images/community.jpg";
import { Link } from "wouter";

export default function Home() {
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
    }
  ];

  const coverPlans = [
    {
      title: "Individual Plan",
      price: "120",
      description: "Essential cover for a single member with dignified funeral benefits.",
      features: [
        "Up to R20,000 cover",
        "No medicals required",
        "Includes standard casket",
        "Local transport",
        "Grocery benefit"
      ]
    },
    {
      title: "Family Plan",
      price: "250",
      description: "Comprehensive cover for the main member, spouse, and up to 5 children.",
      popular: true,
      features: [
        "Up to R30,000 cover",
        "No medicals required",
        "Includes premium casket",
        "Family car included",
        "Airtime & Grocery benefit",
        "Repatriation within SA"
      ]
    },
    {
      title: "Extended Family Plan",
      price: "450",
      description: "Extensive cover including parents and extended family members.",
      features: [
        "Up to R40,000 cover",
        "Cover for up to 14 members",
        "Executive casket options",
        "Full funeral service provision",
        "Catering benefit included",
        "Tombstone discount"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Respectful memorial service" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium tracking-wider uppercase mb-2">
                Shweme Zilamkhonto Funerals
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                Serving Families With <span className="text-primary italic">Dignity</span>, <span className="text-primary italic">Respect</span>, and Compassion
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl font-light">
                Providing professional, family-centered funeral services and comprehensive cover plans to our communities when they need us most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-12 px-8">
                  View Services
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white text-base h-12 px-8">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-card">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
              <p className="text-muted-foreground text-lg">
                We offer comprehensive, dignified services tailored to honor your loved ones according to your cultural traditions and personal wishes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="link" className="text-primary hover:text-primary/80 font-medium text-lg gap-2" asChild>
                <Link href="/services">
                  View all our services <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Community Story Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 translate-x-20"></div>
          
          <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl rotate-3"></div>
                <img 
                  src={communityImg} 
                  alt="Community support" 
                  className="relative z-10 rounded-xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl z-20 border border-white/5 max-w-xs hidden md:block">
                  <HeartHandshake className="h-10 w-10 text-primary mb-3" />
                  <p className="font-serif italic text-foreground text-lg">"They stood by us like family during our darkest hour."</p>
                  <p className="text-sm text-muted-foreground mt-2">- The Mokoena Family</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Commitment</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Deeply Rooted in Our Communities
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Led by Demo Director, Shweme Zilamkhonto Funerals has been a pillar of support for Eastern Cape communities for over two decades. We understand the cultural significance of a dignified send-off.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our approach goes beyond business; it is a calling to serve. We ensure that every family, regardless of their background, receives professional, respectful, and compassionate care.
                </p>
                <div className="pt-6">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Read Our Story
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cover Plans Section */}
        <section className="py-24 bg-card/50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Funeral Cover Plans</h2>
              <p className="text-muted-foreground text-lg">
                Peace of mind for you and your family. Choose an affordable plan that ensures a dignified farewell without financial stress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {coverPlans.map((plan, index) => (
                <div key={index} className={plan.popular ? "md:-mt-8 md:mb-8" : ""}>
                  <CoverPlanCard {...plan} />
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center max-w-2xl mx-auto bg-background p-6 rounded-xl border border-white/5">
              <p className="text-foreground mb-4">Need a custom plan for your society, church, or stokvel?</p>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Contact us for Group Cover
              </Button>
            </div>
          </div>
        </section>

        {/* Livestream Highlight */}
        <section className="py-20 bg-background border-y border-white/5">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between bg-card rounded-2xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              
              <div className="md:w-2/3 space-y-4 relative z-10 mb-8 md:mb-0">
                <div className="flex items-center gap-3">
                  <PlayCircle className="h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Memorial Livestreaming</h3>
                </div>
                <p className="text-muted-foreground text-lg">
                  Distance shouldn't prevent family from paying their respects. We offer professional, high-quality livestreaming services for relatives who cannot attend in person.
                </p>
              </div>
              
              <div className="md:w-1/3 flex justify-md-end relative z-10 w-full md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn About Livestreams
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
