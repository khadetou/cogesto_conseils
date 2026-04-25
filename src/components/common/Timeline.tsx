import { Icon } from "@iconify/react"
import calendarIcon from "@iconify-icons/solar/calendar-mark-bold-duotone"
import checkIcon from "@iconify-icons/solar/check-circle-bold-duotone"
import documentIcon from "@iconify-icons/solar/document-add-bold-duotone"
import routeIcon from "@iconify-icons/solar/routing-3-bold-duotone"
import targetIcon from "@iconify-icons/solar/target-bold-duotone"
import { processSteps } from "@/lib/site"

type TimelineProps = {
  detailed?: boolean
}

export function Timeline({ detailed = false }: TimelineProps) {
  const icons = [calendarIcon, targetIcon, documentIcon, routeIcon, checkIcon]

  return (
    <div data-timeline className="relative">
      <div className="absolute top-0 left-5 h-full w-px bg-[var(--cogesto-blue)]/12 lg:top-[3.65rem] lg:left-0 lg:h-px lg:w-full" />
      <div className="grid gap-5 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <article
            data-timeline-item
            key={step.title}
            className="relative pl-16 lg:pt-24 lg:pl-0"
          >
            <span className="absolute top-0 left-0 z-10 grid size-10 place-items-center rounded-md bg-[var(--cogesto-blue)] text-white shadow-[0_12px_30px_rgba(7,35,66,0.18)] lg:top-10">
              <Icon icon={icons[index]} className="size-5" />
            </span>
            <div className="max-w-sm">
              <p className="text-xs font-semibold tracking-[0.2em] text-[var(--cogesto-green)] uppercase">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--cogesto-blue)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--cogesto-slate)]">
                {step.description}
              </p>
              {detailed ? (
                <p className="mt-4 border-t border-[var(--cogesto-blue)]/10 pt-4 text-sm leading-7 text-[var(--cogesto-blue)]">
                  Livrable clé: une décision documentée, un responsable
                  identifié et le prochain jalon clairement défini.
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
