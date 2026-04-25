import { Link } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"
import { navItems } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-[var(--cogesto-blue)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.8fr_0.95fr_1fr]">
          <div>
            <div className="inline-flex">
              <img
                src="/cogesto-conseils-logo-light.png"
                alt="Cogesto Conseils"
                width="1400"
                height="393"
                className="h-11 w-auto"
              />
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              Conseil transnational pour investir, structurer et développer des
              projets solides entre le Canada, le Sénégal et le Maroc.
            </p>
            <p className="mt-5 text-sm font-semibold text-white">
              Le pont entre vous et le Sénégal.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white/60 uppercase">
              Navigation
            </h3>
            <div className="mt-4 grid gap-3">
              {navItems.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-white/76 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white/60 uppercase">
              Implantations
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/76">
              <p>Canada: stratégie diaspora et financement</p>
              <p>Sénégal: exécution locale et conformité</p>
              <p>Maroc: passerelles régionales et croissance</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-[0.16em] text-white/60 uppercase">
              Contact
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/76">
              <p>Consultation sur rendez-vous</p>
              <p>Canada · Sénégal · Maroc</p>
              <p>contact@cogesto-conseils.com</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/12" />

        <div className="flex flex-col gap-3 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 COGESTO CONSEILS. Tous droits réservés.</p>
          <p>Conseil, financement, fiscalité et croissance.</p>
        </div>
      </div>
    </footer>
  )
}
