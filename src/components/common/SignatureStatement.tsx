import { CTAButton } from "@/components/common/CTAButton"
import { images } from "@/lib/images"

export function SignatureStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-[var(--cogesto-mist)] lg:block" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div data-reveal className="relative">
          <p className="text-xs font-semibold tracking-[0.22em] text-[var(--cogesto-green)] uppercase">
            Signature Cogesto
          </p>
          <blockquote className="mt-7 max-w-2xl text-4xl leading-[1.06] font-semibold tracking-[-0.01em] text-balance text-[var(--cogesto-blue)] md:text-5xl lg:text-[3.7rem]">
            Des décisions solides. Pas des promesses.
          </blockquote>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--cogesto-slate)]">
            Cogesto transforme l'intention d'investir en cadre clair:
            diagnostic, structuration, conformité et suivi terrain.
          </p>
          <div className="mt-9">
            <CTAButton href="/a-propos">Comprendre notre approche</CTAButton>
          </div>
        </div>

        <div
          data-reveal
          className="relative min-h-[460px] overflow-hidden rounded-lg bg-[var(--cogesto-blue)] shadow-[0_30px_90px_rgba(7,35,66,0.16)]"
        >
          <img
            src={images.boardroom.src}
            alt={images.boardroom.alt}
            width="1200"
            height="900"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover brightness-80 contrast-125 grayscale"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,35,66,0.06),rgba(7,35,66,0.78))]" />
          <div className="absolute right-8 bottom-8 left-8 border-t border-white/24 pt-6 text-white">
            <p className="text-sm leading-7 text-white/72">
              Une méthode transnationale pour relier capital, conformité,
              partenaires et exécution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
