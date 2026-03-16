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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Whether you need immediate assistance or wish to inquire about our policies, our team is ready to help.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-white/5">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">24/7 Support Line</h3>
                      <p className="text-muted-foreground mb-2">For immediate assistance</p>
                      <a href="tel:0800000000" className="text-primary text-xl font-bold hover:underline">0800 000 000</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-white/5">
                    <div className="h-12 w-12 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">WhatsApp</h3>
                      <p className="text-muted-foreground mb-2">Message us directly</p>
                      <a href="#" className="text-primary font-medium hover:underline">Chat with us</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-white/5">
                    <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Email</h3>
                      <p className="text-muted-foreground mb-2">For general inquiries</p>
                      <a href="mailto:info@shwemefunerals.co.za" className="text-primary font-medium hover:underline">info@shwemefunerals.co.za</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-xl">
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
