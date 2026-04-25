import { Icon } from "@iconify/react"
import calendarIcon from "@iconify-icons/solar/calendar-mark-bold-duotone"
import checkIcon from "@iconify-icons/solar/check-circle-bold-duotone"
import documentIcon from "@iconify-icons/solar/document-add-bold-duotone"
import routeIcon from "@iconify-icons/solar/routing-3-bold-duotone"
import targetIcon from "@iconify-icons/solar/target-bold-duotone"
import { SignatureLines } from "@/components/common/SignatureLines"
import { images } from "@/lib/images"
import { processSteps } from "@/lib/site"

export function ProcessJourney() {
  const icons = [calendarIcon, targetIcon, documentIcon, routeIcon, checkIcon]

  return (
    <section className="relative isolate overflow-hidden bg-[var(--cogesto-blue)] py-32 text-white sm:py-40">
      <img
        data-parallax-image
        src={images.architecture.src}
        alt=""
        width="1800"
        height="1200"
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover brightness-45 contrast-125 grayscale"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(7,35,66,0.98),rgba(7,35,66,0.9)_48%,rgba(7,35,66,0.98))]" />
      <SignatureLines variant="light" className="-z-10 opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--cogesto-green-soft)] uppercase">
              Méthode
            </p>
            <h2 className="mt-5 text-4xl leading-[1.04] font-semibold tracking-[-0.01em] text-balance text-white md:text-6xl">
              Une trajectoire d'investissement, pas une suite de tâches.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/72">
              Chaque étape réduit une incertitude précise: faisabilité,
              financement, conformité, exécution ou suivi.
            </p>
          </div>
          <div
            data-reveal
            className="hidden border-l border-white/14 pl-8 text-[10rem] leading-none font-semibold tracking-[-0.06em] text-white/10 lg:block lg:text-right"
          >
            01-05
          </div>
        </div>

        <div data-timeline className="relative mt-24 lg:mt-32">
          <div
            data-timeline-rail
            className="absolute top-7 left-7 h-[calc(100%-3.5rem)] w-px bg-white/18 lg:top-9 lg:left-0 lg:h-px lg:w-full"
          />
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8">
            {processSteps.map((step, index) => (
              <article
                data-timeline-item
                key={step.title}
                className="relative pl-24 lg:min-h-[440px] lg:pt-28 lg:pl-0"
              >
                <span className="absolute top-0 left-0 z-10 grid size-14 place-items-center rounded-md border border-white/18 bg-white/12 text-[var(--cogesto-green-soft)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-md lg:top-2">
                  <Icon icon={icons[index]} className="size-7" />
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-white/46 uppercase">
                  Étape 0{index + 1}
                </p>
                <h3 className="mt-4 text-3xl leading-tight font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-6 max-w-[17rem] text-base leading-8 text-white/70">
                  {step.description}
                </p>
                <p className="mt-10 hidden border-t border-white/16 pt-5 text-xs font-semibold tracking-[0.18em] text-white/42 uppercase lg:block">
                  Contrôle {index + 1}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
