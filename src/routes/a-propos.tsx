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

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: pageMeta(
      "À propos | COGESTO CONSEILS",
      "Découvrez Cogesto Conseils, cabinet de conseil en stratégie et finance actif entre le Canada, le Sénégal et le Maroc."
    ),
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="À propos"
        title="Un cabinet de conseil pour structurer les décisions et soutenir la croissance."
        description="Cogesto Conseils accompagne les entrepreneurs, entreprises, investisseurs et organisations dans les décisions qui engagent la stratégie, la finance, la gestion et l'exécution."
        image={images.boardroom}
        compact
        stats={[
          { value: "3", label: "pays d'ancrage" },
          { value: "1", label: "méthode de pilotage" },
          { value: "360°", label: "lecture projet" },
        ]}
      />

      <ImageTextSection
        eyebrow="Mission"
        title="Accompagner les projets avec rigueur, méthode et responsabilité."
        description="Notre mission est d'accompagner les entrepreneurs, entreprises, investisseurs et organisations dans la structuration, le financement, la gestion et le développement de leurs projets."
        image={images.handshake}
        points={[
          "Traduire les ambitions en décisions opérationnelles.",
          "Structurer les dossiers financiers, administratifs et fiscaux.",
          "Installer un cadre de pilotage clair pour les dirigeants, investisseurs et partenaires.",
        ]}
      />

      <StatsBlock
        stats={[
          {
            value: "Mission",
            label: "accompagner",
            detail:
              "Structurer, financer, gérer et développer les projets avec une lecture stratégique et financière.",
          },
          {
            value: "Vision",
            label: "connecter",
            detail:
              "Devenir un cabinet de référence capable de connecter expertises, marchés et opportunités entre le Canada, le Sénégal, le Maroc et l'Afrique de l'Ouest.",
          },
          {
            value: "Valeurs",
            label: "exécuter",
            detail:
              "Rigueur, proximité, confiance, transparence, impact et sens de l'exécution.",
          },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Principes"
            title="La rigueur institutionnelle, avec la proximité d'un partenaire terrain."
            description="Notre valeur vient de l'équilibre entre méthode, expertise financière, réseau local et compréhension des réalités entrepreneuriales."
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid items={strengths} />
          </div>
        </div>
      </section>

      <ImageTextSection
        eyebrow="Positionnement"
        title="Un conseil qui protège la décision autant que l'exécution."
        description="L'objectif n'est pas seulement de lancer un projet. Il est de le rendre solide: stratégiquement cohérent, financièrement crédible, fiscalement lisible et opérationnellement suivi."
        image={images.institution}
        reverse
        points={[
          "Des arbitrages fondés sur des faits, pas sur des promesses.",
          "Une communication claire entre dirigeants, investisseurs, associés et partenaires.",
          "Un accompagnement qui peut évoluer du cadrage à la croissance.",
        ]}
      />

      <CTASection
        title="Vous avez un projet à structurer ? Commençons par le cadrer."
        secondaryHref="/processus"
        secondaryLabel="Voir le processus"
      />
    </PageLayout>
  )
}
