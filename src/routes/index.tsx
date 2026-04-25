import { createFileRoute } from "@tanstack/react-router"
import { Icon } from "@iconify/react"
import arrowRightUp from "@iconify-icons/solar/arrow-right-up-linear"
import checkIcon from "@iconify-icons/solar/check-circle-bold-duotone"
import { CTASection } from "@/components/common/CTASection"
import { ControlStatement } from "@/components/common/ControlStatement"
import { FAQAccordion } from "@/components/common/FAQAccordion"
import { HeroSection } from "@/components/common/HeroSection"
import { OfficeCard } from "@/components/common/OfficeCard"
import { ProcessJourney } from "@/components/common/ProcessJourney"
import { SectionHeader } from "@/components/common/SectionHeader"
import { SignatureLines } from "@/components/common/SignatureLines"
import { SignatureStatement } from "@/components/common/SignatureStatement"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"
import { officeItems, services, strengths } from "@/lib/site"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "COGESTO CONSEILS | Conseil stratégique et financier",
      "Cabinet de conseil en stratégie, finance, structuration, gestion et développement pour entreprises, entrepreneurs, investisseurs et organisations."
    ),
  }),
  component: App,
})

function App() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Conseil stratégique & financier"
        title="Structurer, financer et développer vos projets avec méthode"
        subtitle="Des décisions claires pour avancer avec confiance"
        description="Cogesto Conseils accompagne les entrepreneurs, entreprises, investisseurs, organisations et membres de la diaspora dans la structuration, le financement, la gestion et le pilotage de leurs projets, avec une présence au Canada, au Sénégal et au Maroc."
        image={images.advisory}
        stats={[
          { value: "3", label: "bureaux connectés" },
          { value: "360°", label: "lecture projet" },
          { value: "CA · SN · MA", label: "présence transnationale" },
        ]}
      />

      <SignatureStatement />

      <section className="relative isolate overflow-hidden bg-[var(--cogesto-blue)] py-32 text-white sm:py-40">
        <SignatureLines variant="light" className="opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div data-reveal className="max-w-xl lg:sticky lg:top-28">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--cogesto-green-soft)] uppercase">
                Valeur
              </p>
              <h2 className="text-4xl leading-[1.06] font-semibold tracking-[-0.01em] text-balance md:text-5xl">
                Un système de conseil pour décider, financer et exécuter.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/72">
                Cogesto combine stratégie, finance, conformité et pilotage pour
                aider les porteurs de projets à passer d'une ambition à une
                trajectoire claire, documentée et exécutable.
              </p>
            </div>
            <div data-stagger className="border-t border-white/14">
              {services.map((service, index) => (
                <a
                  data-stagger-item
                  key={service.title}
                  href="/services"
                  className="group grid gap-5 border-b border-white/14 py-12 transition-colors duration-300 hover:bg-white/[0.04] sm:grid-cols-[5rem_1fr_2rem] lg:py-14"
                >
                  <div className="flex items-start gap-4 sm:block">
                    <span className="text-xs font-semibold tracking-[0.2em] text-white/42">
                      0{index + 1}
                    </span>
                    <span className="mt-5 hidden size-12 place-items-center rounded-md border border-white/12 bg-white/10 text-[var(--cogesto-green-soft)] sm:grid">
                      <Icon icon={service.icon} className="size-6" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-3xl leading-tight font-semibold tracking-[-0.01em] md:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                      {service.detail}
                    </p>
                  </div>
                  <Icon
                    icon={arrowRightUp}
                    className="size-6 text-white/36 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[var(--cogesto-blue)] py-32 text-white sm:py-40 lg:min-h-[760px]">
        <img
          data-parallax-image
          src={images.dakar.src}
          alt={images.dakar.alt}
          width="1800"
          height="1200"
          loading="lazy"
          style={{ objectPosition: images.dakar.position ?? "center" }}
          className="absolute inset-0 -z-20 h-full w-full object-cover brightness-75 contrast-125 grayscale"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,35,66,0.96),rgba(7,35,66,0.68)_54%,rgba(7,35,66,0.9))]" />
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-8">
          <div data-reveal className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-white/58 uppercase">
              Programme Diaspora & Investissement
            </p>
            <h2 className="text-4xl leading-[1.03] font-semibold tracking-[-0.01em] text-balance md:text-6xl">
              Un accompagnement dédié aux projets portés à distance.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/76">
              Au sein de son offre de conseil, Cogesto a développé une expertise
              spécifique pour les membres de la diaspora sénégalaise qui veulent
              investir, entreprendre ou suivre un projet au Sénégal avec
              méthode.
            </p>
          </div>
          <div data-stagger className="grid gap-4">
            {[
              {
                label: "Vérifier",
                text: "Qui vérifie les informations avant que l'argent parte ?",
              },
              {
                label: "Coordonner",
                text: "Qui suit les partenaires quand vous êtes à Montréal, Paris ou Casablanca ?",
              },
              {
                label: "Documenter",
                text: "Qui transforme une promesse locale en décision documentée ?",
              },
            ].map((point) => (
              <div
                data-stagger-item
                key={point.label}
                className="rounded-lg border border-white/14 bg-white/10 p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon={checkIcon}
                    className="size-5 shrink-0 text-[var(--cogesto-green-soft)]"
                  />
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/48 uppercase">
                    {point.label}
                  </p>
                </div>
                <p className="mt-4 text-xl leading-8 text-white/84">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ControlStatement />

      <ProcessJourney />

      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div
            data-reveal
            className="relative min-h-[520px] overflow-hidden rounded-lg bg-[var(--cogesto-blue)]"
          >
            <img
              src={images.handshake.src}
              alt={images.handshake.alt}
              width="1200"
              height="900"
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover brightness-75 contrast-125 grayscale"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,35,66,0.04),rgba(7,35,66,0.84))]" />
            <p className="absolute right-8 bottom-8 left-8 border-t border-white/24 pt-6 text-lg leading-8 text-white/82">
              Une décision transfrontalière sérieuse demande plus qu'un contact
              local: elle demande une méthode qui tient sous pression.
            </p>
          </div>
          <div data-stagger>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--cogesto-green)] uppercase">
              Pourquoi Cogesto
            </p>
            <h2 className="mt-5 text-4xl leading-[1.06] font-semibold tracking-[-0.01em] text-balance text-[var(--cogesto-blue)] md:text-5xl">
              Une expertise pensée pour les décisions exigeantes.
            </h2>
            <div className="mt-10 border-t border-[var(--cogesto-blue)]/10">
              {strengths.map((strength) => (
                <div
                  data-stagger-item
                  key={strength.title}
                  className="grid gap-4 border-b border-[var(--cogesto-blue)]/10 py-6 sm:grid-cols-[12rem_1fr]"
                >
                  <h3 className="text-lg font-semibold text-[var(--cogesto-blue)]">
                    {strength.title}
                  </h3>
                  <p className="text-sm leading-7 text-[var(--cogesto-slate)]">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,35,66,0.96),rgba(7,35,66,0.88))]" />
        <SignatureLines variant="light" className="-z-10 opacity-55" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div data-reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-[var(--cogesto-green-soft)] uppercase">
              Présence
            </p>
            <h2 className="text-4xl leading-[1.06] font-semibold tracking-[-0.01em] text-balance md:text-5xl">
              Une organisation reliée entre le Canada, le Sénégal et le Maroc.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Trois points d'ancrage pour conseiller les entreprises, préparer
              les financements, coordonner le terrain et ouvrir des passerelles
              régionales.
            </p>
          </div>
          <div
            data-stagger
            className="mt-16 grid gap-6 lg:grid-cols-12 lg:items-end"
          >
            {officeItems.map((office, index) => (
              <OfficeCard
                key={office.city}
                {...office}
                image={
                  [images.montreal, images.dakar, images.casablanca][index]
                }
                featured={index === 1}
                className={index === 1 ? "lg:col-span-6" : "lg:col-span-3"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="Questions fréquentes"
            title="Clarifier avant d'engager."
            description="Quelques réponses pour comprendre comment démarre une relation avec Cogesto."
          />
          <FAQAccordion />
        </div>
      </section>

      <CTASection />
    </PageLayout>
  )
}
