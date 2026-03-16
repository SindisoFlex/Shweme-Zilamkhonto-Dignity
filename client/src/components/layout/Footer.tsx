import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { BusinessInfo } from "@/components/sections/BusinessInfo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <BusinessInfo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif font-bold text-xl">
                SZ
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight tracking-tight text-primary">
                  Shweme Zilamkhonto
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Funerals
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Serving families with dignity, respect, and compassion. We are here for you when you need us most, providing professional funeral services across the Eastern Cape.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Funeral Services</Link>
              </li>
              <li>
                <Link href="/funeral-cover" className="text-muted-foreground hover:text-primary transition-colors text-sm">Funeral Cover Plans</Link>
              </li>
              <li>
                <Link href="/livestream" className="text-muted-foreground hover:text-primary transition-colors text-sm">Memorial Livestreams</Link>
              </li>
              <li>
                <Link href="/branches" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Branches</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">24/7 Support Line</span>
                  <a href="tel:0800000000" className="text-muted-foreground hover:text-primary transition-colors text-sm">0800 000 000</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Email Us</span>
                  <a href="mailto:info@shwemefunerals.co.za" className="text-muted-foreground hover:text-primary transition-colors text-sm">info@shwemefunerals.co.za</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Main Branches */}
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-6">Main Branches</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Zwide Head Office</span>
                  <span className="text-muted-foreground text-sm">123 Main Road, Zwide, Gqeberha</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">Hankey Branch</span>
                  <span className="text-muted-foreground text-sm">45 Voortrekker Street, Hankey</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shweme Zilamkhonto Funerals. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
