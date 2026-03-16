import { HeartHandshake, ShieldCheck, LifeBuoy, Star } from "lucide-react";

export function TrustPillars() {
  const pillars = [
    {
      title: "Community Focus",
      description: "Serving families from the heart of the community.",
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    },
    {
      title: "Professional Care",
      description: "Our team handles every service with respect and attention to detail.",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    },
    {
      title: "Reliable Support",
      description: "We guide families step by step through funeral arrangements.",
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    },
    {
      title: "Dignified Services",
      description: "Every life is honored with professionalism and compassion.",
      icon: <Star className="h-8 w-8 text-primary" />,
    }
  ];

  return (
    <section className="py-24 bg-card border-y border-white/5">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">Why Families Trust Us</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-background border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-colors text-center group"
            >
              <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
