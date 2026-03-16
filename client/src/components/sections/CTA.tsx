import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-secondary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/80 to-background"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            We Are Here When You Need Us Most
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Losing a loved one is never easy. Our compassionate team is available 24/7 to support you through every step of the funeral arrangement process.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-3 font-medium h-16 px-10 text-lg shadow-lg shadow-primary/20">
              <Phone className="h-6 w-6" />
              Call Now: 0800 000 000
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] gap-3 font-medium h-16 px-10 text-lg shadow-lg shadow-[#25D366]/20">
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
