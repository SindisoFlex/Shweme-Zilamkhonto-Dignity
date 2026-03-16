import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ title, description, features }: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col bg-card border-white/5 hover:border-primary/50 transition-all duration-300 group">
      <CardHeader>
        <CardTitle className="font-serif text-2xl text-primary group-hover:text-primary/80 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
