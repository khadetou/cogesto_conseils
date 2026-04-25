import { Icon } from "@iconify/react"
import calendarIcon from "@iconify-icons/solar/calendar-mark-bold-duotone"
import earthIcon from "@iconify-icons/solar/earth-bold-duotone"
import lockIcon from "@iconify-icons/solar/lock-keyhole-bold-duotone"
import plainIcon from "@iconify-icons/solar/plain-bold-duotone"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/common/SectionHeader"

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--cogesto-blue)] py-20 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Premier échange"
            title="Parlez-nous de votre projet."
            description="Un échange structuré permet de comprendre votre situation, vos objectifs, vos délais, vos besoins de financement et les points de conformité à anticiper."
            className="[&_h2]:text-white [&_p:last-child]:text-white/72"
          />
          <div data-reveal className="mt-10 grid gap-4 text-sm text-white/76">
            <p className="flex items-center gap-3">
              <Icon icon={calendarIcon} className="size-5" />
              Consultation initiale orientée décision
            </p>
            <p className="flex items-center gap-3">
              <Icon icon={earthIcon} className="size-5" />
              Accompagnement Canada · Sénégal · Maroc
            </p>
            <p className="flex items-center gap-3">
              <Icon icon={lockIcon} className="size-5" />
              Informations traitées avec discrétion professionnelle
            </p>
          </div>
        </div>

        <form
          data-reveal
          className="rounded-xl border border-white/12 bg-white p-5 text-[var(--cogesto-blue)] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              Nom complet
              <Input
                name="name"
                placeholder="Votre nom"
                className="h-11 border-[var(--cogesto-blue)]/15"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <Input
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                className="h-11 border-[var(--cogesto-blue)]/15"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Pays de résidence
              <Input
                name="country"
                placeholder="Canada, France, Maroc..."
                className="h-11 border-[var(--cogesto-blue)]/15"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Service recherché
              <Select name="service">
                <SelectTrigger className="h-11 w-full border-[var(--cogesto-blue)]/15">
                  <SelectValue placeholder="Choisir un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conseil">
                    Conseil stratégique & accompagnement
                  </SelectItem>
                  <SelectItem value="financement">
                    Structuration financière & financement
                  </SelectItem>
                  <SelectItem value="gestion">
                    Gestion, fiscalité & conformité
                  </SelectItem>
                  <SelectItem value="strategie">
                    Organisation, pilotage & développement
                  </SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-medium">
            Message
            <Textarea
              name="message"
              placeholder="Décrivez votre projet, le secteur visé, le stade actuel et vos principales questions."
              className="min-h-36 border-[var(--cogesto-blue)]/15"
            />
          </label>

          <Button
            type="submit"
            className="mt-5 h-11 w-full rounded-md border border-[var(--cogesto-green)] bg-[var(--cogesto-green)] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--cogesto-green)]"
          >
            Envoyer ma demande
            <Icon icon={plainIcon} className="size-4" />
          </Button>
        </form>
      </div>
    </section>
  )
}
