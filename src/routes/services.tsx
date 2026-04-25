import { createFileRoute } from "@tanstack/react-router"
import { CTASection } from "@/components/common/CTASection"
import { FAQAccordion } from "@/components/common/FAQAccordion"
import { HeroSection } from "@/components/common/HeroSection"
import { ImageTextSection } from "@/components/common/ImageTextSection"
import { SectionHeader } from "@/components/common/SectionHeader"
import { ServiceCard } from "@/components/common/ServiceCard"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"
import { faqs, services } from "@/lib/site"

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta(
      "Services | COGESTO CONSEILS",
      "Conseil stratégique, structuration financière, gestion, fiscalité, conformité et développement pour entreprises, investisseurs et organisations."
    ),
  }),
  component: ServicesPage,
})

function ServicesPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Services"
        title="Des expertises intégrées pour sécuriser chaque étape de votre projet."
        description="Cogesto intervient là où les décisions deviennent sensibles: stratégie, structuration financière, conformité, organisation, partenaires et développement."
        image={images.office}
        compact
        secondaryHref="/processus"
        secondaryCta="Voir le processus"
        stats={[
          { value: "4", label: "expertises intégrées" },
          { value: "5", label: "étapes de mission" },
          { value: "1", label: "cadre de pilotage" },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Expertises"
            title="Un accompagnement conçu pour les projets structurants, pas pour les démarches dispersées."
            description="Chaque service peut être mobilisé seul, mais la force de Cogesto réside dans la lecture globale du projet."
          />
          <div data-stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <ImageTextSection
        eyebrow="Qualité d'exécution"
        title="La bonne expertise au bon moment."
        description="Un projet sérieux n'a pas besoin de tout traiter en même temps. Il doit prendre les bonnes décisions dans le bon ordre, avec les bons documents et les bons indicateurs."
        image={images.advisory}
        reverse
        points={[
          "Avant financement: clarifier la faisabilité, les chiffres et la crédibilité du dossier.",
          "Avant exécution: sécuriser les responsabilités, les partenaires et les flux.",
          "Pendant la croissance: mesurer, ajuster et préserver la conformité.",
        ]}
      />

      <section className="bg-[var(--cogesto-mist)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <SectionHeader
            eyebrow="FAQ services"
            title="Choisir l'accompagnement adapté."
            description="La mission commence par un cadrage. Ensuite, nous activons les expertises utiles, sans alourdir inutilement le projet."
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Besoin d'une lecture claire de votre projet ?"
        description="Nous pouvons identifier les priorités, les risques et le niveau d'accompagnement le plus utile."
        secondaryHref="/contact"
        secondaryLabel="Parler à un expert"
      />
    </PageLayout>
  )
}
