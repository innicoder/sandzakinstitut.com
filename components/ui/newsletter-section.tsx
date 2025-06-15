import { Button } from "@/components/ui/button";

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  variant?: "primary" | "muted";
}

export function NewsletterSection({
  title = "Budite dio promjene",
  description = "Prijavite se za naš newsletter i budite informisani o najnovijim istraživanjima, događajima i inicijativama.",
  variant = "primary"
}: NewsletterSectionProps) {
  const bgClass = variant === "primary" ? "bg-primary text-primary-foreground" : "bg-muted/50";
  
  return (
    <section className={`${bgClass} py-16`}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className={`mb-8 text-lg ${variant === "primary" ? "text-primary-foreground" : "text-muted-foreground"}`}>
            {description}
          </p>
          <form className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Unesite vašu email adresu"
              required
              className={variant === "primary" 
                ? "flex-1 rounded-lg border-0 bg-white/10 px-6 py-3 text-primary-foreground placeholder:text-primary-foreground/70 backdrop-blur-sm focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
                : "flex-1 rounded-lg border border-input bg-background px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              }
            />
            <Button 
              type="submit" 
              size="lg" 
              className={variant === "primary" ? "min-w-[140px] bg-white text-primary hover:bg-white/90" : "min-w-[140px]"}
            >
              Prijavite se
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}