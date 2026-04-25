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
      "Programme Diaspora & Investissement | COGESTO CONSEILS",
      "Un programme dédié aux membres de la diaspora sénégalaise qui souhaitent investir, entreprendre ou suivre un projet au Sénégal."
    ),
  }),
  component: DiasporaPage,
})

function DiasporaPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Programme Diaspora & Investissement"
        title="Un accompagnement dédié aux projets de la diaspora sénégalaise."
        description="Au sein de son offre de conseil, Cogesto a développé une expertise spécifique pour les membres de la diaspora qui souhaitent investir, entreprendre ou suivre un projet au Sénégal avec un cadre professionnel."
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
        description="Les investisseurs de la diaspora portent souvent une ambition forte, mais doivent composer avec des informations partielles, des délais, des proches impliqués et des démarches locales complexes."
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
            description="Cogesto structure la relation entre votre vision, vos ressources, vos partenaires et les réalités administratives, fiscales et opérationnelles du terrain."
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
        description="Nous aidons les porteurs de projets à passer d'une intention familiale, entrepreneuriale ou patrimoniale à un projet documenté, finançable et pilotable."
        image={images.handshake}
        reverse
        points={[
          "Diagnostic des documents, coûts, délais et risques.",
          "Structuration financière, fiscale et opérationnelle.",
          "Suivi des jalons avec une communication claire.",
        ]}
      />

      <CTASection
        title="Votre projet au Sénégal mérite un cadre clair."
        description="Parlez à Cogesto pour poser un premier diagnostic sérieux."
      />
    </PageLayout>
  )
}
