import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border-2 border-input bg-background px-4 py-3 text-base font-medium shadow-sm transition-all duration-200 placeholder:text-muted-foreground placeholder:font-normal hover:border-primary/50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input disabled:hover:shadow-sm resize-y md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
