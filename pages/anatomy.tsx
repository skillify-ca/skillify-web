import { cn } from "cn";
import { ReactNode, useEffect, useState } from "react";

import { ChevronRight, LockIcon } from "lucide-react";

// Adjust these paths to wherever registry.ts and types.ts live in your project
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@base-ui/react";
import { shuffle } from "lodash";
import NavbarV3 from "../components/landingPage/NavbarV3";
import { getPage, normalizeId } from "./api/studentPortal/courses/anatomy-physiology/registry";
import { tagClass, tagDescription } from "./api/studentPortal/courses/anatomy-physiology/tagColors";
import { CategorizeGamePage, CategoryProperty, DetailPage, DirectoryPage, MatchingGamePageData, PageData } from "./api/studentPortal/courses/anatomy-physiology/types";

/* -------------------------------------------------------------------------- */
/* Sidebar tree (derived from the page registry)                              */
/* -------------------------------------------------------------------------- */

type TreeNode = { label: string; id?: string; children?: TreeNode[] };

// A node whose label, id and children all come from the page data
const fromPage = (id: string, seen: Set<string> = new Set()): TreeNode => {
  const page = getPage(id);
  if (!page) return { label: id, id }; // not in the registry yet
  if (seen.has(page.id)) return { label: page.title, id: page.id }; // guards against cycles
  const nextSeen = new Set(seen);
  nextSeen.add(page.id);
  return {
    label: page.title,
    id: page.id,
    children: page.children?.map((c) => fromPage(c, nextSeen)),
  };
};

// A heading with no page of its own
const group = (label: string, children: TreeNode[]): TreeNode => ({ label, children });

const TREE: TreeNode[] = [
  group("Body Systems", [
    group("Integumentary", [
      group("Skin", [
        fromPage("epidermis"),
        fromPage("dermis"),
        fromPage("hypodermis"),
      ]),
      fromPage("skin_glands"),
      fromPage("hair"),
      fromPage("nails"),
      fromPage("sensory_receptors"),
    ]),
    group("Skeletal", [
      group("Processes", [
        group("Bone Formation", [
          fromPage("Intermembranous Ossification"),
          fromPage("Endochondral Ossification")
        ]),
        group("Bone Growth", [
          fromPage("Growth in Length"),
          fromPage("Growth in Thickenss")
        ]),
        fromPage("Bone Remodelling")
      ])
    ])
  ]),
  group("Tissue Level of Organization", [
    fromPage("cell_junctions"),
    fromPage("epithelial_tissue"),
    fromPage("connective_tissue"),
    fromPage("membranes"),
    fromPage("muscular_tissue"),
    fromPage("nervous_tissue"),
  ]),
  group("Cellular Level of Organization", [
    group("Structures", [
      fromPage("plasma_membrane"),
      fromPage("organelles"),
      fromPage("cytosol"),
      group("Cytoskeleton", [
        fromPage("microfilaments"),
        fromPage("intermediate_filaments"),
        fromPage("microtubules"),
      ]),
      fromPage("nucleus"),
    ]),
    group("Processes", [
      fromPage("membrane_transport"),
      fromPage("protein_synthesis"),
      fromPage("cell_division"),
    ])
  ]),
  group("Specialized Cells", [
    fromPage("synoviocytes"),
    fromPage("Chondrocytes"),
    fromPage("Osteocytes"),
    fromPage("keratinocytes"),
    fromPage("melanocytes"),
    fromPage("langerhans"),
    fromPage("merkel"),

  ]
  ),
  group("Specialized Body Fluids", [
    fromPage("synovial_fluid"), fromPage("mucus"),
    fromPage("Blood Plasma"),
    fromPage("Lymph"),
    fromPage("Cerebrospinal Fluid"),
  ]
  ),
  group("Activities", [
    fromPage("cell_structure_matching"),
    fromPage("cell_function_matching"),
    fromPage("surface_epithelial_matching"),
    fromPage("connective_tissue_matching"),
    fromPage("thick_vs_thin_skin"),
    fromPage("female_vs_male_pelvis"),
    fromPage("skeletal_vs_cardiac_vs_smooth_muscle"),
    fromPage("skeletal_muscle_fiber_types"),
  ])
];

// Expand-keys of every ancestor of the node with this id (same key scheme as <Tree>)
function ancestorKeys(nodes: TreeNode[], id: string, parentKey = ""): string[] | null {
  for (const node of nodes) {
    const key = `${parentKey}/${node.label}`;
    if (node.id && normalizeId(node.id) === normalizeId(id)) return [];
    if (node.children) {
      const found = ancestorKeys(node.children, id, key);
      if (found) return [key, ...found];
    }
  }
  return null;
}

type TreeProps = {
  nodes: TreeNode[];
  selected: string;
  onSelect: (id: string) => void;
  expanded: Set<string>;
  onToggle: (key: string) => void;
  depth?: number;
  parentKey?: string;
};

function Tree({ nodes, selected, onSelect, expanded, onToggle, depth = 0, parentKey = "" }: TreeProps) {
  return (
    <ul className="w-full">
      {nodes.map((node) => {
        const key = `${parentKey}/${node.label}`;
        const hasChildren = !!node.children?.length;
        const isOpen = expanded.has(key);
        const isSelected = !!node.id && normalizeId(node.id) === normalizeId(selected);

        const handleLabelClick = () => {
          if (node.id) onSelect(node.id);
          if (hasChildren) onToggle(key);
        };

        return (
          <li key={key}>
            <div
              className={cn(
                "flex items-center rounded-md text-sm hover:bg-slate-100",
                isSelected && "bg-slate-200 font-semibold"
              )}
              style={{ paddingLeft: depth * 12 }}
            >
              {hasChildren ? (
                <button
                  type="button"
                  aria-label={`${isOpen ? "Collapse" : "Expand"} ${node.label}`}
                  aria-expanded={isOpen}
                  onClick={() => onToggle(key)}
                  className="p-2"
                >
                  <ChevronRight className={cn("h-4 w-4 transition-transform", isOpen && "rotate-90")} />
                </button>
              ) : (
                <span className="w-8" />
              )}
              <button type="button" onClick={handleLabelClick} className="flex-1 py-2 pr-2 text-left">
                {node.label}
              </button>
            </div>

            {hasChildren && isOpen && (
              <Tree
                nodes={node.children!}
                selected={selected}
                onSelect={onSelect}
                expanded={expanded}
                onToggle={onToggle}
                depth={depth + 1}
                parentKey={key}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

const LessonPage = () => {
  const [selected, setSelected] = useState("cell_structure_matching");
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["/Activities"])
  );

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  // One entry point for everything that changes the page (sidebar, links, cards)
  const navigate = (id: string) => {
    setSelected(id);
    const keys = ancestorKeys(TREE, id);
    if (keys && keys.length) {
      setExpanded((prev) => {
        const next = new Set(prev);
        keys.forEach((k) => next.add(k));
        return next;
      });
    }
  };

  const page = getPage(selected);

  return (
    <div className="bg-slate-200 h-screen">
      <div className="grid max-w-8xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12 md:grid-cols-[280px_1fr]">
        <aside className="rounded-lg bg-white p-3 shadow-md self-start">
          <h1 className="mb-2 px-1 text-xl font-bold">Anatomy and Physiology</h1>
          <Tree
            nodes={TREE}
            selected={selected}
            onSelect={navigate}
            expanded={expanded}
            onToggle={toggle}
          />
        </aside>

        <div id="content" className="p-4 bg-white rounded-lg shadow-md">
          {page ? (
            <PageView key={selected} page={page} onNavigate={navigate} />
          ) : (
            <p className="text-slate-500">Nothing here yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Rendering by page type                                                     */
/* -------------------------------------------------------------------------- */

function PageView({ page, onNavigate }: { page: PageData; onNavigate: (id: string) => void }) {
  switch (page.type) {
    case "detail":
      return <BaseCard page={page} onTermClick={onNavigate} />;
    case "directory":
      return <DirectoryCard page={page} onNavigate={onNavigate} />;
    case "categorize":
      return <CategoryGamePage page={page} />
    case "matching":
      return <MatchingGamePage page={page} />
  }
}


type Card = { id: number; text: string }
type Selection = { id: number; column: 1 | 2 } | null

const MatchingGamePage = ({ page }: { page: MatchingGamePageData }) => {
  const [columnOne, setColumnOne] = useState<Card[]>([])
  const [columnTwo, setColumnTwo] = useState<Card[]>([])
  const [matchedIds, setMatchedIds] = useState<number[]>([])
  const [selected, setSelected] = useState<Selection>(null)
  const [wrongPair, setWrongPair] = useState<{ one: number; two: number } | null>(null)
  const [incorrectClicks, setIncorrectClicks] = useState(0)

  const total = page.itemPairs.length
  const isComplete = total > 0 && matchedIds.length === total
  const progress = total > 0 ? (matchedIds.length / total) * 100 : 0

  function setup() {
    // Each card's id is the index of its pair, so a match is simply "same id"
    setColumnOne(shuffle(page.itemPairs.map((it, id) => ({ id, text: it[0] }))))
    setColumnTwo(shuffle(page.itemPairs.map((it, id) => ({ id, text: it[1] }))))
  }

  useEffect(() => {
    setup()
  }, [])

  function onClick(card: Card, column: 1 | 2) {
    if (wrongPair) return // ignore clicks during the wrong-answer flash
    if (matchedIds.includes(card.id)) return

    // Nothing selected yet
    if (!selected) {
      setSelected({ id: card.id, column })
      return
    }

    // Same column: deselect if same card, otherwise switch selection
    if (selected.column === column) {
      setSelected(selected.id === card.id ? null : { id: card.id, column })
      return
    }

    // Different column: check for a match
    if (selected.id === card.id) {
      setMatchedIds(prev => [...prev, card.id])
    } else {
      setIncorrectClicks(n => n + 1)
      setWrongPair({
        one: column === 1 ? card.id : selected.id,
        two: column === 2 ? card.id : selected.id,
      })
      setTimeout(() => setWrongPair(null), 500)
    }
    setSelected(null)
  }

  function onReset() {
    setup()
    setMatchedIds([])
    setSelected(null)
    setWrongPair(null)
    setIncorrectClicks(0)
  }

  function cardState(card: Card, column: 1 | 2): CardState {
    if (matchedIds.includes(card.id)) return "matched"
    if (wrongPair && (column === 1 ? wrongPair.one : wrongPair.two) === card.id) return "wrong"
    if (selected && selected.id === card.id && selected.column === column) return "active"
    return "default"
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-8">
      {/* Header */}
      <div className="w-full">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {matchedIds.length} of {total} matched
          </span>
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-sm font-bold transition-colors ${
                incorrectClicks === 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              Incorrect clicks: {incorrectClicks}
            </span>
            <Button
              onClick={onReset}
              className="cursor-pointer rounded-lg bg-orange-400 px-4 py-1.5 text-sm font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-md active:translate-y-0"
            >
              Reset
            </Button>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-orange-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {!isComplete && (
          <p className="mt-2 text-center text-sm text-gray-500">
            Aim for 0 incorrect clicks to be exam-ready
          </p>
        )}
      </div>

      {/* Completion banner */}
      {isComplete && (
        <div className="flex w-full flex-col items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white p-6 text-center shadow-lg">
          <p className="text-5xl">{incorrectClicks === 0 ? "🎉" : incorrectClicks <= 3 ? "👏" : "💪"}</p>
          <h2 className="text-2xl font-bold text-gray-800">
            {incorrectClicks === 0
              ? "Perfect! You're exam-ready."
              : `Done with ${incorrectClicks} incorrect ${incorrectClicks === 1 ? "click" : "clicks"}`}
          </h2>
          <p className="text-gray-500">
            {incorrectClicks === 0
              ? "Flawless round."
              : "Try again and aim for zero mistakes."}
          </p>
          <Button
            onClick={onReset}
            className="mt-2 cursor-pointer rounded-xl bg-blue-500 px-8 py-3 font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md"
          >
            Play again
          </Button>
        </div>
      )}

      {/* Columns */}
      <div className="grid w-full grid-cols-2 gap-4 sm:gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="border-b-2 border-gray-200 pb-2 text-center text-sm font-bold uppercase tracking-wide text-gray-600">
            {page.columnOne}
          </h3>
          {columnOne.map(card => (
            <MatchingCard
              key={card.id}
              term={card.text}
              state={cardState(card, 1)}
              onClick={() => onClick(card, 1)}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="border-b-2 border-gray-200 pb-2 text-center text-sm font-bold uppercase tracking-wide text-gray-600">
            {page.columnTwo}
          </h3>
          {columnTwo.map(card => (
            <MatchingCard
              key={card.id}
              term={card.text}
              state={cardState(card, 2)}
              onClick={() => onClick(card, 2)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

type CardState = "default" | "active" | "matched" | "wrong"

const cardStyles: Record<CardState, string> = {
  default:
    "border-gray-200 bg-white text-gray-800 shadow hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md cursor-pointer",
  active:
    "border-blue-400 bg-blue-50 text-blue-900 shadow-md ring-2 ring-blue-300 cursor-pointer",
  matched:
    "border-green-200 bg-green-50 text-green-700 opacity-60 cursor-default",
  wrong:
    "border-red-400 bg-red-50 text-red-800 ring-2 ring-red-300 animate-[shake_0.4s_ease-in-out]",
}

const MatchingCard = ({
  term,
  state,
  onClick,
}: {
  term: string
  state: CardState
  onClick: () => void
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={state === "matched"}
      className={`flex min-h-[3.5rem] w-full items-center justify-center gap-2 rounded-xl border-2 px-3 py-3 text-center text-sm font-medium transition-all duration-200 sm:text-base ${cardStyles[state]}`}
    >
      {state === "matched" && <span aria-hidden>✓</span>}
      <span>{term}</span>
    </button>
  )
}

const SectionHeader = ({ title }: { title: string }) => {
  const icons: Record<string, string> = {
    Structure: "🧱",
    Layers: "🧱",
    Functions: "⚙️",
    Characteristics: "⚙️",
    Surfaces: "🧭",
    Types: "📋",
    Location: "📍",
    Questions: "❓",
  };

  return (
    <h2 className="mb-3 text-xl font-bold">
      {icons[title] && `${icons[title]} `}
      {title}
    </h2>
  );
};

// Turns "text [label](id) more text" into text with clickable terms
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderRichText(text: string, onTermClick?: (id: string) => void): ReactNode[] {
  const parts: ReactNode[] = [];
  const re = new RegExp(LINK_RE.source, "g"); // fresh regex so lastIndex starts at 0
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    const [full, label, id] = match;
    const start = match.index;

    if (start > last) parts.push(text.slice(last, start));

    parts.push(
      <button
        key={start}
        type="button"
        onClick={() => onTermClick?.(id)}
        className="inline underline text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        {label}
      </button>
    );
    last = start + full.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

const LockedNotice = ({ message }: { message?: string }) => (
  <div className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
    <div className="rounded-full bg-slate-200 p-4">
      <LockIcon className="h-8 w-8 text-slate-500" />
    </div>
    <h3 className="text-lg font-semibold text-slate-700">This page is locked</h3>
    <p className="max-w-sm text-sm text-slate-500">
      {message ?? "Reach out to unlock this content."}
    </p>
  </div>
);

const BaseCard = ({
  page,
  onTermClick,
}: {
  page: DetailPage;
  onTermClick?: (id: string) => void;
}) => {

  const locked = true

  if (locked) {
    return (<article className="mx-auto max-w-4xl">
      {/* Title and introduction */}

      <header className="mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-bold tracking-tight">
              {page.title}
            </h2>
          </div>
          {page.image && (
            <img
              src={page.image}
              alt={page.title}
              className="h-28 w-28 shrink-0 rounded-lg object-cover border-2 sm:h-64 sm:w-64"
            />
          )}
          {page.description && (
            <p className="mt-3 text-base leading-7 text-slate-600">
              {page.description}
            </p>
          )}
        </div>
      </header>

      {/* Locked Screen */}
      <LockedNotice />

    </article>
    )
  }

  return (
    <article className="mx-auto max-w-4xl">
      {/* Title and introduction */}

      <header className="mb-6">
        <div className="flex flex-col items-center justify-center">
          <div className="min-w-0 flex-1">
            <h2 className="text-3xl font-bold tracking-tight">
              {page.title}
            </h2>
          </div>
          {page.image && (
            <img
              src={page.image}
              alt={page.title}
              className="h-28 w-28 shrink-0 rounded-lg object-cover border-2 sm:h-64 sm:w-64"
            />
          )}
          {page.description && (
            <p className="mt-3 text-base leading-7 text-slate-600">
              {page.description}
            </p>
          )}
        </div>
      </header>


      {/* Information sections */}
      <div className="clear-both space-y-8">

        {page.sections?.map((section, index) => (
          <section key={section.title || index}>
            <div className="mb-3 border-b border-slate-200 text-lg font-semibold">
              <SectionHeader title={section.title} />
            </div>


            <ul className="space-y-2 pl-5 text-[15px] leading-7 marker:text-slate-400 list-disc">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {renderRichText(item, onTermClick)}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  )
}

const DirectoryCard = ({
  page,
  onNavigate
}: {
  page: DirectoryPage;
  onNavigate: (id: string) => void;
}) => (
  <div>
    {page.image && (
      <img
        src={page.image}
        alt={page.title}
        className="mb-4 w-full h-16 object-cover"
      />
    )}

    <h2 className="font-bold text-4xl mb-4">{page.title}</h2>
    {page.description && <p className="mb-4">{page.description}</p>}

    <div className="grid grid-cols-2 gap-4">
      {page.children.map((childId) => {
        const child = getPage(childId);
        if (!child) return null;
        return (
          <Card
            key={childId}
            onClick={() => onNavigate(child.id)}
            className="cursor-pointer hover:bg-slate-100"
          >
            <CardHeader>
              <CardTitle>{child.title}</CardTitle>

              <CardDescription>
                {child.image && (
                  <img
                    src={child.image}
                    alt={child.title}
                    className="object-fit w-24 h-24"
                  />
                )}
                {child.description && <p>{child.description}</p>}
              </CardDescription>
            </CardHeader>

            {child.tags && child.tags.length > 0 && (
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {child.tags.map((tag) => (
                    <Popover key={tag}>
                      <PopoverTrigger
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="rounded-xl cursor-pointer">
                          <div className={tagClass(tag)}>
                            <p className="px-2 font-bold">{tag}</p>
                          </div>
                        </div>
                      </PopoverTrigger>

                      <PopoverContent
                        className="w-64 text-center"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {tagDescription(tag)}
                      </PopoverContent>
                    </Popover>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}
    </div>
  </div>
)

const CategoryGamePage = ({ page }: { page: CategorizeGamePage }) => {
  const [stage, setStage] = useState<"game" | "game_over">("game")
  const [currentProperty, setCurrentProperty] = useState(0)
  const [score, setScore] = useState(0)
  const [properties, setProperties] = useState<CategoryProperty[]>([])
  const [incorrectFacts, setIncorrectFacts] = useState<CategoryProperty[]>([])
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)

  useEffect(() => {
    setProperties(shuffle(page.properties))
  }, [])

  const total = properties.length
  const progress = total > 0 ? (currentProperty / total) * 100 : 0
  const current = properties[currentProperty]

  function onGuess(categoryGuess: string) {
    if (feedback) return // ignore clicks during the feedback flash

    const isCorrect = current.category === categoryGuess
    if (isCorrect) {
      setScore(s => s + 1)
    } else {
      setIncorrectFacts(prev => [...prev, current])
    }

    setFeedback(isCorrect ? "correct" : "incorrect")

    setTimeout(() => {
      setFeedback(null)
      if (currentProperty < page.properties.length - 1) {
        setCurrentProperty(c => c + 1)
      } else {
        setStage("game_over")
      }
    }, 600)
  }

  function onRestart() {
    setProperties(shuffle(page.properties))
    setScore(0)
    setCurrentProperty(0)
    setStage("game")
    setIncorrectFacts([])
    setFeedback(null)
  }

  const cardRing =
    feedback === "correct"
      ? "ring-4 ring-green-400 border-green-300"
      : feedback === "incorrect"
      ? "ring-4 ring-red-400 border-red-300"
      : "border-gray-200"

  const categoryTitle = (id: string) =>
    page.categories.find(c => c.id === id)?.title ?? id

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-8">
      {/* Header: score + progress */}
      <div className="w-full">
        <div className="mb-2 flex items-baseline justify-between">
          <span className="text-sm font-medium uppercase tracking-wide text-gray-500">
            {stage === "game" ? `Question ${Math.min(currentProperty + 1, total)} of ${total}` : "Finished"}
          </span>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
            Score: {score} / {total}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-orange-400 transition-all duration-500"
            style={{ width: `${stage === "game_over" ? 100 : progress}%` }}
          />
        </div>
      </div>

      {/* Main card */}
      {stage === "game" && current && (
        <div
          key={currentProperty}
          className={`flex h-64 w-full max-w-xl animate-[fadeIn_0.3s_ease-out] items-center justify-center rounded-2xl border-2 bg-white p-8 text-center text-xl font-medium text-gray-800 shadow-lg transition-all duration-200 ${cardRing}`}
        >
          {current.property}
        </div>
      )}

      {/* Game over summary */}
      {stage === "game_over" && (
        <div className="flex w-full max-w-xl flex-col items-center gap-2 rounded-2xl border-2 border-gray-200 bg-white p-8 text-center shadow-lg">
          <p className="text-5xl">{score === total ? "🎉" : score >= total / 2 ? "👏" : "💪"}</p>
          <h2 className="text-3xl font-bold text-gray-800">
            {score} / {total}
          </h2>
          <p className="text-gray-500">
            {score === total
              ? "Perfect score!"
              : score >= total / 2
              ? "Nice work!"
              : "Keep practicing, you'll get there!"}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex w-full max-w-xl flex-wrap justify-center gap-3">
        {stage === "game" ? (
          page.categories.map(it => (
            <Button
              key={it.id}
              disabled={!!feedback}
              onClick={() => onGuess(it.id)}
              className="flex-1 cursor-pointer rounded-xl bg-orange-400 px-6 py-3 font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-orange-500 hover:shadow-md active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {it.title}
            </Button>
          ))
        ) : (
          <Button
            onClick={onRestart}
            className="cursor-pointer rounded-xl bg-blue-500 px-8 py-3 font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md"
          >
            Play again
          </Button>
        )}
      </div>

      {/* Mistakes */}
      {incorrectFacts.length > 0 && (
        <div className="w-full rounded-2xl border border-red-100 bg-red-50 p-5">
          <h3 className="mb-3 flex items-center gap-2 font-bold text-red-700">
            <span>Mistakes</span>
            <span className="rounded-full bg-red-200 px-2 py-0.5 text-xs">{incorrectFacts.length}</span>
          </h3>
          <ul className="space-y-2">
            {incorrectFacts.map((fact, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-2 text-sm shadow-sm"
              >
                <span className="text-gray-700">{fact.property}</span>
                <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 font-medium text-green-700">
                  {categoryTitle(fact.category)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default LessonPage;

LessonPage.getLayout = function getLayout(page) {
  return <div>
    <NavbarV3 currentPage={"anatomy"} />
    {page}
  </div>
};
