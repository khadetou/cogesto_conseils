import { Icon } from "@iconify/react"
import mapPointIcon from "@iconify-icons/solar/map-point-wave-bold-duotone"
import { SectionHeader } from "@/components/common/SectionHeader"

const frictions = [
  "La distance rend la vérification des opportunités plus difficile.",
  "La confiance se construit lentement quand les interlocuteurs sont dispersés.",
  "La création, la fiscalité et le financement exigent une lecture locale précise.",
]

export function Diaspora() {
  return (
    <section id="diaspora" className="bg-[var(--cogesto-mist)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Programme Diaspora & Investissement"
            title="Un accompagnement dédié aux projets portés à distance."
            description="Cogesto comprend le rythme, les contraintes et les ambitions des membres de la diaspora sénégalaise qui veulent investir, entreprendre ou suivre un projet au Sénégal."
          />
        </div>

        <div data-stagger className="grid gap-5">
          {frictions.map((friction, index) => (
            <div
              data-stagger-item
              key={friction}
              className="rounded-lg border border-[var(--cogesto-blue)]/10 bg-white p-5"
            >
              <div className="flex gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[var(--cogesto-blue)] text-sm font-semibold text-white">
                  0{index + 1}
                </span>
                <p className="text-base leading-7 text-[var(--cogesto-slate)]">
                  {friction}
                </p>
              </div>
            </div>
          ))}

          <div
            data-stagger-item
            className="rounded-lg bg-[var(--cogesto-blue)] p-6 text-white"
          >
            <Icon icon={mapPointIcon} className="size-9" />
            <h3 className="mt-5 text-2xl font-semibold">
              Cogesto agit comme relais stratégique, financier et terrain.
            </h3>
            <p className="mt-4 leading-7 text-white/72">
              Nous relions la vision portée depuis l’étranger à une exécution
              locale contrôlée: diagnostic, structuration, réseau, financement
              et suivi des indicateurs essentiels.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
