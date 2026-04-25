import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      data-reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[var(--cogesto-green)] uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl leading-tight font-semibold text-balance text-[var(--cogesto-blue)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[var(--cogesto-slate)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
