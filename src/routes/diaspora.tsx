import { createFileRoute } from "@tanstack/react-router"
import { CTASection } from "@/components/common/CTASection"
import { FeatureGrid } from "@/components/common/FeatureGrid"
import { HeroSection } from "@/components/common/HeroSection"
import { ImageTextSection } from "@/components/common/ImageTextSection"
import { SectionHeader } from "@/components/common/SectionHeader"
import { StatsBlock } from "@/components/common/StatsBlock"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"
import { strengths } from "@/lib/site"

export const Route = createFileRoute("/diaspora")({
  head: () => ({
    meta: pageMeta(
      "Diaspora | COGESTO CONSEILS",
      "Un accompagnement pensé pour la diaspora qui souhaite investir, créer ou développer un projet au Sénégal."
    ),
  }),
  component: DiasporaPage,
})

function DiasporaPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Diaspora"
        title="Investir au pays sans avancer dans le flou."
        description="La distance, les intermédiaires, la conformité et le financement peuvent rendre un projet difficile à piloter. Cogesto apporte une méthode, une présence et une lecture stratégique."
        image={images.dakar}
        compact
        stats={[
          { value: "1", label: "interlocuteur structurant" },
          { value: "3", label: "marchés reliés" },
          { value: "100%", label: "priorité confiance" },
        ]}
      />

      <ImageTextSection
        eyebrow="Problème réel"
        title="La distance crée des angles morts. Cogesto les transforme en points de contrôle."
        description="La diaspora porte souvent une ambition forte, mais doit composer avec des informations partielles, des délais, des proches impliqués et des démarches locales complexes."
        image={images.collaboration}
        points={[
          "Vérifier l'opportunité avant d'engager des fonds importants.",
          "Identifier les responsabilités de chaque partie prenante.",
          "Créer un cadre de suivi compréhensible à distance.",
        ]}
      />

      <StatsBlock
        stats={[
          {
            value: "Clarté",
            label: "avant engagement",
            detail:
              "Cadrer les risques, le budget et les conditions de réussite.",
          },
          {
            value: "Présence",
            label: "sur le terrain",
            detail:
              "Coordonner les relais locaux et documenter les étapes importantes.",
          },
          {
            value: "Suivi",
            label: "dans la durée",
            detail:
              "Garder une lecture régulière de l'avancement et des décisions.",
          },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ce que nous sécurisons"
            title="Un accompagnement qui parle autant à l'investisseur qu'au terrain."
            description="Cogesto structure la relation entre votre vision, vos ressources et les réalités administratives, fiscales et opérationnelles au Sénégal."
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid items={strengths} />
          </div>
        </div>
      </section>

      <ImageTextSection
        eyebrow="Solution"
        title="Un relais professionnel pour protéger votre confiance."
        description="Nous aidons les porteurs de projets à passer d'une intention familiale ou entrepreneuriale à un projet documenté, finançable et pilotable."
        image={images.handshake}
        reverse
        points={[
          "Diagnostic des documents, coûts, délais et risques.",
          "Structuration financière, fiscale et opérationnelle.",
          "Suivi des jalons avec une communication claire.",
        ]}
      />

      <CTASection
        title="Votre projet mérite mieux qu'une décision à l'aveugle."
        description="Parlez à Cogesto pour poser un premier diagnostic sérieux."
      />
    </PageLayout>
  )
}
