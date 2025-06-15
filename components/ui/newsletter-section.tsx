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
          <p className={`mb-8 text-lg ${variant === "primary" ? "opacity-90" : "text-muted-foreground"}`}>
            {description}
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Vaša email adresa"
              required
              className="flex-1 rounded-md bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" size="lg" variant={variant === "primary" ? "secondary" : "default"}>
              Prijavite se
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}