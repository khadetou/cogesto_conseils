import { useEffect, useRef } from "react"
import { Icon } from "@iconify/react"
import globalIcon from "@iconify-icons/solar/global-bold-duotone"
import shieldCheckIcon from "@iconify-icons/solar/shield-check-bold-duotone"
import { Badge } from "@/components/ui/badge"
import { CTAButton } from "@/components/common/CTAButton"
import { animateHero } from "@/lib/animations"

const trustItems = [
  { value: "3", label: "bureaux connectés" },
  { value: "360°", label: "vision juridique, fiscale et financière" },
  { value: "CA · SN · MA", label: "Canada, Sénégal, Maroc" },
]

export function Hero() {
  const scope = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!scope.current) {
      return undefined
    }

    return animateHero(scope.current)
  }, [])

  return (
    <section
      id="top"
      ref={scope}
      className="relative isolate overflow-hidden bg-[var(--cogesto-mist)] pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(7,35,66,0.08),rgba(19,125,85,0.08)_45%,rgba(255,255,255,0.6))]" />
      <div
        data-hero-shape
        className="absolute top-24 right-[-8rem] -z-10 h-72 w-72 rounded-full border border-[var(--cogesto-green)]/15 bg-white/30 blur-2xl"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pt-16 lg:pb-24">
        <div className="flex flex-col justify-center">
          <Badge
            data-hero-kicker
            className="mb-5 w-fit rounded-md border border-[var(--cogesto-green)]/20 bg-white/80 px-3 py-1 text-[var(--cogesto-green)] shadow-none"
          >
            Conseil stratégique & financier
          </Badge>
          <h1
            data-hero-title
            className="max-w-4xl text-5xl leading-[1.02] font-semibold text-balance text-[var(--cogesto-blue)] sm:text-6xl lg:text-7xl"
          >
            Structurer, financer et développer vos projets
          </h1>
          <div data-hero-copy className="mt-6 max-w-2xl">
            <p className="text-xl font-semibold text-[var(--cogesto-green)]">
              Une approche structurée pour décider et exécuter
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--cogesto-slate)]">
              Cogesto Conseils accompagne les entrepreneurs, entreprises,
              investisseurs, organisations et membres de la diaspora dans la
              stratégie, la finance, la gestion et le développement de projets
              solides.
            </p>
          </div>
          <div
            data-hero-actions
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <CTAButton href="#contact">Démarrer mon projet</CTAButton>
            <CTAButton href="#services" variant="secondary">
              Découvrir nos services
            </CTAButton>
          </div>
        </div>

        <div className="relative min-h-[460px] lg:min-h-[560px]">
          <div
            data-hero-card
            className="absolute inset-x-0 top-0 overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_28px_80px_rgba(7,35,66,0.16)]"
          >
            <div className="h-56 bg-[linear-gradient(135deg,#072342,#0f5e52_58%,#f7fbf7)] p-6 text-white sm:h-72">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
                    Mission
                  </p>
                  <p className="mt-3 max-w-sm text-2xl leading-tight font-semibold">
                    Transformer l'ambition en cadre de décision solide.
                  </p>
                </div>
                <Icon icon={globalIcon} className="size-10" />
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-[var(--cogesto-blue)]/10 bg-[var(--cogesto-mist)] p-4"
                >
                  <p className="text-2xl font-semibold text-[var(--cogesto-blue)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-5 text-[var(--cogesto-slate)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-hero-card
            className="absolute right-4 bottom-0 left-4 rounded-xl border border-[var(--cogesto-blue)]/10 bg-white p-5 shadow-[0_20px_50px_rgba(7,35,66,0.14)] sm:right-auto sm:left-10 sm:w-[22rem]"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-md bg-[var(--cogesto-green)]/10 text-[var(--cogesto-green)]">
                <Icon icon={shieldCheckIcon} className="size-6" />
              </span>
              <div>
                <p className="font-semibold text-[var(--cogesto-blue)]">
                  Sérénité d’exécution
                </p>
                <p className="text-sm text-[var(--cogesto-slate)]">
                  Diagnostic, conformité, financement et pilotage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
