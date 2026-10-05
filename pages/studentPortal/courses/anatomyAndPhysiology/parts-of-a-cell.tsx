import { cn } from "cn";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { CONNECTIVE_TISSUES, getConnectiveTissueData } from "./ch4-tissue/connective-tissue";
import { getComponentsAssignmentData } from "./ch4-tissue/membranes";

type Node = { label: string; id?: string; children?: Node[] };

const leaves = (names: string[]): Node[] => names.map((n) => ({ label: n, id: n }));

const TREE: Node[] = [
  {
    label: "Body Systems",
    children: [
      {
        label: "Integumentary",
        children: [
          { label: "Hair", id: "Hair" },
          {
            label: "Skin",
            children: [
              {
                label: "Epidermis",
                id: "Epidermis",
                children: leaves([
                  "Stratum Basale", "Stratum Spinosum", "Stratum Granulosum",
                  "Stratum Corneum", "Stratum Lucidum",
                ]),
              },
              { label: "Dermis", id: "Dermis" },
              { label: "Hypodermis", id: "Hypodermis" },
              { label: "Lamellated Corpuscles", id: "Lamellated Corpuscles" },
            ],
          },
          { label: "Oil", id: "Oil" },
          { label: "Sweat Glands", id: "Sweat Glands" },
          { label: "Nails", id: "Nails" },
          { label: "Sensory Receptors", id: "Sensory Receptors" },
        ],
      },
    ],
  },
  {
    label: "Tissue Level of Organization",
    children: [
      { label: "Cell Juctions", id: "Cell Juctions" },
      { label: "Epithelial Tissue", id: "Epithelial Tissue", children: leaves(["Basement Membrane"]) },
      {
        label: "Connective Tissue", id: "Connective Tissue", children: CONNECTIVE_TISSUES.map(it => {
          return {
            label: getConnectiveTissueData(it).title,
            id: it
          }
        })
      },
      {
        label: "Membranes", id: "Membranes", children: [{
          label: "Mucous Membrane", id: "mucous_membrane", children: leaves(["Lamina Propria", "Mucus"])
        }, ...leaves(["Serous Membrane", "Cutaneous Membrane"])
          , ...leaves(["Synovial Membrane"])]
      },
      { label: "Muscular Tissue", id: "Muscular Tissue" },
      { label: "Nervous Tissue", id: "Nervous Tissue" },
    ],
  },
  {
    label: "Cellular Level of Organization",
    children: [
      { label: "Plasma Membrane", id: "Plasma Membrane" },
      { label: "Organelles", id: "Organelles", children: leaves(["Centrosome", "Cilia and Flagella", "Ribosomes", "Endoplasmic Reticulum", "Golgi Complex", "Lysosomes", "Peroxisomes", "Proteasomes", "Mitochondria"]) },
      { label: "Nucleus", id: "Nucleus" },
      { label: "Protein Synthesis", id: "Protein Synthesis" },
      { label: "Cell Division", id: "Cell Division" },
    ],
  },
  {
    label: "Specialized Cells",
    children: [
      { label: "Synoviocytes", id: "synoviocytes" },
    ]
  },
  {
    label: "Specialized Body Fluids",
    children: [
      { label: "Synovial Fluid", id: "synovial_fluid" },
      { label: "Mucus", id: "mucus" },
    ]
  }
];

type TreeProps = {
  nodes: Node[];
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
        const isSelected = node.id !== undefined && node.id === selected;

        const handleLabelClick = () => {
          if (node.id) onSelect(node.id);
          if (hasChildren && (!node.id || !isOpen)) onToggle(key);
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

const LessonPage = () => {
  const [selected, setSelected] = useState("Plasma Membrane");
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(["/Cellular Level of Organization"])
  );

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <div className="bg-slate-200">
      <div className="grid max-w-8xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12 md:grid-cols-[280px_1fr]">
        <aside className="rounded-lg bg-white p-3 shadow-md self-start">
          <h1 className="mb-2 px-1 text-xl font-bold">Parts of a Cell</h1>
          <Tree
            nodes={TREE}
            selected={selected}
            onSelect={setSelected}
            expanded={expanded}
            onToggle={toggle}
          />
        </aside>

        <div id="content" className="p-4 bg-white rounded-lg shadow-md">
          {selected === "Plasma Membrane" && (
            <div>
              <h2 className="font-bold text-4xl mb-4">Plasma Membrane</h2>
              <SectionHeader title="Structure" />
              <p>It is composed of a phospholipid bilayer with embedded proteins, cholesterol, and carbohydrates.</p>
              <SectionHeader title="Function" />
              <p>The plasma membrane is a selectively permeable barrier that surrounds the cell, controlling the movement of substances in and out of the cell.</p>
            </div>
          )}
          {selected === "Centrosome" && (
            <div className="flow-root">
              <h2 className="font-bold text-4xl mb-4">Centrosome</h2>
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Chromosome.svg/500px-Chromosome.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="Centrosome" width={300} height={300}
                className="mb-4 sm:float-right" />
              <SectionHeader title="Also known as" />
              <p>microtubule organizing center</p>
              <SectionHeader title="Don't Confuse With" />
              <p>Centromere</p>
              <p>Centriole</p>
              <SectionHeader title="Location" />
              <p>near the nucleus</p>
              <SectionHeader title="Components" />
              <p>pair of centrioles</p>
              <p>pericentriolar matrix</p>
              <SectionHeader title="Functions" />
              <p className="font-bold">During Cell Division</p>
              <p>Forms the poles of the mitotic spindle</p>
              <p>Replicates itself so future generations can have the capacity for cell division</p>
              <p className="font-bold">Non Dividing Cells</p>
              <p>Organizes microtubules</p>
            </div>
          )}
          {selected === "Cilia and Flagella" && (
            <div className="flow-root">
              <h2 className="font-bold text-4xl mb-4">Cilia and Flagella</h2>
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Bronchiolar_epithelium_3_-_SEM.jpg/960px-Bronchiolar_epithelium_3_-_SEM.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="Cilia and Flagella" width={300} height={300}
                className="mb-4 sm:float-right" />
              <SectionHeader title="Components" />
              <p>20 microtubules surrounded by a plasma membrane</p>
              <SectionHeader title="Functions" />
              <p>Move fluid along the cell's surface</p>
              <p>Sweep foreign particles away</p>
              <p>Move the entire cell</p>
            </div>
          )}
          {selected === "Ribosomes" && (
            <div className="flow-root">
              <h2 className="font-bold text-4xl mb-4">Ribosomes</h2>
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Ribosome_shape.png/960px-Ribosome_shape.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="Ribosomes" width={300} height={300}
                className="mb-4 sm:float-right" />
              <SectionHeader title="Components" />
              <ul className="list list-disc list-inside">
                <li>High amount of Ribosomal RNA (rRNA)</li>
                <li>A large and small subunit are both produced in the nucleus and exit separately, then come together in the cytoplasm</li>
              </ul>
              <SectionHeader title="Location" />
              <ul className="list list-disc list-inside">
                <li>Outer surface of the nuclear membrane</li>
                <li>Endoplasmic Reticulum (ER)</li>
                <li>Free in the cytoplasm</li>
                <li>Mitochondria</li>
              </ul>

              <SectionHeader title="Functions" />
              <ul className="list list-disc list-inside">
                <li>Synthesize proteins for organelles, the membrane or export</li>
                <li>Synthesize proteins for the cytosol</li>
                <li>Synthesize proteins for the mitochondria</li>
                <li>Sweep foreign particles away</li>
                <li>Move the entire cell</li>
              </ul>
            </div>
          )}
          {selected === "Endoplasmic Reticulum" && (
            <div className="flow-root">
              <h2 className="font-bold text-4xl mb-4">Endoplasmic Reticulum</h2>
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Blausen_0350_EndoplasmicReticulum.png/960px-Blausen_0350_EndoplasmicReticulum.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
                alt="Endoplasmic Reticulum" width={300} height={300}
                className="mb-4 sm:float-right" />
              <SectionHeader title="Components" />
              <ul className="list list-disc list-inside">
                <li>a network of membranes in the form of flat sacs or tubules</li>
                <li>constitutes more than half of the membranous surfaces within the cytoplasm of most cell</li>
              </ul>
              <SectionHeader title="Location" />
              <p>extends from the nuclear envelope and projects throughout the cytoplasm</p>

              <SectionHeader title="Forms" />
              <SectionHeader title="Rough ER" />
              <SectionHeader title="Smooth ER" />

            </div>
          )}
          {selected === "Epidermis" && (
            <div className="flow-root">
              <h2 className="font-bold text-4xl mb-4">Epidermis</h2>
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Epidermis-delimited.JPG/960px-Epidermis-delimited.JPG"
                alt="Epidermis" width={300} height={300}
                className="mb-4 sm:float-right" />
              <SectionHeader title="Types" />

            </div>
          )}
          {selected === "Epithelial Tissue" && <EpithelialTissue />}
          {selected === "Basement Membrane" && <BasementMembrane />}
          {selected === "Membranes" && <div className="">
            <img src={"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Schematic_of_size-based_membrane.svg/330px-Schematic_of_size-based_membrane.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"}
              alt={"Membranes"}
              className="mb-4 w-full h-16 object-cover" />
            <h2 className="font-bold text-4xl mb-4">Membranes</h2>

            <div className="grid grid-cols-2 gap-4">
              {["mucous_membrane", "serous_membrane", "cutaneous_membrane", "synovial_membrane"].map(it => {
                const data = getComponentsAssignmentData(it)
                return <Card>
                  <CardHeader>
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>
                      <img src={data?.image}
                        alt={data?.title} className="object-fit w-24 h-24" />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {data.tags?.map(it => <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">{it}</Badge>)}
                  </CardContent>
                </Card>
              })}
            </div>
          </div>}

          {selected === "Connective Tissue" && <div className="">
            <img src={"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Schematic_of_size-based_membrane.svg/330px-Schematic_of_size-based_membrane.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"}
              alt={"Membranes"}
              className="mb-4 w-full h-16 object-cover" />
            <h2 className="font-bold text-4xl mb-4">Connective Tissue</h2>

            <div className="grid grid-cols-2 gap-4">
              {CONNECTIVE_TISSUES.map(it => {
                const data = getConnectiveTissueData(it)
                return <Card>
                  <CardHeader>
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>
                      <img src={"data?.image"}
                        alt={data?.title} className="object-fit w-24 h-24" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              })}
            </div>
          </div>}
          {getComponentsAssignmentData(selected) && <BaseCard {...getComponentsAssignmentData(selected)} />}
        </div>
      </div>
    </div>
  );
};





const SectionHeader = ({ title }: { title: string }) => {
  const icon =
    title === "Structure" ? "🧱"
      : title === "Functions" ? "⚙️"
        : title === "Surfaces" ? "🧭"
          : title === "Types" ? "📋"
            : title === "Location" ? "📍"
              : title === "Questions" ? "❓" : "";

  return (
    <p className="mt-4 text-xl font-bold">{icon} {title}</p>
  );
}

// Components


const BaseCard = ({
  title, image, sections
}: {
  title: string;
  image?: string;
  sections?: { title: string; listItems: string[] }[];
}) => {
  {
    return (
      <div className="flow-root">
        <h2 className="font-bold text-4xl mb-4">{title}</h2>
        <img src={image}
          alt={title} width={300} height={300}
          className="mb-4 sm:float-right" />
        {sections?.map((section, index) => (
          <div key={index}>
            <SectionHeader title={section.title} />
            <ul className="list list-disc list-inside">
              {section.listItems.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
};

const EpithelialTissue = () => {
  {

    const sections = [
      {
        title: "Structure",
        icon: "🧱",
        listItems: [
          "cells are arranged in continuous sheets, in either single or multiple layers",
          "cells are closely packed and are held tightly together by many cell junctions",
          "there is little intercellular space between adjacent plasma membranes",
          "cells have their own nerve supply",
          "cells are avascular and rely on diffusion for nutrient and waste exchange from adjacent connective tissue",
          "cells have a high rate of cell division and replacement"
        ]
      },
      {
        title: "Functions",
        icon: "⚙️",
        listItems: [
          "Protects the body from external damage and pathogens",
          "Filters substances",
          "Secretes mucus, hormones, and enzymes",
          "Absorbs nutrients in the gastrointestinal tract",
          "execretes various substances in the urinary tract"
        ]
      },
      {
        title: "Surfaces  ",
        icon: "🧭",
        listItems: [
          "Apical Surface - The outer surface of the epithelium that faces the external environment or lumen",
          "Lateral Surface - The side surfaces of the epithelium that face adjacent cells and may contain cell junctions",
          "Basal Surface - The bottom surface of the epithelium that is in contact with the basement membrane"
        ]
      },
      {
        title: "Types",
        icon: "📋",
        listItems: [
          "Surface Epithelium",
          "Glanular Epithelium"
        ]
      },
      {
        title: "Questions",
        icon: "❓",
        listItems: [
          "Is epithelium vascular?",
          "How are substances exchanged between the epithelium and adjacent connective tissue?",
          "What are the five functions of epithelial tissue?",
          "What are the two layers of the basement membrane?"
        ]
      }
    ];

    return (
      <BaseCard
        title="Epithelial Tissue"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Illu_epithelium.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
        sections={sections}
      />
    );
  }
};

const BasementMembrane = () => {
  const sections = [
    {
      title: "Layers",
      icon: "🧱",
      listItems: [
        "Basal Lamina - The upper layer of the basement membrane that is secreted by the epithelial cells and contains laminin, collagen, glycoproteins and proteoglycans",
        "Reticular Lamina - The lower layer of the basement membrane that is secreted by the connective tissue and contains collagen fibers produced by fibroblasts"
      ]
    },
    {
      title: "Functions",
      icon: "⚙️",
      listItems: [
        "Attach to and anchor the epithelium to the underlying connective tissue",
        "Form a surface for epithelial cell migration during tissue repair and regeneration",
        "Act as a barrier to the passage of large molecules and cells between the epithelium and connective tissue",
        "Filter blood in the kidneys",
      ]
    },
    {
      title: "Questions",
      icon: "❓",
      listItems: [
        "Which layer contains laminin? collagen? proteoglycans?",
        "How does the basement membrane attach to the epithelium?",
      ]
    }
  ];

  return (
    <BaseCard
      title="Basement Membrane"
      image="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Oral_mucosa.png/960px-Oral_mucosa.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      sections={sections}
    />
  );
};

export default LessonPage;
