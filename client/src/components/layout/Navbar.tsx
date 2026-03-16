import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/funeral-cover", label: "Funeral Cover" },
  { href: "/livestream", label: "Livestream" },
  { href: "/content", label: "Content" },
  { href: "/branches", label: "Branches" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              {/* Placeholder Logo */}
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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button className="bg-[#25D366] text-white hover:bg-[#128C7E] gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-background px-4 py-6 shadow-xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              <Button variant="outline" className="w-full justify-center border-primary text-primary hover:bg-primary hover:text-primary-foreground gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button className="w-full justify-center bg-[#25D366] text-white hover:bg-[#128C7E] gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
