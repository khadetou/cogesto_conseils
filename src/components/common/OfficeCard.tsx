import { Icon } from "@iconify/react"
import type { IconifyIcon } from "@iconify/types"
import type { SiteImage } from "@/lib/images"
import { cn } from "@/lib/utils"

type OfficeCardProps = {
  city: string
  focus: string
  role: string
  icon: IconifyIcon
  image: SiteImage
  className?: string
  featured?: boolean
}

export function OfficeCard({
  city,
  focus,
  role,
  icon,
  image,
  className,
  featured = false,
}: OfficeCardProps) {
  return (
    <article
      data-stagger-item
      className={cn(
        "group relative min-h-[560px] overflow-hidden rounded-lg border border-white/12 bg-[var(--cogesto-blue)] text-white transition-[box-shadow,transform] duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_110px_rgba(0,0,0,0.24)]",
        featured && "min-h-[700px]",
        className
      )}
    >
      <img
        src={image.src}
        alt={image.alt}
        width="1000"
        height="720"
        loading="eager"
        style={{ objectPosition: image.position ?? "center" }}
        className={cn(
          "absolute inset-0 h-full w-full object-cover brightness-70 contrast-125 grayscale transition-transform duration-700",
          image.zoom
            ? "scale-[1.2] group-hover:scale-[1.26]"
            : "group-hover:scale-[1.06]"
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,35,66,0.18),rgba(7,35,66,0.6)_46%,rgba(7,35,66,0.96))]" />
      <div className="absolute top-0 right-[28%] bottom-0 w-px rotate-[18deg] bg-gradient-to-b from-white/0 via-white/20 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div
        className={cn(
          "relative flex h-full min-h-[560px] flex-col justify-end p-7",
          featured && "min-h-[700px] p-9"
        )}
      >
        <div className="mb-10 flex items-center justify-between gap-4">
          <span className="grid size-11 place-items-center rounded-md border border-white/14 bg-white/12 text-white backdrop-blur-md">
            <Icon icon={icon} className="size-6" />
          </span>
          <p className="max-w-[11rem] text-right text-xs font-semibold tracking-[0.18em] text-white/68 uppercase">
            {focus}
          </p>
        </div>
        <h3
          className={cn(
            "text-4xl font-semibold tracking-[-0.01em] text-white",
            featured && "text-5xl md:text-6xl"
          )}
        >
          {city}
        </h3>
        <p
          className={cn(
            "mt-4 text-sm leading-7 text-white/74",
            featured && "max-w-xl text-base leading-8"
          )}
        >
          {role}
        </p>
      </div>
    </article>
  )
}
