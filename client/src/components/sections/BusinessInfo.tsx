import { Building2, User, Calendar, MapPin, Phone, Mail, HeartHandshake } from "lucide-react";

interface BusinessInfoProps {
  className?: string;
}

export function BusinessInfo({ className = "" }: BusinessInfoProps) {
  return (
    <div className={`bg-card border border-white/10 rounded-2xl p-8 shadow-xl ${className}`}>
      <h3 className="font-serif text-2xl font-bold text-foreground mb-6 border-b border-white/10 pb-4">
        Business Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Company Name</span>
              <span className="text-foreground font-medium">Shweme Zilamkhonto Funerals</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Founder / Director</span>
              <span className="text-foreground">Demo Director (placeholder)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Founded</span>
              <span className="text-foreground">2005 (placeholder)</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Main Branch</span>
              <span className="text-foreground">Zwide, Port Elizabeth</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Additional Branches</span>
              <span className="text-foreground">Hankey, Humansdorp</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Contact Numbers</span>
              <span className="text-foreground">0800 000 000 (placeholder)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-1">Email</span>
              <span className="text-foreground">info@shwemefunerals.co.za (placeholder)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-start gap-4">
        <HeartHandshake className="h-8 w-8 text-secondary shrink-0" />
        <div>
          <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">Our Community Statement</span>
          <p className="text-foreground/90 italic leading-relaxed text-lg font-serif">
            "Shweme Zilamkhonto Funerals is dedicated to serving families with dignity, compassion, and professionalism during life's most difficult moments."
          </p>
        </div>
      </div>
    </div>
  );
}
