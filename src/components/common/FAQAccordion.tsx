import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/site"

type FAQAccordionProps = {
  items?: typeof faqs
}

export function FAQAccordion({ items = faqs }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`item-${index}`}
          className="border-[var(--cogesto-blue)]/10"
        >
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-[var(--cogesto-blue)] hover:text-[var(--cogesto-green)]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-7 text-[var(--cogesto-slate)]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
