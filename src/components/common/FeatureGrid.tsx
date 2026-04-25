import { Icon } from "@iconify/react"
import type { FeatureItem } from "@/lib/site"

type FeatureGridProps = {
  items: Array<FeatureItem>
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div data-stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article
          data-stagger-item
          key={item.title}
          className="group rounded-lg border border-[var(--cogesto-blue)]/10 bg-white p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--cogesto-green)]/35 hover:shadow-[0_18px_60px_rgba(7,35,66,0.08)]"
        >
          <span className="grid size-11 place-items-center rounded-md bg-[var(--cogesto-green-soft)] text-[var(--cogesto-green)] transition-colors group-hover:bg-[var(--cogesto-green)] group-hover:text-white">
            <Icon icon={item.icon} className="size-6" />
          </span>
          <h3 className="mt-6 text-lg font-semibold text-[var(--cogesto-blue)]">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--cogesto-slate)]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}
