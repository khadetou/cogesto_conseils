import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import arrowRightUp from "@iconify-icons/solar/arrow-right-up-linear"
import type { SiteImage } from "@/lib/images"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SignatureLines } from "@/components/common/SignatureLines"
import { animateHero } from "@/lib/animations"
import { cn } from "@/lib/utils"

type HeroStat = {
  value: string
  label: string
}

type HeroSectionProps = {
  eyebrow: string
  title: string
  subtitle?: string
  description: string
  image: SiteImage
  primaryCta?: string
  secondaryCta?: string
  primaryHref?: string
  secondaryHref?: string
  stats?: Array<HeroStat>
  compact?: boolean
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  primaryCta = "Démarrer mon projet",
  secondaryCta = "Découvrir l'approche",
  primaryHref = "/contact",
  secondaryHref = "/services",
  stats = [],
  compact = false,
}: HeroSectionProps) {
  const scope = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!scope.current) {
      return undefined
    }

    return animateHero(scope.current)
  }, [])

  return (
    <section
      ref={scope}
      className={cn(
        "relative isolate flex overflow-hidden bg-[var(--cogesto-blue)] text-white",
        compact ? "min-h-[660px] pt-28" : "min-h-[820px] pt-32"
      )}
    >
      <img
        data-parallax-image
        src={image.src}
        alt={image.alt}
        width="1800"
        height="1200"
        loading="eager"
        style={{ objectPosition: image.position ?? "center" }}
        className={cn(
          "absolute inset-0 -z-20 h-full w-full object-cover brightness-75 contrast-125 grayscale",
          image.zoom ? "scale-110" : "scale-105"
        )}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,35,66,0.98)_0%,rgba(7,35,66,0.9)_38%,rgba(7,35,66,0.48)_72%,rgba(7,35,66,0.82)_100%)]" />
      <SignatureLines variant="light" className="-z-10 opacity-70" />
      <div
        data-hero-signature
        className="absolute top-28 -right-10 -z-10 hidden h-[22rem] w-24 rotate-[18deg] bg-[var(--cogesto-green)]/18 lg:block"
      />
      <div
        data-hero-accent
        className="absolute top-0 right-[18%] bottom-0 -z-10 hidden w-px origin-top rotate-[18deg] bg-gradient-to-b from-white/0 via-[var(--cogesto-green-soft)]/52 to-white/0 lg:block"
      />
      <svg
        data-hero-map
        aria-hidden="true"
        viewBox="0 0 760 520"
        className="absolute right-[-9rem] bottom-10 -z-10 hidden w-[48rem] opacity-[0.16] lg:block"
      >
        <path
          d="M45 360 C160 270 210 130 348 188 C478 244 504 70 694 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          className="text-white"
        />
        <path
          d="M96 410 C232 350 314 424 444 314 C545 228 618 262 718 214"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white"
        />
        {[
          [116, 332],
          [350, 188],
          [504, 262],
          [692, 118],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="5"
            className="fill-[var(--cogesto-green-soft)]"
          />
        ))}
      </svg>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[var(--cogesto-blue)] to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8 lg:pb-[4.5rem]">
        <div className="max-w-5xl">
          <Badge
            data-hero-kicker
            className="mb-6 w-fit rounded-md border border-white/16 bg-white/10 px-3 py-1 text-white shadow-none backdrop-blur-md"
          >
            {eyebrow}
          </Badge>
          <h1
            data-hero-title
            className="max-w-5xl text-4xl leading-[1] font-semibold tracking-[-0.02em] text-balance text-white sm:text-5xl lg:text-[4.8rem]"
          >
            {title}
          </h1>
          <div data-hero-copy className="mt-6 max-w-2xl">
            {subtitle ? (
              <p className="text-xl font-semibold text-[var(--cogesto-green-soft)]">
                {subtitle}
              </p>
            ) : null}
            <p className="mt-4 text-lg leading-8 text-white/76">
              {description}
            </p>
          </div>
          <div
            data-hero-actions
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border border-white bg-white px-6 font-semibold text-[var(--cogesto-blue)] transition-colors hover:bg-white hover:text-[var(--cogesto-blue)]"
            >
              <a href={primaryHref}>
                {primaryCta}
                <Icon icon={arrowRightUp} className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-white/24 bg-white/8 px-6 font-semibold text-white backdrop-blur-md transition-colors hover:border-white hover:bg-white hover:text-[var(--cogesto-blue)]"
            >
              <a href={secondaryHref}>
                {secondaryCta}
                <Icon icon={arrowRightUp} className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <div
          data-hero-card
          className="mt-16 grid gap-3 border-t border-white/16 pt-5 sm:grid-cols-3 lg:ml-auto lg:w-[64%]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/14 bg-white/10 p-4 backdrop-blur-md"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm leading-5 text-white/72">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
