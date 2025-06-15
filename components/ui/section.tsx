import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary" | "formal";
  size?: "default" | "sm" | "lg";
  bordered?: boolean;
}

const sectionVariants = {
  default: "",
  muted: "bg-gradient-to-b from-muted/30 via-muted/40 to-muted/30",
  primary: "bg-primary text-primary-foreground",
  formal: "bg-gradient-to-b from-primary/5 via-background to-background",
};

const sectionSizes = {
  sm: "py-12 md:py-16 lg:py-20",
  default: "py-16 md:py-20 lg:py-28",
  lg: "py-20 md:py-28 lg:py-36",
};

export function Section({
  children,
  className,
  variant = "default",
  size = "default",
  bordered = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants[variant],
        sectionSizes[size],
        bordered && "border-y-2 border-border/40",
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "mx-auto max-w-4xl text-center",
        className
      )}
    >
      {subtitle && (
        <p className="heading-formal mb-4">{subtitle}</p>
      )}
      <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
      {description && (
        <p className="lead mx-auto max-w-3xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}