import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

let pluginsRegistered = false

function setupGsap() {
  if (typeof window === "undefined") {
    return null
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null
  }

  if (!pluginsRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    pluginsRegistered = true
  }

  return gsap
}

export function animateHero(scope: HTMLElement) {
  const engine = setupGsap()

  if (!engine) {
    return undefined
  }

  const context = engine.context(() => {
    const timeline = engine.timeline({
      defaults: { ease: "power3.out", duration: 0.45 },
    })

    timeline
      .from("[data-hero-kicker]", { y: 14, opacity: 0, duration: 0.28 })
      .from(
        "[data-hero-signature]",
        { x: 34, opacity: 0, duration: 0.5 },
        "-=0.18"
      )
      .from("[data-hero-map]", { x: 26, opacity: 0, duration: 0.6 }, "-=0.1")
      .from(
        "[data-signature-line]",
        { scaleY: 0, opacity: 0, duration: 0.62, stagger: 0.08 },
        "-=0.55"
      )
      .from(
        "[data-hero-accent]",
        { scaleY: 0, opacity: 0, duration: 0.58 },
        "-=0.55"
      )
      .from("[data-hero-title]", { y: 26, opacity: 0, duration: 0.52 }, "-=0.2")
      .from("[data-hero-copy]", { y: 18, opacity: 0 }, "-=0.34")
      .from("[data-hero-actions]", { y: 14, opacity: 0 }, "-=0.3")
      .from("[data-hero-card]", { y: 24, opacity: 0, stagger: 0.08 }, "-=0.5")
  }, scope)

  return () => context.revert()
}

export function revealOnScroll(scope: HTMLElement) {
  const engine = setupGsap()

  if (!engine) {
    return undefined
  }

  const context = engine.context(() => {
    engine.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
      engine.fromTo(
        element,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.62,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        }
      )
    })

    engine.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
      const items = group.querySelectorAll("[data-stagger-item]")

      engine.fromTo(
        items,
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.56,
          ease: "power3.out",
          stagger: 0.08,
          immediateRender: false,
          scrollTrigger: {
            trigger: group,
            start: "top 88%",
            once: true,
          },
        }
      )
    })

    engine.utils.toArray<HTMLElement>("[data-timeline]").forEach((group) => {
      const items = group.querySelectorAll("[data-timeline-item]")
      const rail = group.querySelector("[data-timeline-rail]")

      if (rail) {
        engine.fromTo(
          rail,
          { scaleX: 0, scaleY: 0.15, transformOrigin: "left center" },
          {
            scaleX: 1,
            scaleY: 1,
            duration: 0.82,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: group,
              start: "top 86%",
              once: true,
            },
          }
        )
      }

      engine.fromTo(
        items,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.54,
          ease: "power3.out",
          stagger: 0.12,
          immediateRender: false,
          scrollTrigger: {
            trigger: group,
            start: "top 88%",
            once: true,
          },
        }
      )
    })
  }, scope)

  return () => context.revert()
}

export function parallaxImages(scope: HTMLElement) {
  const engine = setupGsap()

  if (!engine) {
    return undefined
  }

  const context = engine.context(() => {
    engine.utils
      .toArray<HTMLElement>("[data-parallax-image]")
      .forEach((image) => {
        engine.to(image, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        })
      })
  }, scope)

  return () => context.revert()
}

export function magneticHover(element: HTMLElement) {
  const engine = setupGsap()

  if (!engine) {
    return undefined
  }

  const onEnter = () =>
    engine.to(element, { y: -4, duration: 0.28, ease: "power2.out" })
  const onLeave = () =>
    engine.to(element, { y: 0, duration: 0.28, ease: "power2.out" })

  element.addEventListener("mouseenter", onEnter)
  element.addEventListener("mouseleave", onLeave)

  return () => {
    element.removeEventListener("mouseenter", onEnter)
    element.removeEventListener("mouseleave", onLeave)
  }
}
