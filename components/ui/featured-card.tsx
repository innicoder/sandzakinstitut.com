'use client';

import { cn } from '@/lib/utils';
import { OptimizedImage } from './optimized-image';
import { Calendar, Clock, ArrowRight, Crown, User } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';
import Link from 'next/link';
import { PRIORITY_THRESHOLDS } from '@/lib/featured-content';

interface FeaturedCardProps {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  href: string;
  date?: Date;
  readTime?: string;
  category?: string;
  variant?: 'default' | 'hero';
  priority?: number;
  className?: string;
}

export function FeaturedCard({
  title,
  description,
  image,
  href,
  date,
  readTime,
  category,
  variant = 'default',
  priority = 1,
  className,
}: FeaturedCardProps) {
  const isFeatured = priority >= PRIORITY_THRESHOLDS.FEATURED;
  const isHero = variant === 'hero';

  return (
    <Card className={cn(
      'overflow-hidden group cursor-pointer border-2 shadow-lg hover:shadow-2xl hover:border-primary/40 transform hover:-translate-y-1',
      isHero && 'lg:max-w-4xl mx-auto',
      className
    )}>
      <div className="grid md:grid-cols-2">
        {/* Image section */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted md:aspect-auto md:h-full">
          {image ? (
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              priority={priority >= PRIORITY_THRESHOLDS.FEATURED}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground/50 bg-gradient-to-br from-muted to-muted/50">
              Slika članka
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 md:p-8">
          {/* Meta information */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {category && (
              <span className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md">
                {category}
              </span>
            )}
            
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {`${date.getDate()}. ${['jan', 'feb', 'mart', 'apr', 'maj', 'jun', 'jul', 'avg', 'sept', 'okt', 'nov', 'dec'][date.getMonth()]} ${date.getFullYear()}.`}
              </span>
            )}

            {/* Featured indicator */}
            {isFeatured && (
                <Crown className="h-3.5 w-3.5" />
            )}
          </div>

          {/* Title */}
          <h2 className={cn(
            "mb-3 font-bold line-clamp-2 transition-colors duration-200 group-hover:text-primary text-foreground",
            isHero ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl lg:text-3xl"
          )}>
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className={cn(
              "mb-6 text-muted-foreground font-medium leading-relaxed",
              isHero ? "line-clamp-4 text-base" : "line-clamp-3 text-sm"
            )}>
              {description}
            </p>
          )}

          {/* Additional meta and CTA */}
          <div className="mb-6 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
              <User className="h-4 w-4" />
              Redakcija
            </span>
            {readTime && (
              <span className="flex items-center gap-1.5 text-muted-foreground font-medium">
                <Clock className="h-4 w-4" />
                {readTime}
              </span>
            )}
          </div>

          <Button asChild variant="default" className="shadow-md hover:shadow-lg font-semibold px-6 py-2.5">
            <Link href={href}>
              Pročitajte više
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}