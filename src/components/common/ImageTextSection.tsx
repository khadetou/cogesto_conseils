import { Icon } from "@iconify/react"
import checkIcon from "@iconify-icons/solar/check-circle-bold-duotone"
import type { SiteImage } from "@/lib/images"
import { SectionHeader } from "@/components/common/SectionHeader"
import { cn } from "@/lib/utils"

type ImageTextSectionProps = {
  eyebrow: string
  title: string
  description: string
  image: SiteImage
  points?: Array<string>
  reverse?: boolean
}

export function ImageTextSection({
  eyebrow,
  title,
  description,
  image,
  points = [],
  reverse = false,
}: ImageTextSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div
        className={cn(
          "mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        <div
          data-reveal
          className="group overflow-hidden rounded-xl border border-[var(--cogesto-blue)]/10 shadow-[0_24px_70px_rgba(7,35,66,0.1)]"
        >
          <img
            data-parallax-image
            src={image.src}
            alt={image.alt}
            width="1200"
            height="900"
            loading="eager"
            style={{ objectPosition: image.position ?? "center" }}
            className="aspect-[4/3] w-full object-cover contrast-110 grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          {points.length ? (
            <ul data-stagger className="mt-8 grid gap-4">
              {points.map((point) => (
                <li
                  data-stagger-item
                  key={point}
                  className="flex gap-3 rounded-lg border border-[var(--cogesto-blue)]/10 bg-[var(--cogesto-mist)] p-4 text-sm leading-6 text-[var(--cogesto-blue)]"
                >
                  <Icon
                    icon={checkIcon}
                    className="mt-0.5 size-5 shrink-0 text-[var(--cogesto-green)]"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
