import { CTAButton } from "@/components/common/CTAButton"
import { SignatureLines } from "@/components/common/SignatureLines"
import { images } from "@/lib/images"

export function ControlStatement() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[var(--cogesto-blue)] py-28 text-white sm:py-36">
      <img
        data-parallax-image
        src={images.handshake.src}
        alt={images.handshake.alt}
        width="1800"
        height="1200"
        loading="lazy"
        className="absolute inset-0 -z-30 h-full w-full object-cover brightness-[0.65] contrast-125 grayscale"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,35,66,0.97),rgba(7,35,66,0.66)_52%,rgba(7,35,66,0.9))]" />
      <SignatureLines variant="light" className="-z-10 opacity-80" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:px-8">
        <div data-reveal>
          <p className="text-xs font-semibold tracking-[0.24em] text-[var(--cogesto-green-soft)] uppercase">
            Point de contrôle
          </p>
          <h2 className="mt-6 max-w-5xl text-5xl leading-[0.98] font-semibold tracking-[-0.02em] text-balance md:text-7xl">
            Décider avec méthode. Exécuter avec clarté.
          </h2>
        </div>

        <div
          data-reveal
          className="border-t border-white/22 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
        >
          <p className="max-w-md text-xl leading-9 text-white/78">
            Clarifier avant d'engager. Structurer avant de financer. Piloter
            après la décision.
          </p>
          <div className="mt-9">
            <CTAButton href="/processus" variant="light">
              Voir notre méthode
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
