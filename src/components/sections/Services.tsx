import { Icon } from "@iconify/react"
import documentIcon from "@iconify-icons/solar/document-add-bold-duotone"
import graphIcon from "@iconify-icons/solar/graph-up-bold-duotone"
import handHeartIcon from "@iconify-icons/solar/hand-heart-bold-duotone"
import walletIcon from "@iconify-icons/solar/wallet-money-bold-duotone"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/common/SectionHeader"

const services = [
  {
    title: "Conseil stratégique & accompagnement",
    icon: handHeartIcon,
    text: "Cadrage du projet, choix des partenaires, priorisation des décisions et accompagnement jusqu’à la mise en œuvre.",
  },
  {
    title: "Structuration financière & financement",
    icon: walletIcon,
    text: "Préparation du dossier, lecture des risques, stratégie bancaire et recherche de leviers adaptés au projet.",
  },
  {
    title: "Gestion, fiscalité & conformité",
    icon: documentIcon,
    text: "Structuration administrative, conformité, pilotage fiscal et organisation des flux pour sécuriser la croissance.",
  },
  {
    title: "Organisation, pilotage & développement",
    icon: graphIcon,
    text: "Études d’opportunité, positionnement, feuille de route commerciale et arbitrages pour passer d’une idée à un actif durable.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Expertises"
          title="Un accompagnement complet pour structurer, financer et développer."
          description="Cogesto intervient aux moments critiques: comprendre le marché, structurer l’opération, financer le projet, sécuriser la gestion et suivre l’exécution."
        />
        <div
          data-stagger
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <Card
              data-stagger-item
              key={service.title}
              className="group rounded-lg border-[var(--cogesto-blue)]/10 bg-white shadow-none transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[var(--cogesto-green)]/35 hover:shadow-[0_18px_50px_rgba(7,35,66,0.08)]"
            >
              <CardContent className="p-6">
                <span className="grid size-12 place-items-center rounded-md bg-[var(--cogesto-mist)] text-[var(--cogesto-green)] transition-colors group-hover:bg-[var(--cogesto-green)] group-hover:text-white">
                  <Icon icon={service.icon} className="size-6" />
                </span>
                <h3 className="mt-6 text-xl leading-tight font-semibold text-[var(--cogesto-blue)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--cogesto-slate)]">
                  {service.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
