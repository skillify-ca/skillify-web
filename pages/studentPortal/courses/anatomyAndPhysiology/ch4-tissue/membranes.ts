export function getComponentsAssignmentData(selected: string) {

    const allowedTerms = [
        "Mucous Membrane",
        "mucous_membrane",
        "mucus",
        "Lmania Propria",
        "Synovial Membrane",
        "synovial_membrane",
        "synoviocytes",
        "serous_membrane",
        "cutaneous_membrane"
    ]

    if (!allowedTerms.includes(selected)) return null

    if (selected === "Mucous Membrane" || selected === "mucous_membrane") {
        return {
            title: "Mucous Membrane",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Normal_gastric_mucosa_intermed_mag.jpg/960px-Normal_gastric_mucosa_intermed_mag.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            sections: [
                {
                    title: "Components",
                    listItems: [
                        "Mucus",
                        "Epithelial layer with tight junctions",
                        "Lamina propria (connective tissue layer)",
                    ]
                },
                {
                    title: "Functions",
                    listItems: [
                        "barrier against microbes and pathogens",
                        "secretes some enzymes needed for digestion",
                        "absorbs food and fluid in the gastrointestinal tract",
                        "prevents cavities from drying out by secreting mucus",
                        "traps foreign particles in the respiratory passageways",
                    ]
                },
                {
                    title: "Location",
                    listItems: [
                        "lines the entire digestive, repiratory, and reproductive tracts, and much of the urinary tract",
                        "They are also present in the eyes (conjunctiva) and mouth."
                    ]
                }
            ],
            tags: ["Epithelial Membrane"]
        }
    } else if (selected === "mucus" || selected === "Mucus") {
        return {
            title: "Mucus",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Mucus_cells.png/500px-Mucus_cells.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            sections: [
                {
                    title: "Components",
                    listItems: [
                        "Secreted by goblet cells and other cells of the epithelial layer of a mucous membrane",
                    ]
                },
                {
                    title: "Functions",
                    listItems: [
                        "Prevents cavities from drying out",
                        "Traps foreign particles in the respiratory passageways",
                        "Lubricates food as it moves through the gastrointestinal tract",
                    ]
                },
                {
                    title: "Location",
                    listItems: [
                        "lines the entire digestive, repiratory, and reproductive tracts, and much of the urinary tract",
                        "They are also present in the eyes (conjunctiva) and mouth."
                    ]
                }
            ]
        }
    } else if (selected === "Lamina Propria") {
        return {
            title: "Lamina Propria",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Oral_mucosa.png/960px-Oral_mucosa.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            sections: [
                {
                    title: "Components",
                    listItems: [
                        "Areolar connective tissue layer of a mucous membrane",
                    ]
                },
                {
                    title: "Functions",
                    listItems: [
                        "Supports the epithelial layer of the mucous membrane",
                        "Protects and binds to the underlying structures below the mucuous mebrane",
                        "Source of blood vessels for the epithelium",
                        "Provides oxygen and nutrients to the epithelial layer through diffusion",
                        "Removes waste and carbon dioxide from the epithelial layer through diffusion",
                        "Allows some flexibility and movement of the mucous membrane",
                    ]
                },
                {
                    title: "Location",
                    listItems: [
                        "Below the epithelial layer of the mucous membrane",
                    ]
                }
            ]
        }
    } else if (selected === "synovial_fluid" || selected === "Synovial Fluid") {
        return {
            title: "Synovial Fluid",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Joint.svg/960px-Joint.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            sections: [
                {
                    title: "Functions",
                    listItems: [
                        "Lubricates the joint to reduce friction between the articular cartilage of synovial joints during movement",
                        "Remove debris and waste products from the joint space using macrophages",
                    ]
                },
                {
                    title: "Location",
                    listItems: [
                        "Synovial fluid is found in the joint cavity of synovial joints.",
                        "It is secreted by synoviocytes in the synovial membrane."
                    ]
                }
            ]
        }
    } else if (selected === "Synovial Membrane" || selected === "synovial_membrane") {
        return {
            title: "Synovial Membrane",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Illu_synovial_joint.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
            sections: [
                {
                    title: "Components",
                    icon: "⚙️",
                    listItems: [
                        "Synoviocytes - specialized cells that secrete synovial fluid",
                        "A layer of connective tissue (areolar and adipose tissue) deep to the synoviocytes",
                    ]
                },
                {
                    title: "Characteristics",
                    icon: "⚙️",
                    listItems: [
                        "Lacks an epithelial layer",
                        "Does not open to the outside of the body",
                        "Secretes synovial fluid into the joint cavity to lubricate and nourish the articular cartilage",
                    ]
                },
                {
                    title: "Location",
                    icon: "📍",
                    listItems: [
                        "Synovial membrane is found in synovial joints.",
                        "It lines the inner surface of the joint capsule."
                    ]
                }
            ]
        }
    } else if (selected === "synoviocytes") {
        return {
            title: "Synoviocytes",
            image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Illu_synovial_joint.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
            sections: [
                {
                    title: "Functions",
                    icon: "⚙️",
                    listItems: [
                        "Secrete some components of synovial fluid",
                    ]
                },
                {
                    title: "Location",
                    icon: "📍",
                    listItems: [
                        "Synoviocytes are found in the synovial membrane of synovial joints.",
                        "They line the inner surface of the joint capsule."
                    ]
                }
            ]
        }
    } else if (selected === "serous_membrane") {
        return {
            title: "Serous Membrane",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Serous_Membrane.jpg/500px-Serous_Membrane.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            tags: ["Epithelial Membrane"]
        }
    } else if (selected === "cutaneous_membrane") {
        return {
            title: "Cutaneous Membrane",
            image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Dermatoglyphs_on_Human_Skin.jpg/500px-Dermatoglyphs_on_Human_Skin.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
            tags: ["Epithelial Membrane"]
        }
    }

    return null
}
