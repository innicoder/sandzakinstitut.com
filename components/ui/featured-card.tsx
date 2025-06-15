import { cn } from '@/lib/utils';
import { OptimizedImage } from './optimized-image';
import { Calendar, Clock, ArrowRight, Crown, Star } from 'lucide-react';
import Link from 'next/link';
import { PRIORITY_THRESHOLDS } from '@/lib/featured-content';
import { FeaturedIndicator } from './featured-indicator';

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
  variant = 'default',
  priority = 1,
  className,
}: FeaturedCardProps) {
  const isHero = variant === 'hero';
  const isCompact = variant === 'compact';
  const isFeatured = priority >= PRIORITY_THRESHOLDS.FEATURED;
  const isHighlighted = priority >= PRIORITY_THRESHOLDS.HIGHLIGHTED;

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm',
        'transition-all duration-300 hover:bg-card hover:shadow-lg hover:-translate-y-1',
        'focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2',
        // Visual enhancement for featured content
        isFeatured && 'border-amber-200 bg-gradient-to-br from-amber-50/50 to-card shadow-amber-100/50',
        isHighlighted && !isFeatured && 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-card shadow-blue-100/50',
        isHero && 'md:flex-row lg:min-h-[280px]',
        className
      )}
    >
      {/* Featured accent bar */}
      {(isFeatured || isHighlighted) && (
        <div className={cn(
          'absolute left-0 top-0 h-full w-1 rounded-l-xl',
          isFeatured && 'bg-gradient-to-b from-amber-400 to-amber-600',
          isHighlighted && 'bg-gradient-to-b from-blue-400 to-blue-600'
        )} />
      )}

      {/* Image section with improved aspect ratio */}
      {image && (
        <div className={cn(
          'relative overflow-hidden bg-muted/50',
          isHero ? 'md:w-2/5' : 'aspect-[16/10]',
          isCompact && 'aspect-[2/1]'
        )}>
          <Link href={href} className="group/image block h-full">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-all duration-500 group-hover/image:scale-110"
              priority={priority >= PRIORITY_THRESHOLDS.FEATURED}
              sizes={isHero ? '(max-width: 768px) 100vw, 40vw' : '(max-width: 768px) 100vw, 33vw'}
            />
            
            {/* Image overlay for featured content */}
            {(isFeatured || isHighlighted) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            )}
          </Link>
          
          {/* Featured indicator in top-right corner */}
          {(isFeatured || isHighlighted) && (
            <div className="absolute right-3 top-3">
              <div className={cn(
                'rounded-full p-2 backdrop-blur-sm',
                isFeatured && 'bg-amber-500/90 text-white',
                isHighlighted && 'bg-blue-500/90 text-white'
              )}>
                {isFeatured && <Crown className="h-3 w-3 fill-current" />}
                {isHighlighted && <Star className="h-3 w-3" />}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content section with improved typography */}
      <div className={cn(
        'flex flex-1 flex-col gap-3 p-6',
        isHero && 'md:w-3/5 md:justify-center',
        isCompact && 'gap-2 p-4'
      )}>
        {/* Enhanced meta information */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {category && (
            <span className={cn(
              'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
              'bg-secondary/50 text-secondary-foreground border border-border/50'
            )}>
              {category}
            </span>
          )}
          
          {date && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={date.toISOString()} className="font-medium">
                {new Intl.DateTimeFormat('bs-BA', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                }).format(date)}
              </time>
            </div>
          )}
          
          {readTime && (
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span className="font-medium">{readTime}</span>
            </div>
          )}
        </div>

        {/* Improved title with better typography */}
        <h3 className={cn(
          'font-bold leading-tight tracking-tight',
          isHero ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl',
          isCompact && 'text-base',
          'group-hover:text-primary transition-colors duration-200'
        )}>
          <Link 
            href={href}
            className="after:absolute after:inset-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
          >
            {title}
          </Link>
        </h3>

        {/* Enhanced description */}
        {description && !isCompact && (
          <p className={cn(
            'text-muted-foreground leading-relaxed',
            isHero ? 'line-clamp-4 text-base lg:text-lg' : 'line-clamp-3',
            'group-hover:text-foreground/80 transition-colors duration-200'
          )}>
            {description}
          </p>
        )}

        {/* Improved CTA with subtle animation */}
        {!isCompact && (
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <span className="relative">
                Pročitaj više
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary/60 transition-all duration-300 group-hover:w-full" />
              </span>
              <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </div>
            
            {/* Featured badge for non-hero variants */}
            {!isHero && (isFeatured || isHighlighted) && (
              <FeaturedIndicator 
                priority={priority} 
                variant="minimal" 
                size="sm" 
              />
            )}
          </div>
        )}
      </div>
    </article>
  );
}