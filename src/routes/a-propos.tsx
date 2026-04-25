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
      "Découvrez Cogesto Conseils, cabinet transnational reliant la diaspora, les investisseurs et le Sénégal."
    ),
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="À propos"
        title="Une maison de conseil transnationale, structurée pour la confiance."
        description="Cogesto Conseils accompagne les décisions complexes qui relient capital, territoire et exécution. Notre mission: rendre l'investissement au Sénégal plus clair, plus sûr et plus pilotable."
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
        title="Créer un pont fiable entre les ambitions internationales et le terrain sénégalais."
        description="Cogesto est né d'une conviction simple: les projets de la diaspora et des investisseurs internationaux méritent un accompagnement sérieux, documenté et ancré localement."
        image={images.handshake}
        points={[
          "Traduire les ambitions en décisions opérationnelles.",
          "Réduire les risques liés à la distance, aux intermédiaires et aux démarches dispersées.",
          "Installer un cadre de suivi clair pour les investisseurs et leurs partenaires.",
        ]}
      />

      <StatsBlock
        stats={[
          {
            value: "4",
            label: "domaines",
            detail:
              "Conseil, financement, fiscalité et stratégie réunis dans une même lecture.",
          },
          {
            value: "3",
            label: "implantations",
            detail:
              "Canada, Sénégal et Maroc pour accompagner les projets à plusieurs échelles.",
          },
          {
            value: "0",
            label: "improvisation",
            detail:
              "Chaque mission démarre par un diagnostic et un cadre d'exécution.",
          },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Principes"
            title="La rigueur institutionnelle, avec la proximité d'un partenaire terrain."
            description="Notre valeur vient de l'équilibre entre méthode, réseau local, sens financier et compréhension des réalités diaspora."
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
        description="L'objectif n'est pas seulement de lancer un projet. Il est de le rendre solide: juridiquement lisible, financièrement crédible, fiscalement cohérent et opérationnellement suivi."
        image={images.institution}
        reverse
        points={[
          "Des arbitrages fondés sur des faits, pas sur des promesses.",
          "Une communication claire entre investisseurs, associés et partenaires locaux.",
          "Un accompagnement qui peut évoluer du cadrage à la croissance.",
        ]}
      />

      <CTASection
        title="Vous avez une ambition au Sénégal ? Commençons par la cadrer."
        secondaryHref="/processus"
        secondaryLabel="Voir le processus"
      />
    </PageLayout>
  )
}
