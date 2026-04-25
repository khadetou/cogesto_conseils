import { Icon } from "@iconify/react"
import arrowRightUp from "@iconify-icons/solar/arrow-right-up-linear"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CTAButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
  className?: string
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: CTAButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "h-11 rounded-md px-5 text-sm font-semibold shadow-none transition-[transform,background-color,color,border-color] duration-200 hover:-translate-y-0.5",
        variant === "primary" &&
          "border border-[var(--cogesto-blue)] bg-[var(--cogesto-blue)] text-white hover:bg-white hover:text-[var(--cogesto-blue)]",
        variant === "secondary" &&
          "border border-[var(--cogesto-blue)]/20 bg-white text-[var(--cogesto-blue)] hover:border-[var(--cogesto-blue)] hover:bg-white",
        variant === "light" &&
          "border border-white/20 bg-white text-[var(--cogesto-blue)] hover:border-white hover:bg-white",
        className
      )}
    >
      <a href={href}>
        {children}
        <Icon icon={arrowRightUp} className="size-4" />
      </a>
    </Button>
  )
}
