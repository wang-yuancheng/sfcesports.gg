import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 select-none",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 select-none",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground select-none",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 select-none",
        ghost: "hover:bg-accent hover:text-accent-foreground select-none",
        link: "text-primary underline-offset-4 hover:underline select-none",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-8 rounded-md px-2",
        sm: "h-8 rounded-md px-[10px]",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
