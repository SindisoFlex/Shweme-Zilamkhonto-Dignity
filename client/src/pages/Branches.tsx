import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { BranchCard } from "@/components/sections/BranchCard";
import branchImg from "@/assets/images/branch.jpg";

export default function Branches() {
  const branches = [
    {
      name: "Zwide Head Office",
      address: "123 Main Road, Zwide, Gqeberha, 6201",
      phone: "041 000 0001",
      hours: "Mon-Fri: 08:00 - 17:00 | Sat: 08:00 - 13:00",
      imageUrl: branchImg
    },
    {
      name: "Hankey Branch",
      address: "45 Voortrekker Street, Hankey, 6350",
      phone: "042 000 0002",
      hours: "Mon-Fri: 08:00 - 16:30 | Sat: 08:00 - 12:00"
    },
    {
      name: "Humansdorp Branch",
      address: "88 Main Street, Humansdorp, 6300",
      phone: "042 000 0003",
      hours: "Mon-Fri: 08:00 - 16:30 | Sat: 08:00 - 12:00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Branches</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Serving the Eastern Cape. Find a Shweme Zilamkhonto Funerals branch near you.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map((branch, index) => (
                <BranchCard key={index} {...branch} />
              ))}
            </div>
            
            <div className="mt-16 bg-card border border-white/5 rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">24/7 National Collection Network</h3>
              <p className="text-muted-foreground mb-6">
                While our main branches are located in the Eastern Cape, we have a network of partners that allows us to collect your loved ones from anywhere in South Africa.
              </p>
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full">
                <span className="text-primary font-bold text-xl">Call 0800 000 000 for immediate assistance</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
