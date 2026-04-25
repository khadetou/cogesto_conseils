import { createFileRoute } from "@tanstack/react-router"
import type { SiteImage } from "@/lib/images"
import { CTASection } from "@/components/common/CTASection"
import { FeatureGrid } from "@/components/common/FeatureGrid"
import { HeroSection } from "@/components/common/HeroSection"
import { ImageTextSection } from "@/components/common/ImageTextSection"
import { OfficeCard } from "@/components/common/OfficeCard"
import { SectionHeader } from "@/components/common/SectionHeader"
import { SignatureLines } from "@/components/common/SignatureLines"
import { StatsBlock } from "@/components/common/StatsBlock"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"
import { officeItems, strengths } from "@/lib/site"

const officeImages: Array<SiteImage> = [
  images.montreal,
  images.dakar,
  images.casablanca,
]

export const Route = createFileRoute("/presence")({
  head: () => ({
    meta: pageMeta(
      "Présence | COGESTO CONSEILS",
      "Cogesto Conseils relie le Canada, le Sénégal et le Maroc pour accompagner les investissements transnationaux."
    ),
  }),
  component: PresencePage,
})

function PresencePage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Présence"
        title="Canada, Sénégal, Maroc: trois ancrages pour une même exigence."
        description="Cogesto relie les investisseurs, les partenaires locaux et les marchés régionaux dans une organisation pensée pour les projets transfrontaliers."
        image={images.dakar}
        compact
        stats={[
          { value: "CA", label: "relation diaspora" },
          { value: "SN", label: "terrain et conformité" },
          { value: "MA", label: "passerelles régionales" },
        ]}
      />

      <section className="relative isolate overflow-hidden bg-[var(--cogesto-blue)] py-32 text-white sm:py-40">
        <img
          data-parallax-image
          src={images.collaboration.src}
          alt=""
          width="1800"
          height="1200"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-50 contrast-125 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,35,66,0.96),rgba(7,35,66,0.9))]" />
        <SignatureLines variant="light" className="-z-10 opacity-60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-reveal className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[var(--cogesto-green-soft)] uppercase">
              Implantations
            </p>
            <h2 className="mt-5 text-4xl leading-[1.06] font-semibold tracking-[-0.01em] text-balance md:text-5xl">
              Une présence pensée pour réduire la distance entre décision et
              exécution.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              Chaque bureau a un rôle: écouter l'investisseur, coordonner le
              terrain, ouvrir les relais utiles.
            </p>
          </div>
          <div data-stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {officeItems.map((office, index) => (
              <OfficeCard
                key={office.city}
                {...office}
                image={officeImages[index] ?? images.office}
              />
            ))}
          </div>
        </div>
      </section>

      <StatsBlock
        stats={[
          {
            value: "Canada",
            label: "écoute et financement",
            detail:
              "Comprendre les investisseurs établis à l'étranger et préparer les dossiers.",
          },
          {
            value: "Sénégal",
            label: "exécution locale",
            detail:
              "Suivre les démarches, les partenaires et les réalités administratives.",
          },
          {
            value: "Maroc",
            label: "croissance régionale",
            detail:
              "Ouvrir des perspectives d'affaires et d'expansion transfrontalière.",
          },
        ]}
      />

      <ImageTextSection
        eyebrow="Coordination"
        title="Une présence utile seulement si elle améliore la qualité des décisions."
        description="La géographie n'a de valeur que si elle sert la méthode: vérifier, structurer, financer, exécuter et suivre."
        image={images.advisory}
        points={[
          "Des informations mieux qualifiées avant les engagements.",
          "Des interlocuteurs mieux coordonnés pendant l'exécution.",
          "Une vision régionale pour les projets à potentiel de croissance.",
        ]}
      />

      <section className="bg-[var(--cogesto-mist)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Force du réseau"
            title="Un réseau utile, cadré par une méthode."
            description="Cogesto ne remplace pas la décision de l'investisseur. Nous lui donnons les conditions pour décider mieux."
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid items={strengths} />
          </div>
        </div>
      </section>

      <CTASection
        title="Votre projet traverse plusieurs territoires ?"
        description="Nous aidons à relier les bonnes personnes, les bonnes décisions et les bons jalons."
      />
    </PageLayout>
  )
}
