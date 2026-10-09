import { stub } from "../helpers"
import { PageData } from "../types"

export const EPITHELIAL: PageData[] = [
  {
    type: "detail",
    id: "epithelial_tissue",
    title: "Epithelial Tissue",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Illu_epithelium.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    children: ["basement_membrane", "surface_epithelium", "glandular_epithelium"],
    sections: [
      {
        title: "Structure",
        items: [
          "cells are arranged in continuous sheets, in either single or multiple layers",
          "cells are closely packed and are held tightly together by many [cell junctions](cell_junctions)",
          "there is little intercellular space between adjacent plasma membranes",
          "cells have their own nerve supply",
          "cells are avascular and rely on diffusion for nutrient and waste exchange from adjacent [connective tissue](connective_tissue)",
          "cells have a high rate of cell division and replacement",
        ],
      },
      {
        title: "Functions",
        items: [
          "Protects the body from external damage and pathogens",
          "Filters substances",
          "Secretes mucus, hormones, and enzymes",
          "Absorbs nutrients in the gastrointestinal tract",
          "Excretes various substances in the urinary tract",
        ],
      },
      {
        title: "Surfaces",
        items: [
          "Apical Surface - The outer surface of the epithelium that faces the external environment or lumen",
          "Lateral Surface - The side surfaces of the epithelium that face adjacent cells and may contain cell junctions",
          "Basal Surface - The bottom surface of the epithelium that is in contact with the [basement membrane](basement_membrane)",
        ],
      },
      {
        title: "Types",
        items: [
          "[Surface Epithelium](surface_epithelium)",
          "[Glandular Epithelium](glandular_epithelium)",
        ],
      },
      {
        title: "Questions",
        items: [
          "Is epithelium vascular?",
          "How are substances exchanged between the epithelium and adjacent connective tissue?",
          "What are the five functions of epithelial tissue?",
          "What are the two layers of the basement membrane?",
        ],
      },
    ],
  },
  {
    type: "directory",
    id: "surface_epithelium",
    title: "Surface Epithelium",
    children: [
      "endothelium",
      "mesothelium",
      "simple_cuboidal_epithelium",
      "nonciliated_simple_columnar",
      "ciliated_simple_columnar",
      "nonciliated_pseudostratified",
      "ciliated_pseudostratified",
      "nonkeratinized_stratified_squamous",
      "keratinized_stratified_squamous",
      "stratified_cuboidal",
      "stratified_columnar",
      "transitional_epithelium",
      "microvilli",
      "goblet_cells"
    ]
  },
  {
    type: "detail",
    id: "basement_membrane",
    title: "Basement Membrane",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Oral_mucosa.png/960px-Oral_mucosa.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    sections: [
      {
        title: "Layers",
        items: [
          "Basal Lamina - The upper layer of the basement membrane that is secreted by the epithelial cells and contains laminin, collagen, glycoproteins and proteoglycans",
          "Reticular Lamina - The lower layer of the basement membrane that is secreted by the connective tissue and contains collagen fibers produced by fibroblasts",
        ],
      },
      {
        title: "Functions",
        items: [
          "Attach to and anchor the [epithelium](epithelial_tissue) to the underlying connective tissue",
          "Form a surface for epithelial cell migration during tissue repair and regeneration",
          "Act as a barrier to the passage of large molecules and cells between the epithelium and connective tissue",
          "Filter blood in the kidneys",
        ],
      },
      {
        title: "Questions",
        items: [
          "Which layer contains laminin? collagen? proteoglycans?",
          "How does the basement membrane attach to the epithelium?",
        ],
      },
    ],
  },
  {
    id: "glandular_epithelium",
    title: "Glandular Epithelium",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Types_Arrangements_of_Glands_1.png/500px-Types_Arrangements_of_Glands_1.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    description: "A type of epithelial tissue who's main function is secretion of products.",
    type: "directory",
    children: [
      "endocrine_glands",
      "exocrine_glands"
    ],
  },
  {
    id: "exocrine_glands",
    title: "Exocrine Glands",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Types_Arrangements_of_Glands_1.png/500px-Types_Arrangements_of_Glands_1.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    description: "Glands that secrete their product via ducts onto the surface of lining epithelium",
    type: "directory",
    children: [
      "goblet_cells",
      "ceruminous_glands",
      "sweat_glands",
      "sebaceous_glands",
      "salivary_glands",
      "mammary_glands",
      "bulbourethral_glands",
      "pancreas_glands",
      "penile_urethra_glands",
      "gastric_glands",
      "large_intestine_glands"
    ],
  },
  {
    id: "endocrine_glands",
    title: "Endocrine Glands",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/1801_The_Endocrine_System.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    description: "Glands that secrete hormones into the bloodstream.",
    type: "detail",
    sections: [
      {
        title: "Examples",
        items: [
          "the pituitary gland",
          "the pineal gland",
          "the thyroid gland",
          "the parathyroid glands",
          "the adrenal glands",
          "the pancreas",
          "the ovaries",
          "the testes",
          "the thymus gland"
        ]
      }
    ]
  },
  {
    type: "detail",
    id: "goblet_cells",
    title: "Goblet Cells",
    description: "Secretes mucus directly onto the apical surface of a lining epithelium",
    tags: ["unicellular"]
  },
  stub("salivary_glands", "Salivary Glands", ["multicellular", "merocrine"]),
  {
    type: "directory",
    id: "sweat_glands",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Human_skin_structure.svg/960px-Human_skin_structure.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    title: "Sweat Glands",
    children: [
      "eccrine_sweat_glands", "apocrine_sweat_glands"
    ]
  },
  {
    type: "detail",
    id: "eccrine_sweat_glands",
    title: "Eccrine Sweat Glands",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Gray940_-_sweat_gland.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
    sections: [
      {
        title: "Functions",
        items: [
          "Regulation of body temperature",
          "Waste removal",
          "Stimulated during emotional stress",
        ]
      }
    ],
    tags: ["simple", "coiled tubular"]
  },
    {
    type: "detail",
    id: "apocrine_sweat_glands",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Apocrine_et_eccrine.jpg/960px-Apocrine_et_eccrine.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    title: "Apocrine Sweat Glands",
    sections: [
      {
        title: "Functions",
        items: [
          "Stimulated during emotional stress",
          "Stimulated during sexual excitement",
        ]
      }
    ],
    tags: ["simple", "coiled tubular"]
  },
  {
    type: "detail",
    id: "sebaceous_glands",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Hair_follicle-en.svg/960px-Hair_follicle-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    title: "Oil Glands",
    tags: ["multicellular", "simple", "branched acinar", "holocrine",],
    sections: [
      {
        title: "Functions",
        items: [
          "Prevent hair from drying out",
          "Prevent water loss from skin",
          "Keep skin soft",
          "Inhibit growth of bacteria"
        ]
      }
    ]
  },
    {
    type: "detail",
    id: "ceruminous_glands",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Ear-anatomy-text-small-en.svg/960px-Ear-anatomy-text-small-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    title: "Ceruminous Glands",
    tags: ["multicellular"],
    sections: [
      {
        title: "Functions",
        items: [
          "Impede entrance of foreign bodies and insects into external ear canal",
          "Waterproofs ear canal",
          "Prevent microbes from entering cells",
        ]
      }
    ]
  },
  stub("mammary_glands", "Mammary Glands", ["multicellular", "compound", "acinar", "apocrine"]),
  stub("large_intestine_glands", "Large Intestine Glands", ["multicellular", "simple", "tubular"]),
  stub("gastric_glands", "Gastric Glands", ["multicellular", "simple", "branched tubular"]),
  stub("penile_urethra_glands", "Penile Urethra Glands", ["multicellular", "simple", "acinar"]),
  stub("bulbourethral_glands", "Bulbourethral (Cowper's) Glands", ["multicellular", "compound", "tubular"]),
  stub("pancreas_glands", "Pancreas Glands", ["multicellular", "compound", "tubuloacinar"]),

  stub("endothelium", "Endothelium",),
  stub("mesothelium", "Mesothelium",),
  stub("simple_cuboidal_epithelium", "Simple Cuboidal",),
  stub("nonciliated_simple_columnar", "Nonciliated Simple Columnar",),
  stub("ciliated_simple_columnar", "Ciliated Simple Columnar",),
  stub("nonciliated_pseudostratified", "Nonciliated Pseudostratified",),
  stub("ciliated_pseudostratified", "Ciliated Pseudostratified",),
  stub("nonkeratinized_stratified_squamous", "Nonkeratinized Stratified Squamous",),
  stub("keratinized_stratified_squamous", "Keratinized Stratified Squamous",),
  stub("stratified_cuboidal", "Stratified Cuboidal",),
  stub("stratified_columnar", "Stratified Columnar",),
  stub("transitional_epithelium", "Transitional Epithelium",),
]