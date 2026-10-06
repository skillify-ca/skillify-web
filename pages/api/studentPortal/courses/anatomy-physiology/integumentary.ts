import { stub } from "./helpers"
import { PageData } from "./types"

export const INTEGUMENTARY: PageData[] = [
    {
        type: "detail",
        id: "epidermis",
        title: "Epidermis",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Epidermis-delimited.JPG/960px-Epidermis-delimited.JPG",
        children: [
            "stratum_basale",
            "stratum_spinosum",
            "stratum_granulosum",
            "stratum_corneum",
            "stratum_lucidum",
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

    // Title-only pages so the sidebar has something to show
    stub("stratum_basale", "Stratum Basale"),
    stub("stratum_spinosum", "Stratum Spinosum"),
    stub("stratum_granulosum", "Stratum Granulosum"),
    stub("stratum_corneum", "Stratum Corneum"),
    stub("stratum_lucidum", "Stratum Lucidum"),
    stub("hair", "Hair"),
    stub("dermis", "Dermis"),
    stub("hypodermis", "Hypodermis"),
    stub("lamellated_corpuscles", "Lamellated Corpuscles"),
    stub("oil", "Oil"),
    // stub("sweat_glands", "Sweat Glands"),
    stub("nails", "Nails"),
    stub("sensory_receptors", "Sensory Receptors"),
]