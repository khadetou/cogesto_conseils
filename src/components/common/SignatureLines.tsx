import { cn } from "@/lib/utils"

type SignatureLinesProps = {
  variant?: "light" | "dark"
  className?: string
}

export function SignatureLines({
  variant = "light",
  className,
}: SignatureLinesProps) {
  const line =
    variant === "light"
      ? "from-white/0 via-white/22 to-white/0"
      : "from-transparent via-[var(--cogesto-blue)]/12 to-transparent"

  const accent =
    variant === "light"
      ? "bg-[var(--cogesto-green-soft)]/18"
      : "bg-[var(--cogesto-green)]/10"

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <span
        data-signature-line
        className={cn(
          "absolute top-[-12%] right-[14%] h-[126%] w-px origin-top rotate-[18deg] bg-gradient-to-b",
          line
        )}
      />
      <span
        data-signature-line
        className={cn(
          "absolute top-[18%] right-[31%] hidden h-[74%] w-px origin-top rotate-[18deg] bg-gradient-to-b lg:block",
          line
        )}
      />
      <span
        className={cn(
          "absolute -right-16 bottom-[12%] hidden h-64 w-20 rotate-[18deg] lg:block",
          accent
        )}
      />
    </div>
  )
}
