const plants = [
  {
    commonName: "basil",
    scientificName: "Ocimum basilicum",
    sun: "Full",
    type: "Herb",
    imgURL:
      "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/basil-leaves-herb.jpg?itok=wDUoV-bs",
    description:
      "Sweet herb popular in Italian cuisine. Easy to grow, excellent for chefs and beginners.",
    size: "Medium",
    longevity: "Annual",
  },

  {
    commonName: "thyme",
    scientificName: "Thymus vulgaris",
    sun: "Full",
    type: "Flowering shrub",
    imgURL:
      "https://thepracticalplanter.com/wp-content/uploads/2020/04/IS-Pink-Roses-770x515.jpg",
    description:
      "Beautiful flowers prized for their smell. Excellent for cut flowers. Moderate difficulty to grow.",
    size: "Large",
    longevity: "Perennial",
  },

  {
    commonName: "chives",
    scientificName: "Allium schoenoprasum",
    sun: "Full",
    type: "Herb",
    imgURL: "",
    description:
      "Tasty herb with an oniony taste, easy to grow in prolific quantities.",
    size: "Medium",
    longevity: "Perennial",
  },

  {
    commonName: "rosemary",
    scientificName: "Salvia rosmarinus",
    sun: "Full",
    type: "Herb",
    imgURL: "",
    description:
      "Versatile herb useful for cooking and homemade beauty products. Bushes become large in a few years.",
    size: "Large",
    longevity: "Perennial",
  },

  {
    commonName: "lavendar",
    scientificName: "Lavandula",
    sun: "Full",
    type: "Flower",
    imgURL: "",
    description:
      "Lavendar flowers are prized for their smell and health benefits.",
    size: "Small",
    longevity: "Perennial",
  },
  {
    commonName: "rose",
    scientificName: "Rosa",
    sun: "Full",
    type: "Shrub",
    imgURL:
      "https://thepracticalplanter.com/wp-content/uploads/2020/04/IS-Pink-Roses-770x515.jpg",
    description:
      "Beautiful flowers prized for their smell. Excellent for cut flowers. Moderate difficulty to grow.",
    size: "Large",
    longevity: "Perennial",
  },
  {
    commonName: "marigold",
    scientificName: "Tagetes erecta",
    sun: "Full",
    type: "Flower",
    imgURL: "",
    description:
      "Popular as summer or fall annuals. Various shades of orange and yellow.",
    size: "Medium",
    longevity: "Annual",
  },

  {
    commonName: "impatiens",
    scientificName: "Impatiens walleriana",
    sun: "shade",
    type: "Flower",
    imgURL: "",
    description:
      "Spring and summer annuals. Do well with some dappled sunlight and plenty of water.",
    size: "Medium",
    longevity: "Annual",
  },

  {
    commonName: "daylily",
    scientificName: "Impatiens walleriana",
    sun: "full",
    type: "Flower",
    imgURL: "",
    description: "Tall, graceful flowers. Blooms all summer, every summer.",
    size: "Large",
    longevity: "Perennial",
  },

  {
    commonName: "tulip",
    scientificName: "Tulipa",
    sun: "full",
    type: "Flower",
    imgURL: "",
    description:
      "Popular spring flowers. Easy to grow, great for cut flower arrangements.",
    size: "medium",
    longevity: "Annual",
  },
];
function flowerDescription(flowerName) {
  let newArray = plants.filter((plant) => plant.commonName == flowerName);
  let description = newArray[0].description;
  return description;
}

console.log(flowerDescription("tulip"));
console.log(flowerDescription("daylily"));
console.log(flowerDescription("marigold"));
console.log(flowerDescription("rosemary"));
