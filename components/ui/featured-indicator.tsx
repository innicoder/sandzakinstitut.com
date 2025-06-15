import { cn } from '@/lib/utils';
import { PRIORITY_THRESHOLDS } from '@/lib/featured-content';
import { Crown, Star } from 'lucide-react';

interface FeaturedIndicatorProps {
  priority: number;
  variant?: 'minimal' | 'badge' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FeaturedIndicator({ 
  priority, 
  variant = 'minimal', 
  size = 'md',
  className 
}: FeaturedIndicatorProps) {
  if (priority < PRIORITY_THRESHOLDS.HIGHLIGHTED) return null;

  const isFeatured = priority >= PRIORITY_THRESHOLDS.FEATURED;
  const isHighlighted = priority >= PRIORITY_THRESHOLDS.HIGHLIGHTED && priority < PRIORITY_THRESHOLDS.FEATURED;

  // Size configurations
  const sizes = {
    sm: { icon: 'h-3 w-3', text: 'text-xs', padding: 'px-2 py-0.5' },
    md: { icon: 'h-3.5 w-3.5', text: 'text-xs', padding: 'px-2.5 py-1' },
    lg: { icon: 'h-4 w-4', text: 'text-sm', padding: 'px-3 py-1.5' },
  };

  const config = sizes[size];

  if (variant === 'minimal') {
    return (
      <div className={cn(
        'inline-flex items-center gap-1 text-muted-foreground',
        config.text,
        className
      )}>
        {isFeatured && <Crown className={cn(config.icon, 'text-amber-500')} />}
        {isHighlighted && <Star className={cn(config.icon, 'text-blue-500')} />}
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={cn(
        'inline-flex items-center gap-1 rounded-full border',
        config.text,
        config.padding,
        isFeatured && 'border-amber-200 bg-amber-50 text-amber-700',
        isHighlighted && 'border-blue-200 bg-blue-50 text-blue-700',
        className
      )}>
        {isFeatured && (
          <>
            <Crown className={cn(config.icon, 'fill-current')} />
            <span>Izdvojeno</span>
          </>
        )}
        {isHighlighted && (
          <>
            <Star className={config.icon} />
            <span>Preporučeno</span>
          </>
        )}
      </div>
    );
  }

  if (variant === 'accent') {
    return (
      <div className={cn(
        'relative',
        className
      )}>
        {/* Subtle gradient accent */}
        <div className={cn(
          'absolute -inset-px rounded-lg',
          isFeatured && 'bg-gradient-to-r from-amber-400/20 via-amber-300/10 to-transparent',
          isHighlighted && 'bg-gradient-to-r from-blue-400/20 via-blue-300/10 to-transparent'
        )} />
        
        {/* Corner indicator */}
        <div className={cn(
          'absolute -top-1 -right-1 rounded-full p-1',
          isFeatured && 'bg-amber-100 text-amber-600',
          isHighlighted && 'bg-blue-100 text-blue-600'
        )}>
          {isFeatured && <Crown className="h-2.5 w-2.5 fill-current" />}
          {isHighlighted && <Star className="h-2.5 w-2.5" />}
        </div>
      </div>
    );
  }

  return null;
}