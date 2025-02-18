'use client';
"use strict"

import { cn } from '@/lib/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max = 100, ...props }, ref) => {
  // Validate max prop
  if (typeof max !== 'number' || max <= 0) {
    console.warn(
      `Invalid max value: ${max}. Using default value 100.`
    );
    max = 100;
  }

  // Ensure value stays within 0-max bounds
  const clampedValue = Math.min(Math.max(value || 0, 0), max);
  const percentage = (clampedValue / max) * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        className
      )}
      {...props}
      max={max}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
