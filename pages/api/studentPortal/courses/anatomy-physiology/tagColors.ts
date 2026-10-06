// tagColors.ts
const PALETTE = {
  blue:    "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  green:   "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  amber:   "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  rose:    "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300",
  purple:  "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
  teal:    "bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300",
  slate:   "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
} as const;

type Color = keyof typeof PALETTE;

// Keys are normalized (lowercase, trimmed), so "Merocrine" and "merocrine " both match
const TAG_COLORS: Record<string, Color> = {
  merocrine: "rose",
  apocrine: "rose",
  holocrine: "rose",
  exocrine: "purple",
  endocrine: "purple",
  "epithelial membrane": "blue",
  "connective membrane": "purple",
  unicellular: "slate",
  multicellular: "blue",
  compound: "green",
  simple: "green",
  tubular: "amber",
  acinar: "amber",
  "branched tubular": "amber",
  "branched acinar": "amber",
  "tubuloacinar": "amber",
  "coiled tubular": "amber",
};

const TAG_DESCRIPTIONS: Record<string, string> = {
  merocrine: "secretes products",
  apocrine: "pinches off product",
  holocrine: "cell erupts",
  exocrine: "limited effects via ducts",
  endocrine: "far-reachiing effects via bloodstream",
  unicellular: "single-celled glands"
};

// Stable fallback: the same unknown tag always gets the same color
const FALLBACKS: Color[] = ["teal", "purple", "blue", "amber", "green", "rose"];

export function tagClass(tag: string): string {
  const key = tag.trim().toLowerCase();
  const known = TAG_COLORS[key];
  if (known) return PALETTE[known];

  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return PALETTE[FALLBACKS[hash % FALLBACKS.length]];
}

export function tagDescription(tag: string): string {
  const key = tag.trim().toLowerCase();
  const known = TAG_DESCRIPTIONS[key];
  if (known) return known;

  return "";
}