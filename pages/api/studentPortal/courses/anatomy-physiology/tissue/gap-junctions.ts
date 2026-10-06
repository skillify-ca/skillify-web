import { PageData } from "../types"

export const JUNCTIONS: PageData[] = [
    {
        type: "directory",
        id: "cell_junctions",
        title: "Cell Junctions",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Tight_cell_junction.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
        children: [
            "tight_junctions",
            "adherens_junctions",
            "desmosomes",
            "hemidesmosomes",
            "gap_junctions",
        ],
    },
    {
        type: "detail",
        id: "tight_junctions",
        title: "Tight Junctions",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cellular_tight_junction-en.svg/960px-Cellular_tight_junction-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    },
    // Placeholders so the directory cards render. Fill in sections and images as you write them.
    { type: "detail", id: "adherens_junctions", title: "Adherens Junctions",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Adherens_Junctions_structural_proteins.svg/960px-Adherens_Junctions_structural_proteins.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",

     },
    { type: "detail", id: "desmosomes", title: "Desmosomes", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Desmosome_cell_junction_en.svg/960px-Desmosome_cell_junction_en.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { type: "detail", id: "hemidesmosomes", title: "Hemidesmosomes", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Ultrastructure_of_tracheal_hemidesmosomes_in_mice.JPEG/960px-Ultrastructure_of_tracheal_hemidesmosomes_in_mice.JPEG?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
    { type: "detail", id: "gap_junctions", title: "Gap Junctions", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Gap_cell_junction-en.svg/960px-Gap_cell_junction-en.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" },
]