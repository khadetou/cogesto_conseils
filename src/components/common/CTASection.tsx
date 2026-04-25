import { CTAButton } from "@/components/common/CTAButton"
import { SignatureLines } from "@/components/common/SignatureLines"
import { images } from "@/lib/images"

type CTASectionProps = {
  title?: string
  description?: string
  secondaryHref?: string
  secondaryLabel?: string
}

export function CTASection({
  title = "Construisons une trajectoire claire pour votre projet.",
  description = "Un échange avec Cogesto permet de clarifier les risques, les priorités et les prochaines décisions à prendre.",
  secondaryHref = "/services",
  secondaryLabel = "Explorer les services",
}: CTASectionProps) {
  return (
    <section className="relative isolate flex min-h-[780px] items-end overflow-hidden bg-[var(--cogesto-blue)] py-32 text-white sm:py-40">
      <img
        data-parallax-image
        src={images.institution.src}
        alt=""
        width="1800"
        height="1000"
        loading="eager"
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-70 contrast-125 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,35,66,0.99),rgba(7,35,66,0.9)_54%,rgba(7,35,66,0.56))]" />
      <SignatureLines variant="light" className="-z-10 opacity-80" />
      <div
        data-reveal
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16 lg:px-8"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/58 uppercase">
            Consultation
          </p>
          <h2 className="mt-5 text-4xl leading-[1.02] font-semibold tracking-[-0.01em] text-balance md:text-6xl lg:text-[5.25rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
            {description}
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
          <CTAButton href="/contact" variant="light">
            Demander une consultation
          </CTAButton>
          <CTAButton
            href={secondaryHref}
            variant="primary"
            className="border border-white/18 bg-white/10 text-white hover:border-white hover:bg-white hover:text-[var(--cogesto-blue)]"
          >
            {secondaryLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
