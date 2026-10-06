import { PageData } from "../types"

export const MEMBRANES: PageData[] = [
    {
        type: "directory",
        id: "membranes",
        title: "Membranes",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Schematic_of_size-based_membrane.svg/330px-Schematic_of_size-based_membrane.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        children: ["mucous_membrane", "serous_membrane", "cutaneous_membrane", "synovial_membrane"],
    },
    {
        type: "detail",
        id: "mucous_membrane",
        title: "Mucous Membrane",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Normal_gastric_mucosa_intermed_mag.jpg/960px-Normal_gastric_mucosa_intermed_mag.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        tags: ["Epithelial Membrane"],
        children: ["lamina_propria", "mucus"],
        sections: [
            {
                title: "Components",
                items: [
                    "[Mucus](mucus)",
                    "Epithelial layer with tight junctions",
                    "[Lamina propria](lamina_propria) (connective tissue layer)",
                ],
            },
            {
                title: "Functions",
                items: [
                    "barrier against microbes and pathogens",
                    "secretes some enzymes needed for digestion",
                    "absorbs food and fluid in the gastrointestinal tract",
                    "prevents cavities from drying out by secreting mucus",
                    "traps foreign particles in the respiratory passageways",
                ],
            },
            {
                title: "Location",
                items: [
                    "lines the entire digestive, respiratory, and reproductive tracts, and much of the urinary tract",
                    "They are also present in the eyes (conjunctiva) and mouth.",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "mucus",
        title: "Mucus",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Mucus_cells.png/500px-Mucus_cells.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Components",
                items: [
                    "Secreted by goblet cells and other cells of the epithelial layer of a [mucous membrane](mucous_membrane)",
                ],
            },
            {
                title: "Functions",
                items: [
                    "Prevents cavities from drying out",
                    "Traps foreign particles in the respiratory passageways",
                    "Lubricates food as it moves through the gastrointestinal tract",
                ],
            },
            {
                title: "Location",
                items: [
                    "lines the entire digestive, respiratory, and reproductive tracts, and much of the urinary tract",
                    "They are also present in the eyes (conjunctiva) and mouth.",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "lamina_propria",
        title: "Lamina Propria",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Oral_mucosa.png/960px-Oral_mucosa.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Components",
                items: [
                    "[Areolar connective tissue](areolar_connective_tissue) layer of a [mucous membrane](mucous_membrane)",
                ],
            },
            {
                title: "Functions",
                items: [
                    "Supports the epithelial layer of the mucous membrane",
                    "Protects and binds to the underlying structures below the mucous membrane",
                    "Source of blood vessels for the epithelium",
                    "Provides oxygen and nutrients to the epithelial layer through diffusion",
                    "Removes waste and carbon dioxide from the epithelial layer through diffusion",
                    "Allows some flexibility and movement of the mucous membrane",
                ],
            },
            {
                title: "Location",
                items: [
                    "Below the epithelial layer of the mucous membrane",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "synovial_fluid",
        title: "Synovial Fluid",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Joint.svg/960px-Joint.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        sections: [
            {
                title: "Functions",
                items: [
                    "Lubricates the joint to reduce friction between the articular cartilage of synovial joints during movement",
                    "Remove debris and waste products from the joint space using macrophages",
                ],
            },
            {
                title: "Location",
                items: [
                    "Synovial fluid is found in the joint cavity of synovial joints.",
                    "It is secreted by [synoviocytes](synoviocytes) in the [synovial membrane](synovial_membrane).",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "synovial_membrane",
        title: "Synovial Membrane",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Illu_synovial_joint.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        sections: [
            {
                title: "Components",
                items: [
                    "[Synoviocytes](synoviocytes) - specialized cells that secrete [synovial fluid](synovial_fluid)",
                    "A layer of connective tissue ([areolar](areolar_connective_tissue) and [adipose tissue](adipose_tissue)) deep to the synoviocytes",
                ],
            },
            {
                title: "Characteristics",
                items: [
                    "Lacks an epithelial layer",
                    "Does not open to the outside of the body",
                    "Secretes synovial fluid into the joint cavity to lubricate and nourish the articular cartilage",
                ],
            },
            {
                title: "Location",
                items: [
                    "Synovial membrane is found in synovial joints.",
                    "It lines the inner surface of the joint capsule.",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "synoviocytes",
        title: "Synoviocytes",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Illu_synovial_joint.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        sections: [
            {
                title: "Functions",
                items: [
                    "Secrete some components of [synovial fluid](synovial_fluid)",
                ],
            },
            {
                title: "Location",
                items: [
                    "Synoviocytes are found in the [synovial membrane](synovial_membrane) of synovial joints.",
                    "They line the inner surface of the joint capsule.",
                ],
            },
        ],
    },
    {
        type: "detail",
        id: "serous_membrane",
        title: "Serous Membrane",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Serous_Membrane.jpg/500px-Serous_Membrane.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        tags: ["Epithelial Membrane"],
    },
    {
        type: "detail",
        id: "cutaneous_membrane",
        title: "Cutaneous Membrane",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Dermatoglyphs_on_Human_Skin.jpg/500px-Dermatoglyphs_on_Human_Skin.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        tags: ["Epithelial Membrane"],
    },
]