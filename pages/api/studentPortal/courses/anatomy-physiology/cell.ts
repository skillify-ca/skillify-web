import { stub } from "./helpers"
import { PageData } from "./types"

export const CELLULAR: PageData[] = [
    {
        type: "detail",
        id: "plasma_membrane",
        title: "Plasma Membrane",
        sections: [
            {
                title: "Structure",
                items: [
                    "It is composed of a phospholipid bilayer with embedded proteins, cholesterol, and carbohydrates.",
                ],
            },
            {
                title: "Functions",
                items: [
                    "The plasma membrane is a selectively permeable barrier that surrounds the cell, controlling the movement of substances in and out of the cell.",
                ],
            },
        ],
    },
    {
        type: "directory",
        id: "organelles",
        title: "Organelles",
        children: [
            "centrosome",
            "cilia_and_flagella",
            "ribosomes",
            "endoplasmic_reticulum",
            "golgi_complex",
            "lysosomes",
            "peroxisomes",
            "proteasomes",
            "mitochondria",
        ],
    },
    {
        type: "detail",
        id: "centrosome",
        title: "Centrosome",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Chromosome.svg/500px-Chromosome.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            { title: "Also known as", items: ["microtubule organizing center"] },
            { title: "Don't Confuse With", items: ["Centromere", "Centriole"] },
            { title: "Location", items: ["near the nucleus"] },
            { title: "Components", items: ["pair of centrioles", "pericentriolar matrix"] },
            {
                title: "Functions",
                items: [
                    "During cell division: Forms the poles of the mitotic spindle",
                    "During cell division: Replicates itself so future generations can have the capacity for cell division",
                    "Non-dividing cells: Organizes microtubules",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "cilia_and_flagella",
        title: "Cilia and Flagella",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Bronchiolar_epithelium_3_-_SEM.jpg/960px-Bronchiolar_epithelium_3_-_SEM.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Components",
                items: ["20 microtubules surrounded by a [plasma membrane](plasma_membrane)"],
            },
            {
                title: "Functions",
                items: [
                    "Move fluid along the cell's surface",
                    "Sweep foreign particles away",
                    "Move the entire cell",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "ribosomes",
        title: "Ribosomes",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Ribosome_shape.png/960px-Ribosome_shape.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Components",
                items: [
                    "High amount of Ribosomal RNA (rRNA)",
                    "A large and small subunit are both produced in the nucleus and exit separately, then come together in the cytoplasm",
                ],
            },
            {
                title: "Location",
                items: [
                    "Outer surface of the nuclear membrane",
                    "[Endoplasmic Reticulum](endoplasmic_reticulum) (ER)",
                    "Free in the cytoplasm",
                    "[Mitochondria](mitochondria)",
                ],
            },
            {
                title: "Functions",
                items: [
                    "Synthesize proteins for organelles, the membrane or export",
                    "Synthesize proteins for the cytosol",
                    "Synthesize proteins for the mitochondria",
                    // TODO: the next two were in the original but look copied from Cilia and Flagella
                    "Sweep foreign particles away",
                    "Move the entire cell",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "endoplasmic_reticulum",
        title: "Endoplasmic Reticulum",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Blausen_0350_EndoplasmicReticulum.png/960px-Blausen_0350_EndoplasmicReticulum.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Components",
                items: [
                    "a network of membranes in the form of flat sacs or tubules",
                    "constitutes more than half of the membranous surfaces within the cytoplasm of most cell",
                ],
            },
            {
                title: "Location",
                items: ["extends from the nuclear envelope and projects throughout the cytoplasm"],
            },
            {
                title: "Forms",
                items: ["Rough ER", "Smooth ER"],
            },
        ],
    },

    // Title-only pages so the sidebar and the Organelles directory have something to show
    stub("golgi_complex", "Golgi Complex"),
    stub("lysosomes", "Lysosomes"),
    stub("peroxisomes", "Peroxisomes"),
    stub("proteasomes", "Proteasomes"),
    stub("mitochondria", "Mitochondria"),
    stub("nucleus", "Nucleus"),
    stub("cytosol", "Cytosol"),

    stub("protein_synthesis", "Protein Synthesis"),
    stub("cell_division", "Cell Division"),

    {
        type: "directory",
        title: "Membrane Transport",
        id: "membrane_transport",
        children: [
            "simple_diffusion",
            "faciliated_diffusion",
            "osmosis",
            "primary_active_transport",
            "secondary_active_transport",
            "receptor_mediated_endocytosis",
            "phagocytosis",
            "bulk_phase_endocytosis",
            "exocytosis",
            "transcytosis",
        ]
    },
    stub("simple_diffusion", "Simple Diffusion", ["passive", "diffusion"]),
    stub("faciliated_diffusion", "Faciliated Diffusion", ["passive", "diffusion"]),
    stub("osmosis", "Osmosis", ["passive"]),
    stub("primary_active_transport", "Primary Active Transport", ["active"]),
    stub("secondary_active_transport", "Secondary Active Transport",["active"]),
    stub("receptor_mediated_endocytosis", "Receptor-mediated endocytosis", ["active", "endocytosis", "vesicles"]),
    stub("phagocytosis", "Phagocytosis", ["active", "endocytosis", "vesicles"]),
    stub("bulk_phase_endocytosis", "Bulk-phase Endocytosis", ["active", "endocytosis", "vesicles"]),
    stub("exocytosis", "Exocytosis", ["active", "vesicles"]),
    stub("transcytosis", "Transcytosis", ["active", "vesicles"]),

]