import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { BusinessInfo } from "@/components/sections/BusinessInfo";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-tight tracking-tight text-primary">
                Shweme Zilamkhonto
              </span>
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Funerals
              </span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Serving families with dignity and compassion.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-primary/10">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/funeral-cover" className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Funeral Cover
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-2.5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-sm text-muted-foreground mb-0.5">Primary Phone</span>
                  <a href="tel:0800000000" className="text-foreground hover:text-primary transition-colors font-medium">0800 000 000</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-primary/10 p-2.5 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-sm text-muted-foreground mb-0.5">Email</span>
                  <a href="mailto:info@shwemefunerals.co.za" className="text-foreground hover:text-primary transition-colors font-medium">info@shwemefunerals.co.za</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Main Branches */}
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Our Branches</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-full group-hover:bg-white/10 transition-colors mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-medium text-foreground text-base">Zwide</span>
                  <span className="text-muted-foreground text-sm">Port Elizabeth</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-full group-hover:bg-white/10 transition-colors mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-medium text-foreground text-base">Hankey</span>
                  <span className="text-muted-foreground text-sm">Eastern Cape</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-white/5 p-2.5 rounded-full group-hover:bg-white/10 transition-colors mt-0.5">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="font-medium text-foreground text-base">Humansdorp</span>
                  <span className="text-muted-foreground text-sm">Eastern Cape</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Shweme Zilamkhonto Funerals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
