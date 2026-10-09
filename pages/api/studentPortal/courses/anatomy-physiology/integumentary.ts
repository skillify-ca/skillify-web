import { stub } from "./helpers"
import { PageData } from "./types"

export const INTEGUMENTARY: PageData[] = [
    {
        type: "detail",
        id: "epidermis",
        title: "Epidermis",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Epidermis-delimited.JPG/960px-Epidermis-delimited.JPG",
        children: [
            "epidermal_layers",
            "epidermal_cells"
        ],
        sections: [
            {
                title: "Types",
                items: [
                    "[Stratum Basale](stratum_basale)",
                    "[Stratum Spinosum](stratum_spinosum)",
                    "[Stratum Granulosum](stratum_granulosum)",
                    "[Stratum Corneum](stratum_corneum)",
                    "[Stratum Lucidum](stratum_lucidum)",
                ],
            },
        ],
    },
    {
        type: "directory",
        id: "epidermal_layers",
        title: "Epidermal Layers",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Epidermis-delimited.JPG/960px-Epidermis-delimited.JPG",
        children: [
            "stratum_basale",
            "stratum_spinosum",
            "stratum_granulosum",
            "stratum_corneum",
            "stratum_lucidum",
        ],
    },
    {
        type: "directory",
        id: "epidermal_cells",
        title: "Epidermal Cells",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Epidermis-delimited.JPG/960px-Epidermis-delimited.JPG",
        children: [
            "keratinocytes",
            "melanocytes",
            "langerhans",
            "merkel"
        ],
    },

    // Title-only pages so the sidebar has something to show
    stub("stratum_basale", "Stratum Basale"),
    stub("stratum_spinosum", "Stratum Spinosum"),
    stub("stratum_granulosum", "Stratum Granulosum"),
    stub("stratum_corneum", "Stratum Corneum"),
    stub("stratum_lucidum", "Stratum Lucidum"),
    {
        id: "keratinocytes",
        title: "Keratinocytes",
        description: "Produces keratin",
        type: "detail",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Micrograph_of_keratinocytes%2C_basal_cells_and_melanocytes_in_the_epidermis.jpg/500px-Micrograph_of_keratinocytes%2C_basal_cells_and_melanocytes_in_the_epidermis.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        id: "melanocytes",
        title: "Melanocytes",
        description: "Produces melanin",
        type: "detail",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Illu_skin02.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled"
    },
    {
        id: "langerhans",
        title: "Intraepidermal Macrophages (Langerhans)",
        description: "Participates in immune response",
        type: "detail",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Dendritic_cells.jpg/960px-Dendritic_cells.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        id: "merkel",
        title: "Tactile Epithelial (Merkel)",
        description: "Detect touch",
        type: "detail",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/502_Layers_of_epidermis.jpg/960px-502_Layers_of_epidermis.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        type: "directory",
        id: "skin_glands",
        title: "Skin Glands",
        children: [
            "sebaceous_glands",
            "eccrine_sweat_glands",
            "apocrine_sweat_glands",
            "ceruminous_glands"
        ]
    },
    stub("hair", "Hair"),
    stub("dermis", "Dermis"),
    stub("lamellated_corpuscles", "Lamellated Corpuscles"),
    {
        type: "detail",
        id: "hypodermis",
        title: "Subcutaneous Layer",
        children: [
            "lamellated_corpuscles"
        ]
    },
    stub("nails", "Nails"),
    stub("sensory_receptors", "Sensory Receptors"),
    {
        id: "thick_vs_thin",
        title: "Thick vs Thin",
        type: "categorize",
        categories: [{ id: "thick", title: "Thick Skin" }, { id: "thin", title: "Thin Skin" }],
        properties: [
            { property: "Distributed across all body parts except the palms, palmar surface of digits and soles", category: "thin" },
            { property: "Distributed across the palms, palmar surface of digits and soles", category: "thick" },
            { property: "Epidermal thickness of 0.1 - 0.15mm", category: "thin" },
            { property: "Epidermal thickness of 0.65 - 4.5mm, mostly from a thicker stratum corneum", category: "thick" },
            { property: "Lacks a stratum lucidum", category: "thin" },
            { property: "Has a stratum lucidum", category: "thick" },
            { property: "Has a thinner strata spinosum and corneum", category: "thin" },
            { property: "Has a thicker strata spinosum and corneum", category: "thick" },
            { property: "Lacks epidermal ridges", category: "thin" },
            { property: "Has epidermal ridges", category: "thick" },
            { property: "Poorly developed and fewer dermal papillae", category: "thin" },
            { property: "Well-organized and numerous dermal papillae", category: "thick" },
            { property: "Contains hair follicles and arrector pili muscles", category: "thin" },
            { property: "Lacks hair follicles and arrector pili muscles", category: "thick" },
            { property: "Contains sebaceous glands", category: "thin" },
            { property: "Lacks sebasceous glands", category: "thick" },
            { property: "Few sudoriferous glands", category: "thin" },
            { property: "Numerous sudoriferous glands", category: "thick" },
            { property: "Sparser sensory receptors", category: "thin" },
            { property: "Denser sensory receptors", category: "thick" },
        ]
    }
]