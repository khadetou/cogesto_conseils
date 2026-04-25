import { SectionHeader } from "@/components/common/SectionHeader"

const steps = [
  "Consultation",
  "Diagnostic",
  "Structuration",
  "Exécution",
  "Suivi",
]

export function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Méthode"
          title="Une progression claire, du premier échange au pilotage du projet."
          description="Chaque mission est cadrée pour réduire les zones floues, clarifier les responsabilités et garder une trajectoire lisible."
          align="center"
        />

        <div data-stagger className="mt-14 grid gap-4 md:grid-cols-5 md:gap-0">
          {steps.map((step, index) => (
            <div
              data-stagger-item
              key={step}
              className="relative rounded-lg border border-[var(--cogesto-blue)]/10 bg-white p-5 md:rounded-none md:border-l-0 md:first:rounded-l-lg md:first:border-l md:last:rounded-r-lg"
            >
              <p className="text-sm font-semibold text-[var(--cogesto-green)]">
                Étape {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--cogesto-blue)]">
                {step}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--cogesto-slate)]">
                {getStepDescription(step)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function getStepDescription(step: string) {
  const descriptions: Record<string, string> = {
    Consultation:
      "Comprendre l’ambition, les contraintes et le niveau de maturité.",
    Diagnostic:
      "Évaluer la faisabilité, les risques, les besoins et les opportunités.",
    Structuration: "Construire le montage opérationnel, financier et fiscal.",
    Exécution: "Coordonner les actions, partenaires et démarches prioritaires.",
    Suivi: "Mesurer l’avancement et ajuster la trajectoire dans la durée.",
  }

  return descriptions[step]
}
