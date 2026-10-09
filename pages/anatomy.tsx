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
        fromPage("skin_glands"),
      ]),
      fromPage("hair"),
      fromPage("nails"),
      fromPage("sensory_receptors"),
    ]),
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
    fromPage("keratinocytes"),
    fromPage("melanocytes"),
    fromPage("langerhans"),
    fromPage("merkel"),

  ]
  ),
  group("Specialized Body Fluids", [fromPage("synovial_fluid"), fromPage("mucus")]),
  group("Activities", [
    fromPage("cell_structure_matching"),
    fromPage("cell_function_matching"),
    fromPage("surface_epithelial_matching"),
    fromPage("connective_tissue_matching"),
    fromPage("thick_vs_thin_skin"),
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
  const [selected, setSelected] = useState("connective_tissue_matching");
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

const MatchingGamePage = ({ page }: { page: MatchingGamePageData }) => {
  const [matchedTerms, setMatchedTerms] = useState([])
  const [columnOne, setColumnOne] = useState<string[]>([])
  const [columnTwo, setColumnTwo] = useState([])
  const [activeSelection, setActiveSelection] = useState("")
  const [activeColumn, setActiveColumn] = useState(0)
  const [incorrectClicks, setIncorrectClicks] = useState(0)

  useEffect(() => {
    const colOne = shuffle(page.itemPairs.map(it => it[0]))
    setColumnOne(colOne)
    const colTwo = shuffle(page.itemPairs.map(it => it[1]))
    setColumnTwo(colTwo)
  }, [])

  function onClick(term: string, column: number) {
    if (activeSelection === "") {
      setActiveSelection(term)
      setActiveColumn(column)
    } else {
      // student is choosing a different in the same column
      if (activeColumn === column) {
        setActiveSelection(term)
      } else {
        // student is choosing a possible pairing match

        const itemPair = page.itemPairs.find((v) => v[0] === activeSelection || v[1] === activeSelection)

        if (activeColumn === 1) {
          if (itemPair[1] === term) {
            setMatchedTerms(prev => [...prev, term, activeSelection])
          } else {
            setIncorrectClicks(incorrectClicks + 1)
          }
        } else {
          if (itemPair[0] === term) {
            setMatchedTerms(prev => [...prev, term, activeSelection])
          } else {
            setIncorrectClicks(incorrectClicks + 1)
          }
        }
        setActiveSelection("")
        setActiveColumn(0)

      }
    }
  }

  function onReset() {
    setActiveColumn(0)
    setActiveSelection("")
    setMatchedTerms([])
    const colOne = shuffle(page.itemPairs.map(it => it[0]))
    setColumnOne(colOne)
    const colTwo = shuffle(page.itemPairs.map(it => it[1]))
    setColumnTwo(colTwo)
    setIncorrectClicks(0)
  }

  return <div>
    <p className="">Aim for 0 incorrect clicks to be exam-ready</p>
    <div className="flex justify-center mb-4 items-center gap-4">
      <p className="font-bold">Incorrect Clicks: {incorrectClicks}</p>
      <Button className={"bg-orange-400 px-4 py-2 font-bold text-white rounded-lg"} onClick={onReset}>Reset</Button>
    </div>
    <div className="flex gap-2 mb-4 justify-start">

</div>
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <p className="underline">{page.columnOne}</p>

        {columnOne.map(it => <MatchingCard isActive={activeSelection === it} isMatched={matchedTerms.includes(it)} term={it} onClick={() => onClick(it, 1)} />)}
      </div>
      <div className="flex flex-col gap-2">
        <p className="underline">{page.columnTwo}</p>

        {columnTwo.map(it => <MatchingCard isActive={activeSelection === it} isMatched={matchedTerms.includes(it)} term={it} onClick={() => onClick(it, 2)} />)}
      </div>
    </div>
  </div>
}

const MatchingCard = ({ term, isActive, isMatched, onClick }: { term: string, isActive: boolean, isMatched: boolean, onClick: () => void }) => {
  return <div className={`p-2 border-2 rounded-lg shadow cursor-pointer ${isActive ? "bg-blue-100" : ""} ${isMatched ? "line-through" : ""}`} onClick={onClick}>{term}</div>
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

const CategoryGamePage = ({
  page
}: {
  page: CategorizeGamePage
}) => {

  const [stage, setStage] = useState("game")

  const [currentProperty, setCurrentProperty] = useState(0)
  const [score, setScore] = useState(0)
  const [properties, setProperties] = useState<CategoryProperty[]>([])

  useEffect(() => {
    const shuffled = shuffle(page.properties)
    setProperties(shuffled)
  }, [])

  function onGuess(categoryGuess: string) {
    if (properties[currentProperty].category === categoryGuess) {
      setScore(score + 1)
    }

    const length = page.properties.length
    if (currentProperty < length - 1) {
      setCurrentProperty(currentProperty + 1)
    } else {
      setStage("game_over")
    }
  }

  function onRestart() {
    const shuffled = shuffle(page.properties)
    setProperties(shuffled)
    setScore(0)
    setCurrentProperty(0)
    setStage("game")
  }

  return <div>

    <div className="flex flex-col items-center">

      <h2 className="font-bold text-2xl">Current Score: {score} / {properties.length}</h2>

      <p>TABLE 5.4 Comparison of Thin and Thick Skin. GOOD FOR REVIEW!!!</p>

      {properties[currentProperty] && <div className="border-2 rounded p-4 my-4 h-64 w-96 text-center flex items-center justify-center max-w-full">
        {properties[currentProperty].property}
      </div>}
      <div className="flex gap-4">
        {stage == "game" ?
          page.categories.map(it => <Button className="bg-orange-400 px-4 py-2 text-white rounded-lg cursor-pointer font-bold shadow" onClick={() => onGuess(it.id)}>{it.title}</Button>)
          : <Button className="bg-blue-400 px-4 py-2 text-white rounded-lg cursor-pointer font-bold shadow" onClick={onRestart}>Restart</Button>}
      </div>
    </div>
    <div>

    </div>

  </div>
}

export default LessonPage;

LessonPage.getLayout = function getLayout(page) {
  return <div>
    <NavbarV3 currentPage={"anatomy"} />
    {page}
  </div>
};
