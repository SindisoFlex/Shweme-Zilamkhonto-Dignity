import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { CoverPlanCard } from "@/components/sections/CoverPlanCard";

export default function FuneralCover() {
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
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
