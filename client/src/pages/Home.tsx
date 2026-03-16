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
      title: "R10,000 Cover",
      price: "120",
      description: "Essential cover ensuring a dignified farewell with a minimal waiting period.",
      features: [
        "R10,000 Funeral Cover",
        "Includes standard casket",
        "6-month waiting period",
        "No medicals required",
        "Local transport included"
      ]
    },
    {
      title: "R15,000 Cover",
      price: "180",
      description: "Comprehensive cover providing additional support and premium features.",
      popular: true,
      features: [
        "R15,000 Funeral Cover",
        "Includes premium casket",
        "6-month waiting period",
        "No medicals required",
        "Family car included",
        "Airtime & Grocery benefit"
      ]
    },
    {
      title: "R20,000 Cover",
      price: "250",
      description: "Extensive cover offering maximum financial peace of mind.",
      features: [
        "R20,000 Funeral Cover",
        "Executive casket options",
        "6-month waiting period",
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
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-24 md:py-0">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImg} 
              alt="Respectful memorial service" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
          </div>
          
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mt-12 md:mt-0 flex flex-col items-center text-center">
            <div className="max-w-4xl space-y-6 md:space-y-8">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs md:text-sm font-medium tracking-wider uppercase mb-2">
                Shweme Zilamkhonto Funerals
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-xl">
                Serving Families With <span className="text-primary italic">Dignity</span>, <span className="text-primary italic">Compassion</span>, and Respect
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto font-light">
                Shweme Zilamkhonto Funerals provides professional funeral services designed to support families with care, respect, and trusted community values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 shadow-lg shadow-primary/20">
                  View Services
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 hover:text-white text-lg h-14 px-8 shadow-lg">
                  Contact Us
                </Button>
              </div>
              <div className="pt-10 flex justify-center w-full">
                <div className="border-t border-white/20 pt-6 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm uppercase tracking-widest font-medium">
                  <span className="text-primary">Serving</span>
                  <span className="text-white/90">Zwide</span>
                  <span className="text-primary/50">•</span>
                  <span className="text-white/90">Port Elizabeth</span>
                  <span className="text-primary/50">•</span>
                  <span className="text-white/90">Hankey</span>
                  <span className="text-primary/50">•</span>
                  <span className="text-white/90">Humansdorp</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 md:py-32 bg-card">
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
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
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
              
              <div className="space-y-6 order-1 lg:order-2">
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
        <section className="py-24 md:py-32 bg-card">
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
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              
              <div className="md:w-1/2 space-y-6 relative z-10">
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Virtual Attendance</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Memorial Livestreaming
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Distance shouldn't prevent family from paying their respects. We offer professional, high-quality livestreaming services for relatives who cannot attend in person.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our secure, private links ensure that only invited guests can view the ceremony, allowing loved ones around the world to be part of the farewell.
                </p>
                <div className="pt-6">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Learn About Livestreams
                  </Button>
                </div>
              </div>

              <div className="md:w-1/2 relative w-full">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 scale-105"></div>
                <div className="relative aspect-video bg-card rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-bl from-background/50 to-transparent z-10"></div>
                  <PlayCircle className="h-20 w-20 text-primary/80 z-20 relative" />
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="py-24 md:py-32 bg-card">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm mb-2 block">Our Locations</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Serving the Eastern Cape</h2>
              <p className="text-muted-foreground text-lg">
                We have multiple branches strategically located to serve families across the province with the same standard of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors shadow-md text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Zwide Branch</h3>
                <p className="text-muted-foreground mb-4">Port Elizabeth / Gqeberha</p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto" asChild>
                  <Link href="/branches">View Details & Map <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors shadow-md text-center relative overflow-hidden">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Hankey Branch</h3>
                <p className="text-muted-foreground mb-4">Eastern Cape</p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto" asChild>
                  <Link href="/branches">View Details & Map <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>

              <div className="bg-background rounded-2xl p-8 border border-white/5 hover:border-primary/30 transition-colors shadow-md text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Humansdorp Branch</h3>
                <p className="text-muted-foreground mb-4">Eastern Cape</p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto" asChild>
                  <Link href="/branches">View Details & Map <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
