import * as React from "react"
    import { cva, type VariantProps } from "class-variance-authority"
    import { cn } from "@/lib/utils"

    const avatarVariants = cva(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      {
        variants: {
          variant: {
            default: "bg-secondary",
          },
        },
        defaultVariants: {
          variant: "default",
        },
      }
    )

    interface AvatarProps
      extends React.ImgHTMLAttributes<HTMLImageElement>,
        VariantProps<typeof avatarVariants> {}

    const Avatar = React.forwardRef<HTMLImageElement, AvatarProps>(
      ({ className, variant, ...props }, ref) => (
        <img
          className={cn(avatarVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      )
    )
    Avatar.displayName = "Avatar"

    const AvatarImage = React.forwardRef<
      HTMLImageElement,
      React.ImgHTMLAttributes<HTMLImageElement>
    >(({ className, ...props }, ref) => (
      <img
        className={cn("aspect-square h-full w-full", className)}
        ref={ref}
        {...props}
      />
    ))
    AvatarImage.displayName = "AvatarImage"

    const AvatarFallback = React.forwardRef<
      HTMLSpanElement,
      React.HTMLAttributes<HTMLSpanElement>
    >(({ className, ...props }, ref) => (
      <span
        className={cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          className
        )}
        ref={ref}
        {...props}
      />
    ))
    AvatarFallback.displayName = "AvatarFallback"

    export { Avatar, AvatarImage, AvatarFallback }
