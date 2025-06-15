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
  variant?: 'default' | 'hero' | 'compact';
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
  variant = 'default', // eslint-disable-line @typescript-eslint/no-unused-vars
  priority = 1,
  className,
}: FeaturedCardProps) {
  const isFeatured = priority >= PRIORITY_THRESHOLDS.FEATURED;

  return (
    <Card className={cn('overflow-hidden', className)}>
      <div className="grid md:grid-cols-2">
        {/* Image section */}
        <div className="aspect-[16/9] overflow-hidden bg-muted md:aspect-auto md:h-full">
          {image ? (
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={priority >= PRIORITY_THRESHOLDS.FEATURED}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-muted-foreground">
              Slika članka
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="p-6 md:p-8">
          {/* Meta information */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {category && (
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
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
              <Crown className="h-3.5 w-3.5 text-amber-600" />
            )}
          </div>

          {/* Title */}
          <h2 className="mb-3 text-xl font-bold md:text-2xl line-clamp-2">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="mb-4 text-muted-foreground line-clamp-3">
              {description}
            </p>
          )}

          {/* Additional meta and CTA */}
          <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              Redakcija
            </span>
            {readTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readTime}
              </span>
            )}
          </div>

          <Button asChild>
            <Link href={href}>
              Pročitajte više
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}