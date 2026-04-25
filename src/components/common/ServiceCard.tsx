import { Icon } from "@iconify/react"
import checkIcon from "@iconify-icons/solar/check-circle-bold-duotone"
import type { ServiceItem } from "@/lib/site"

type ServiceCardProps = {
  service: ServiceItem
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article
      data-stagger-item
      className="group flex h-full flex-col rounded-lg border border-[var(--cogesto-blue)]/10 bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--cogesto-green)]/35 hover:shadow-[0_22px_70px_rgba(7,35,66,0.1)]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-md bg-[var(--cogesto-mist)] text-[var(--cogesto-green)] transition-colors group-hover:bg-[var(--cogesto-green)] group-hover:text-white">
          <Icon icon={service.icon} className="size-6" />
        </span>
        <span className="h-px flex-1 bg-[var(--cogesto-blue)]/10" />
      </div>
      <h3 className="mt-6 text-xl leading-tight font-semibold text-[var(--cogesto-blue)]">
        {service.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--cogesto-slate)]">
        {service.detail}
      </p>
      <ul className="mt-6 grid gap-3">
        {service.points.map((point) => (
          <li
            key={point}
            className="flex gap-3 text-sm text-[var(--cogesto-blue)]"
          >
            <Icon
              icon={checkIcon}
              className="mt-0.5 size-4 shrink-0 text-[var(--cogesto-green)]"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
