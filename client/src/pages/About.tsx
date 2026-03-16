import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { BusinessInfo } from "@/components/sections/BusinessInfo";
import { TrustPillars } from "@/components/sections/TrustPillars";
import aboutImg from "@/assets/images/about.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A legacy of dignified service and community care in the Eastern Cape.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Founded with a vision to provide dignified, respectful, and compassionate funeral services, Shweme Zilamkhonto Funerals has grown to become a trusted name in the Eastern Cape communities.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Led by Demo Director, our team understands that saying goodbye to a loved one is one of life's most difficult moments. We are dedicated to easing this burden by handling every detail with the utmost professionalism and cultural sensitivity.
                </p>
                <div className="pt-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Values</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <strong className="text-foreground block">Dignity</strong>
                        <span className="text-muted-foreground">Treating every individual with the highest level of respect.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <strong className="text-foreground block">Compassion</strong>
                        <span className="text-muted-foreground">Supporting families with empathy during their time of grief.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <strong className="text-foreground block">Professionalism</strong>
                        <span className="text-muted-foreground">Delivering reliable and high-quality services consistently.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative space-y-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -rotate-3"></div>
                  <img 
                    src={aboutImg} 
                    alt="Our Director" 
                    className="relative z-10 rounded-xl shadow-2xl w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-20">
              <BusinessInfo />
            </div>
          </div>
        </section>

        <TrustPillars />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
