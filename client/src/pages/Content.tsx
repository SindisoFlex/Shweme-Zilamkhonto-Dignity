import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";

export default function Content() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Resources & Content</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Helpful articles, guides, and resources during difficult times.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Content Cards */}
              <div className="bg-card rounded-xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Guide</span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    What to Do When a Loved One Passes Away
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A step-by-step guide on the immediate actions to take and who to contact in the first 24 hours.
                  </p>
                  <a href="#" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    Read More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 block">Support</span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    Navigating Grief and Loss
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Understanding the grieving process and finding ways to cope with the loss of a family member.
                  </p>
                  <a href="#" className="text-secondary text-sm font-medium hover:underline flex items-center gap-1">
                    Read More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all group">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/30 group-hover:scale-105 transition-transform duration-500"></div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">Information</span>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Understanding Funeral Policies
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Important terms and concepts you need to know when selecting or claiming from a funeral cover plan.
                  </p>
                  <a href="#" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    Read More <span aria-hidden="true">→</span>
                  </a>
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
