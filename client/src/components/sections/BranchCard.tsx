import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

interface BranchCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  imageUrl?: string;
}

export function BranchCard({ name, address, phone, hours, imageUrl }: BranchCardProps) {
  return (
    <Card className="overflow-hidden border-white/5 bg-card hover:border-primary/30 transition-all">
      <div className="h-48 w-full bg-muted relative">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary/10">
            <MapPin className="h-12 w-12 text-primary/40" />
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">{name}</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/80">{address}</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-sm text-foreground/80 hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
            <span className="text-sm text-foreground/80">{hours}</span>
          </div>
        </div>

        <Button variant="outline" className="w-full border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground gap-2">
          <Navigation className="h-4 w-4" />
          Get Directions
        </Button>
      </CardContent>
    </Card>
  );
}
