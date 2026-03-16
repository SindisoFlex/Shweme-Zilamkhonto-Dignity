import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-secondary/10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            We Are Here When You Need Us Most
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Losing a loved one is never easy. Our compassionate team is available 24/7 to support you through every step of the funeral arrangement process.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-medium">
              <Phone className="h-5 w-5" />
              Call Now: 0800 000 000
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] gap-2 font-medium">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2 font-medium asChild">
              <Link href="/branches">
                <MapPin className="h-5 w-5" />
                Visit a Branch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
