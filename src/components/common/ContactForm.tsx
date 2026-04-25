import { Icon } from "@iconify/react"
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

export function ContactForm() {
  return (
    <form
      data-reveal
      onSubmit={(event) => event.preventDefault()}
      className="rounded-xl border border-[var(--cogesto-blue)]/10 bg-white p-5 text-[var(--cogesto-blue)] shadow-[0_28px_90px_rgba(7,35,66,0.12)] sm:p-6"
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
  )
}
