import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { PlayCircle, Video, Users, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Livestream() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Memorial Livestreaming</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Connecting loved ones from anywhere in the world.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Distance Shouldn't Stop You From Saying Goodbye
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We offer professional, high-quality livestreaming services to ensure that family members and friends who cannot attend the service in person can still participate and pay their respects from anywhere in the world.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <Video className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">HD Video & Audio</h3>
                    <p className="text-sm text-muted-foreground">Clear, professional broadcasting equipment ensures everyone can see and hear.</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <Wifi className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">Stable Connection</h3>
                    <p className="text-sm text-muted-foreground">We use reliable internet solutions to prevent buffering during the service.</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">Unlimited Viewers</h3>
                    <p className="text-sm text-muted-foreground">Share the private link with as many people as you need.</p>
                  </div>
                  <div className="bg-card p-6 rounded-xl border border-white/5">
                    <PlayCircle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">Recording Available</h3>
                    <p className="text-sm text-muted-foreground">A digital copy of the service is provided to the family afterwards.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Upcoming Livestreams</h3>
                
                <div className="space-y-4">
                  {/* Placeholder for actual livestreams */}
                  <div className="p-4 border border-white/5 rounded-lg bg-background/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-bold text-foreground">Late Mr. S. Nkosi</h4>
                      <p className="text-sm text-muted-foreground">Saturday, 24 April 2026 • 09:00 AM</p>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                      View Stream
                    </Button>
                  </div>
                  
                  <div className="p-4 border border-white/5 rounded-lg bg-background/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="font-bold text-foreground">Late Mrs. T. Dlamini</h4>
                      <p className="text-sm text-muted-foreground">Sunday, 25 April 2026 • 10:00 AM</p>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                      View Stream
                    </Button>
                  </div>
                  
                  <div className="p-6 text-center border border-dashed border-white/10 rounded-lg text-muted-foreground">
                    Looking for an older stream? <a href="#" className="text-primary hover:underline">Contact us for the recording.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
