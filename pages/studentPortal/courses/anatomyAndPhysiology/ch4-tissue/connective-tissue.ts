export const CONNECTIVE_TISSUES =
    [
        "mesenchyme",
        "mucous_connective_tissue",
        "areolar_connective_tissue",
        "adipose_tissue",
        "reticular_connective_tissue",
        "dense_regular_connective_tissue",
        "dense_irregular_connective_tissue",
        "elastic_connective_tissue",
        "hyaline_cartilage",
        "fibrocartilage",
        "elastic_cartilage",
        "compact_bone",
        "spongy_bone",
        "blood",
        "lymph"
    ]

export function getConnectiveTissueData(selected: string) {


    if (!CONNECTIVE_TISSUES.includes(selected)) return null

    if (selected === "mesenchyme") {
        return {
            title: "Mesenchyme"
        }
    } else if (selected === "mucous_connective_tissue") {
        return {
            title: "Mucous (mucoid) connective tissue"
        }
    } else if (selected === "areolar_connective_tissue") {
        return {
            title: "Areolar Connective Tissue"
        }
    } else if (selected === "adipose_tissue") {
        return {
            title: "Adipose Tissue"
        }
    } else if (selected === "reticular_connective_tissue") {
        return {
            title: "Reticular connective tissue"
        }
    } else if (selected === "dense_regular_connective_tissue") {
        return {
            title: "Dense Regular Connective Tissue"
        }
    } else if (selected === "dense_irregular_connective_tissue") {
        return {
            title: "Dense Irregular Connective Tissue"
        }
    } else if (selected === "elastic_connective_tissue") {
        return {
            title: "Elastic connective tissue"
        }
    } else if (selected === "hyaline_cartilage") {
        return {
            title: "Hyaline Cartilage"
        }
    } else if (selected === "fibrocartilage") {
        return {
            title: "Fibrocartilage"
        }
    } else if (selected === "elastic_cartilage") {
        return {
            title: "Elastic Cartilage"
        }
    } else if (selected === "compact_bone") {
        return {
            title: "Compact Bone"
        }
    } else if (selected === "spongy_bone") {
        return {
            title: "Spongy Bone"
        }
    } else if (selected === "blood") {
        return {
            title: "Blood"
        }
    } else if (selected === "lymph") {
        return {
            title: "Lymph"
        }
    }


    return null
}
