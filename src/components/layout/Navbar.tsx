import { Icon } from "@iconify/react"
import arrowRightUp from "@iconify-icons/solar/arrow-right-up-linear"
import hamburgerIcon from "@iconify-icons/solar/hamburger-menu-linear"
import { Link, useRouterState } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CTAButton } from "@/components/common/CTAButton"
import { navItems } from "@/lib/site"
import { cn } from "@/lib/utils"

function Logo() {
  return (
    <Link to="/" className="flex items-center" aria-label="Cogesto Conseils">
      <img
        src="/cogesto-conseils-logo-dark.png"
        alt="Cogesto Conseils"
        width="1400"
        height="393"
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  )
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-[var(--cogesto-blue)]/10 bg-white/88 backdrop-blur-xl transition-[background-color,box-shadow] duration-300",
        scrolled && "bg-white/96 shadow-[0_12px_34px_rgba(7,35,66,0.08)]"
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20"
        )}
      >
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "group relative text-sm font-medium text-[var(--cogesto-slate)] transition-colors hover:text-[var(--cogesto-blue)]",
                pathname === item.href && "text-[var(--cogesto-blue)]"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[var(--cogesto-green)] transition-transform duration-300 group-hover:scale-x-100",
                  pathname === item.href && "scale-x-100"
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton href="/contact">Démarrer mon projet</CTAButton>
        </div>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="border-[var(--cogesto-blue)]/15 lg:hidden"
              aria-label="Ouvrir la navigation"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon icon={hamburgerIcon} className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[86vw] border-[var(--cogesto-blue)]/10 bg-white p-0">
            <SheetHeader className="border-b border-[var(--cogesto-blue)]/10 p-6 text-left">
              <SheetTitle className="sr-only">Menu Cogesto Conseils</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation principale du site Cogesto Conseils
              </SheetDescription>
              <Logo />
            </SheetHeader>
            <div className="flex flex-col gap-2 px-6 py-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-semibold text-[var(--cogesto-blue)] transition-colors hover:bg-[var(--cogesto-mist)]",
                      pathname === item.href && "bg-[var(--cogesto-mist)]"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
            <div className="mt-auto border-t border-[var(--cogesto-blue)]/10 p-6">
              <SheetClose asChild>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-[var(--cogesto-blue)] bg-[var(--cogesto-blue)] px-5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[var(--cogesto-blue)]"
                >
                  Démarrer mon projet
                  <Icon icon={arrowRightUp} className="size-4" />
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
