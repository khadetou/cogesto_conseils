import { createFileRoute } from "@tanstack/react-router"
import { CTASection } from "@/components/common/CTASection"
import { HeroSection } from "@/components/common/HeroSection"
import { ImageTextSection } from "@/components/common/ImageTextSection"
import { ProcessJourney } from "@/components/common/ProcessJourney"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"

export const Route = createFileRoute("/processus")({
  head: () => ({
    meta: pageMeta(
      "Processus | COGESTO CONSEILS",
      "La méthode Cogesto: consultation, diagnostic, structuration, exécution et suivi pour sécuriser les décisions stratégiques et financières."
    ),
  }),
  component: ProcessPage,
})

function ProcessPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Processus"
        title="Une méthode exigeante pour avancer avec ordre et confiance."
        description="La qualité d'un projet dépend de la séquence des décisions. Cogesto structure cette séquence avec des étapes, des livrables et un suivi clair."
        image={images.architecture}
        compact
        stats={[
          { value: "01", label: "consultation" },
          { value: "05", label: "étapes" },
          { value: "∞", label: "suivi adaptable" },
        ]}
      />

      <ProcessJourney />

      <ImageTextSection
        eyebrow="Pilotage"
        title="Le processus n'est pas une formalité. C'est une protection."
        description="Les projets se fragilisent quand les décisions ne sont pas hiérarchisées. Notre méthode aide à comprendre quoi traiter maintenant, quoi différer et quoi refuser."
        image={images.boardroom}
        reverse
        points={[
          "Un diagnostic avant les dépenses lourdes.",
          "Une structuration avant les engagements externes.",
          "Un suivi pour préserver la confiance après le lancement.",
        ]}
      />

      <CTASection
        title="Vous voulez savoir où en est réellement votre projet ?"
        description="Une consultation permet de situer votre projet dans le processus et d'identifier les prochaines décisions utiles."
        secondaryHref="/services"
        secondaryLabel="Voir nos services"
      />
    </PageLayout>
  )
}
