import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "primary";
  size?: "default" | "sm" | "lg";
}

const sectionVariants = {
  default: "",
  muted: "bg-muted/50",
  primary: "bg-primary text-primary-foreground",
};

const sectionSizes = {
  sm: "py-8 md:py-12",
  default: "py-16 md:py-24",
  lg: "py-24 md:py-32",
};

export function Section({
  children,
  className,
  variant = "default",
  size = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        sectionVariants[variant],
        sectionSizes[size],
        className
      )}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}