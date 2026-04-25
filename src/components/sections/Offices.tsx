import { Icon } from "@iconify/react"
import canadaFlag from "@iconify-icons/twemoji/flag-canada"
import moroccoFlag from "@iconify-icons/twemoji/flag-morocco"
import senegalFlag from "@iconify-icons/twemoji/flag-senegal"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/common/SectionHeader"

const offices = [
  {
    country: "Canada",
    icon: canadaFlag,
    role: "Relation diaspora, cadrage stratégique et accès aux réseaux de financement.",
  },
  {
    country: "Sénégal",
    icon: senegalFlag,
    role: "Terrain, partenaires locaux, démarches administratives et suivi d’exécution.",
  },
  {
    country: "Maroc",
    icon: moroccoFlag,
    role: "Passerelles régionales, expansion, structuration et développement d’affaires.",
  },
]

export function Offices() {
  return (
    <section id="offices" className="bg-[var(--cogesto-mist)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Présence"
          title="Trois bureaux pour relier l’ambition internationale à l’exécution locale."
          description="La force de Cogesto est transnationale: comprendre les attentes de l’investisseur à l’étranger et les réalités du marché sénégalais."
        />

        <div data-stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {offices.map((office) => (
            <Card
              data-stagger-item
              key={office.country}
              className="rounded-lg border-[var(--cogesto-blue)]/10 bg-white shadow-none"
            >
              <CardContent className="p-6">
                <Icon icon={office.icon} className="size-10" />
                <h3 className="mt-6 text-2xl font-semibold text-[var(--cogesto-blue)]">
                  {office.country}
                </h3>
                <p className="mt-4 leading-7 text-[var(--cogesto-slate)]">
                  {office.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
