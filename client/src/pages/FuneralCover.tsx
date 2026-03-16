import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CoverPlanCard } from "@/components/sections/CoverPlanCard";

export default function FuneralCover() {
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
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Funeral Cover Plans</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Secure peace of mind for you and your family with our affordable and comprehensive cover options.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
              {coverPlans.map((plan, index) => (
                <div key={index} className={plan.popular ? "md:-mt-8 md:mb-8" : ""}>
                  <CoverPlanCard {...plan} />
                </div>
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
