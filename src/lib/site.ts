import advisoryIcon from "@iconify-icons/solar/hand-heart-bold-duotone"
import analyticsIcon from "@iconify-icons/solar/chart-2-bold-duotone"
import bankIcon from "@iconify-icons/solar/banknote-2-bold-duotone"
import buildingIcon from "@iconify-icons/solar/buildings-3-bold-duotone"
import complianceIcon from "@iconify-icons/solar/verified-check-bold-duotone"
import documentIcon from "@iconify-icons/solar/document-add-bold-duotone"
import globalIcon from "@iconify-icons/solar/global-bold-duotone"
import growthIcon from "@iconify-icons/solar/graph-up-bold-duotone"
import networkIcon from "@iconify-icons/solar/users-group-rounded-bold-duotone"
import shieldIcon from "@iconify-icons/solar/shield-check-bold-duotone"
import walletIcon from "@iconify-icons/solar/wallet-money-bold-duotone"
import type { IconifyIcon } from "@iconify/types"

export type NavItem = {
  label: string
  href: string
}

export type FeatureItem = {
  title: string
  description: string
  icon: IconifyIcon
}

export type ServiceItem = FeatureItem & {
  detail: string
  points: Array<string>
}

export const navItems: Array<NavItem> = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" },
  { label: "Diaspora", href: "/diaspora" },
  { label: "Processus", href: "/processus" },
  { label: "Présence", href: "/presence" },
  { label: "Contact", href: "/contact" },
]

export const services: Array<ServiceItem> = [
  {
    title: "Conseil & Accompagnement",
    icon: advisoryIcon,
    description:
      "Cadrer l'ambition, clarifier les priorités et sécuriser chaque décision structurante.",
    detail:
      "Nous transformons une intention d'investissement en trajectoire opérationnelle: objectifs, risques, partenaires, gouvernance et calendrier.",
    points: [
      "Cadrage stratégique du projet",
      "Qualification des opportunités",
      "Sélection et coordination des partenaires",
    ],
  },
  {
    title: "Financement",
    icon: walletIcon,
    description:
      "Préparer des dossiers crédibles et construire une stratégie de financement lisible.",
    detail:
      "Cogesto aide les porteurs de projets à parler le langage des banques, investisseurs et institutions de financement.",
    points: [
      "Montage du dossier financier",
      "Lecture des risques et garanties",
      "Stratégie bancaire et levée de fonds",
    ],
  },
  {
    title: "Gestion & Fiscalité",
    icon: documentIcon,
    description:
      "Organiser la conformité, les flux et les responsabilités pour avancer sans fragilité.",
    detail:
      "Nous aidons à structurer la gestion administrative, fiscale et documentaire afin que le projet reste pilotable.",
    points: [
      "Structuration administrative",
      "Pilotage fiscal et conformité",
      "Organisation des documents clés",
    ],
  },
  {
    title: "Stratégie de croissance",
    icon: growthIcon,
    description:
      "Passer d'une opportunité à un actif durable, mesurable et prêt à grandir.",
    detail:
      "Nous travaillons le positionnement, l'entrée marché, les modèles de revenus et les arbitrages de développement.",
    points: [
      "Étude d'opportunité",
      "Feuille de route commerciale",
      "Suivi des indicateurs de croissance",
    ],
  },
]

export const strengths: Array<FeatureItem> = [
  {
    title: "Lecture transnationale",
    icon: globalIcon,
    description:
      "Une compréhension simultanée des attentes de la diaspora et des réalités d'exécution au Sénégal.",
  },
  {
    title: "Réseau local qualifié",
    icon: networkIcon,
    description:
      "Des relais pour vérifier les partenaires, fluidifier les démarches et limiter les angles morts.",
  },
  {
    title: "Conformité intégrée",
    icon: complianceIcon,
    description:
      "Une attention constante à la fiscalité, aux documents, aux responsabilités et à la traçabilité.",
  },
  {
    title: "Pilotage financier",
    icon: analyticsIcon,
    description:
      "Des décisions appuyées par des chiffres, des scénarios et une vision claire des risques.",
  },
]

export const officeItems = [
  {
    city: "Canada",
    role: "Relation diaspora, stratégie d'investissement et préparation des dossiers de financement.",
    focus: "Diaspora et financement",
    icon: bankIcon,
  },
  {
    city: "Sénégal",
    role: "Exécution locale, conformité, partenaires terrain et suivi des opérations.",
    focus: "Terrain et conformité",
    icon: buildingIcon,
  },
  {
    city: "Maroc",
    role: "Passerelles régionales, développement d'affaires et structuration de croissance.",
    focus: "Expansion régionale",
    icon: shieldIcon,
  },
]

export const processSteps = [
  {
    title: "Consultation",
    description:
      "Comprendre votre situation, votre horizon de décision et le niveau de maturité du projet.",
  },
  {
    title: "Diagnostic",
    description:
      "Évaluer la faisabilité, les risques, les besoins de financement et les conditions de réussite.",
  },
  {
    title: "Structuration",
    description:
      "Construire le montage opérationnel, fiscal, financier et documentaire adapté.",
  },
  {
    title: "Exécution",
    description:
      "Coordonner les démarches, partenaires, arbitrages et jalons prioritaires.",
  },
  {
    title: "Suivi",
    description:
      "Mesurer l'avancement, suivre les indicateurs et ajuster la trajectoire dans la durée.",
  },
]

export const faqs = [
  {
    question: "Cogesto accompagne-t-il les projets encore au stade d'idée ?",
    answer:
      "Oui. Le premier travail consiste souvent à clarifier l'opportunité, les risques, le budget et le meilleur chemin d'exécution avant d'engager des démarches coûteuses.",
  },
  {
    question: "Travaillez-vous uniquement avec la diaspora sénégalaise ?",
    answer:
      "Non. La diaspora est un public central, mais Cogesto accompagne aussi les investisseurs étrangers et les entreprises qui veulent s'implanter ou accélérer au Sénégal.",
  },
  {
    question: "Pouvez-vous intervenir sur la recherche de financement ?",
    answer:
      "Oui. L'accompagnement peut inclure la préparation du dossier, l'analyse des garanties, la structuration financière et la mise en relation avec des interlocuteurs adaptés.",
  },
  {
    question: "Comment démarre une mission ?",
    answer:
      "Par une consultation cadrée. Nous identifions vos objectifs, vos contraintes, vos documents disponibles et les décisions à prendre rapidement.",
  },
]
