export type SiteImage = {
  src: string
  alt: string
  credit: string
  position?: string
  zoom?: boolean
}

const params = "auto=format&fit=crop&w=1600&q=82"

export const images = {
  advisory: image(
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
    "Professionnelles noires en réunion stratégique autour d'une table",
    "Unsplash",
    {
      position: "50% 42%",
    }
  ),
  boardroom: image(
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    "Équipe de direction en réunion dans un environnement professionnel",
    "Unsplash"
  ),
  handshake: image(
    "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    "Poignée de main professionnelle entre partenaires d'affaires",
    "Unsplash"
  ),
  office: image(
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
    "Espace de travail contemporain et lumineux",
    "Unsplash"
  ),
  institution: image(
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    "Architecture d'affaires moderne et institutionnelle",
    "Unsplash"
  ),
  architecture: image(
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    "Façade architecturale moderne aux lignes précises",
    "Unsplash"
  ),
  collaboration: image(
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "Professionnels collaborant autour d'un projet",
    "Unsplash"
  ),
  residence: image(
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "Résidence contemporaine dans un environnement naturel",
    "Unsplash"
  ),
  montreal: image(
    "https://images.unsplash.com/photo-1508789733592-e934906d39cd",
    "Vue urbaine de Montréal au bord de l'eau",
    "Unsplash"
  ),
  dakar: image(
    "https://images.unsplash.com/photo-1655720357872-ce227e4164ba",
    "Entrepreneures africaines en échange de travail autour d'un projet",
    "Unsplash",
    {
      position: "50% 42%",
      zoom: true,
    }
  ),
  casablanca: image(
    "https://images.unsplash.com/photo-1636440276872-56c0894fa75c",
    "Architecture urbaine à Casablanca au Maroc",
    "Unsplash"
  ),
}

function image(
  src: string,
  alt: string,
  credit: string,
  options: Pick<SiteImage, "position" | "zoom"> = {}
): SiteImage {
  return {
    src: `${src}?${params}`,
    alt,
    credit,
    ...options,
  }
}
