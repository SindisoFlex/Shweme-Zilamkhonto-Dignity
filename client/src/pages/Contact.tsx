import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { BusinessInfo } from "@/components/sections/BusinessInfo";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-1">
        <section className="bg-muted py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent opacity-90"></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We are available 24 hours a day, 7 days a week.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Contact Information */}
              <div className="space-y-10 order-2 lg:order-1">
                <div className="text-center lg:text-left">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">We Are Here To Support Your Family.</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Whether you need immediate assistance or wish to inquire about our policies, our team is ready to help.
                  </p>
                </div>

                {/* Quick Access Mobile Buttons (Hidden on desktop if preferred, but good for all) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-white/10">
                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 text-lg gap-3 shadow-lg shadow-primary/20">
                    <Phone className="h-6 w-6" />
                    Call 0800 000 000
                  </Button>
                  <Button size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#128C7E] h-16 text-lg gap-3 shadow-lg shadow-[#25D366]/20">
                    <MessageCircle className="h-6 w-6" />
                    WhatsApp Us
                  </Button>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 shadow-md hover:border-primary/30 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">24/7 Support Line</h3>
                      <p className="text-muted-foreground mb-2">For immediate assistance</p>
                      <a href="tel:0800000000" className="text-primary text-xl font-bold hover:underline">0800 000 000</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 shadow-md hover:border-primary/30 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Email</h3>
                      <p className="text-muted-foreground mb-2">For general inquiries</p>
                      <a href="mailto:info@shwemefunerals.co.za" className="text-primary font-medium hover:underline text-lg">info@shwemefunerals.co.za</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-white/5 shadow-md hover:border-primary/30 transition-colors">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-foreground text-lg">Main Branch</h3>
                      <p className="text-muted-foreground mb-4">123 Main Road, Zwide, Gqeberha</p>
                      
                      {/* Google Map Placeholder */}
                      <div className="w-full h-64 bg-muted rounded-xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-inner">
                        <div className="absolute inset-0 bg-primary/5"></div>
                        <div className="flex flex-col items-center gap-3 text-muted-foreground z-10 p-4 text-center">
                          <MapPin className="h-10 w-10 text-primary/60" />
                          <span className="text-base font-medium">Interactive Map Placeholder</span>
                          <span className="text-sm">Google Maps integration goes here</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-xl order-1 lg:order-2">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full bg-background border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full bg-background border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full bg-background border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                      placeholder="082 123 4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium text-foreground">Type of Inquiry</label>
                    <select 
                      id="inquiryType" 
                      className="w-full bg-background border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="immediate">Immediate Need (Death has occurred)</option>
                      <option value="planning">Pre-planning a Funeral</option>
                      <option value="cover">Funeral Cover Policies</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-background border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg">
                    Send Message
                  </Button>
                </form>
              </div>

            </div>

            <div className="mt-20">
              <BusinessInfo />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
