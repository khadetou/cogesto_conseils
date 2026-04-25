import { Icon } from "@iconify/react"
import homeWifiIcon from "@iconify-icons/solar/home-wifi-bold-duotone"
import layersIcon from "@iconify-icons/solar/layers-minimalistic-bold-duotone"
import usersIcon from "@iconify-icons/solar/users-group-rounded-bold-duotone"
import verifiedIcon from "@iconify-icons/solar/verified-check-bold-duotone"
import { SectionHeader } from "@/components/common/SectionHeader"

const reasons = [
  {
    title: "Double expertise",
    icon: layersIcon,
    text: "Une lecture internationale des attentes investisseurs et une compréhension concrète du terrain sénégalais.",
  },
  {
    title: "Réseau local",
    icon: usersIcon,
    text: "Des relais pour qualifier les partenaires, accélérer les démarches et limiter les angles morts.",
  },
  {
    title: "Culture diaspora",
    icon: homeWifiIcon,
    text: "Une approche pensée pour les porteurs de projets qui décident à distance et exigent de la transparence.",
  },
  {
    title: "Conformité",
    icon: verifiedIcon,
    text: "Une attention constante à la fiscalité, aux responsabilités, aux documents et à la traçabilité.",
  },
]

export function Why() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeader
          eyebrow="Pourquoi Cogesto"
          title="Une maison de conseil construite pour les projets transfrontaliers exigeants."
          description="Cogesto ne vend pas une promesse abstraite. L’équipe organise la décision, sécurise les opérations et garde le projet lisible pour toutes les parties prenantes."
        />

        <div data-stagger className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              data-stagger-item
              key={reason.title}
              className="rounded-lg border border-[var(--cogesto-blue)]/10 p-5"
            >
              <Icon
                icon={reason.icon}
                className="size-8 text-[var(--cogesto-green)]"
              />
              <h3 className="mt-5 text-lg font-semibold text-[var(--cogesto-blue)]">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--cogesto-slate)]">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
