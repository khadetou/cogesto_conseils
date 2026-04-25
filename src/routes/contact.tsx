import { Icon } from "@iconify/react"
import calendarIcon from "@iconify-icons/solar/calendar-mark-bold-duotone"
import earthIcon from "@iconify-icons/solar/earth-bold-duotone"
import lockIcon from "@iconify-icons/solar/lock-keyhole-bold-duotone"
import { createFileRoute } from "@tanstack/react-router"
import { ContactForm } from "@/components/common/ContactForm"
import { FAQAccordion } from "@/components/common/FAQAccordion"
import { HeroSection } from "@/components/common/HeroSection"
import { SectionHeader } from "@/components/common/SectionHeader"
import { PageLayout } from "@/components/layout/PageLayout"
import { images } from "@/lib/images"
import { pageMeta } from "@/lib/meta"

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta(
      "Contact | COGESTO CONSEILS",
      "Demandez une consultation avec Cogesto Conseils pour cadrer votre projet de stratégie, financement, gestion ou développement."
    ),
  }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <PageLayout>
      <HeroSection
        eyebrow="Contact"
        title="Parlez-nous de votre projet."
        description="Une première consultation permet de comprendre votre situation, vos objectifs, vos délais, vos besoins de financement, vos enjeux de gestion et les points de conformité à anticiper."
        image={images.handshake}
        compact
        primaryCta="Remplir le formulaire"
        primaryHref="#contact-form"
        secondaryCta="Voir les services"
        secondaryHref="/services"
      />

      <section id="contact-form" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Premier échange"
              title="Un cadrage clair avant toute mission."
              description="Expliquez votre projet, votre pays de résidence, le type d'accompagnement recherché et les décisions qui vous bloquent aujourd'hui."
            />
            <div data-stagger className="mt-10 grid gap-4">
              {[
                {
                  icon: calendarIcon,
                  text: "Consultation initiale orientée décision",
                },
                {
                  icon: earthIcon,
                  text: "Accompagnement Canada · Sénégal · Maroc",
                },
                {
                  icon: lockIcon,
                  text: "Informations traitées avec discrétion professionnelle",
                },
              ].map((item) => (
                <div
                  data-stagger-item
                  key={item.text}
                  className="flex gap-3 rounded-lg border border-[var(--cogesto-blue)]/10 bg-[var(--cogesto-mist)] p-4 text-sm text-[var(--cogesto-blue)]"
                >
                  <Icon
                    icon={item.icon}
                    className="size-5 shrink-0 text-[var(--cogesto-green)]"
                  />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="bg-[var(--cogesto-mist)] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <SectionHeader
            eyebrow="Avant de nous écrire"
            title="Les bonnes informations accélèrent le diagnostic."
            description="Indiquez le secteur, le stade du projet, les fonds déjà engagés, les partenaires impliqués et les délais souhaités."
          />
          <FAQAccordion />
        </div>
      </section>
    </PageLayout>
  )
}
