type Stat = {
  value: string
  label: string
  detail: string
}

type StatsBlockProps = {
  stats: Array<Stat>
}

export function StatsBlock({ stats }: StatsBlockProps) {
  return (
    <section className="bg-[var(--cogesto-blue)] py-14 text-white">
      <div
        data-stagger
        className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8"
      >
        {stats.map((stat) => (
          <div
            data-stagger-item
            key={stat.label}
            className="rounded-lg border border-white/12 bg-white/8 p-6"
          >
            <p className="text-4xl font-semibold">{stat.value}</p>
            <p className="mt-3 text-sm font-semibold tracking-[0.16em] text-white/58 uppercase">
              {stat.label}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/74">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
