import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";

interface CoverPlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export function CoverPlanCard({ title, price, description, features, popular }: CoverPlanCardProps) {
  return (
    <Card className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 rounded-2xl shadow-md hover:shadow-lg ${
      popular ? "border-primary bg-card/80 shadow-primary/20 hover:shadow-primary/30" : "border-white/5 bg-card hover:border-primary/20"
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10 tracking-wider">
          MOST POPULAR
        </div>
      )}
      
      <CardHeader className={`${popular ? "bg-primary/5" : ""} pb-8 pt-8`}>
        <CardTitle className="font-serif text-2xl text-foreground">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-3 min-h-[3rem]">
          {description}
        </CardDescription>
        <div className="mt-6">
          <span className="text-4xl md:text-5xl font-bold text-primary">R{price}</span>
          <span className="text-muted-foreground text-lg"> /month</span>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow pt-6">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="rounded-full p-1 bg-secondary/20 shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-secondary" />
              </div>
              <span className="text-sm text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button className={`w-full ${popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-secondary-foreground hover:bg-secondary/90"}`} asChild>
          <Link href="/funeral-cover">View Full Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
