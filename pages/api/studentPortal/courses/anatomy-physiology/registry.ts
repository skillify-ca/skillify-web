import { ACTIVITIES } from "./activities";
import { CELLULAR } from "./cell";
import { INTEGUMENTARY } from "./integumentary";
import { CONNECTIVE } from "./tissue/connective-tissue";
import { EPITHELIAL } from "./tissue/epithelial-tissue";
import { JUNCTIONS } from "./tissue/gap-junctions";
import { MEMBRANES } from "./tissue/membranes";
import { OTHER_TISSUE } from "./tissue/other-tissue";
import type { PageData } from "./types";

export const normalizeId = (s: string) => s.trim().toLowerCase().replace(/[\s-]+/g, "_");

const ALL: PageData[] = [
  ...INTEGUMENTARY,
  ...CELLULAR,
  ...OTHER_TISSUE,
  ...EPITHELIAL,
  ...JUNCTIONS,
  ...CONNECTIVE,
  ...MEMBRANES,
  ...ACTIVITIES
];

const BY_ID: Record<string, PageData> = {};
for (const page of ALL) {
  if (BY_ID[page.id]) throw new Error(`Duplicate page id: ${page.id}`);
  BY_ID[page.id] = page;
}

export const getPage = (id: string): PageData | null => BY_ID[normalizeId(id)] ?? null;

// Lists every [label](id) link and every children entry that points at a page that doesn't exist
export function findBrokenLinks(): string[] {
  const broken: string[] = [];
  for (const page of ALL) {
    page.children?.forEach((c) => {
      if (!getPage(c)) broken.push(`${page.id}.children -> ${c}`);
    });
    if (page.type !== "detail") continue;
    for (const section of page.sections ?? []) {
      for (const item of section.items) {
        const re = /\[[^\]]+\]\(([^)]+)\)/g;
        let m: RegExpExecArray | null;
        while ((m = re.exec(item)) !== null) {
          if (!getPage(m[1])) broken.push(`${page.id}: ${m[1]}`);
        }
      }
    }
  }
  return broken;
}

if (process.env.NODE_ENV !== "production") {
  const broken = findBrokenLinks();
  if (broken.length) console.warn("Broken page links:", broken);
}