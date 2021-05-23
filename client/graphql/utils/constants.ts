export const USER_ID = "2";

export const SKILLS = [
  {
    id: "332c6dfb-5ff6-416d-8134-a2cadb5035bd",
    title: "Stats",
  },
  {
    id: "158b6ebb-3cd9-4842-832b-e0437bf9804f",
    title: "Decimals",
  },
  {
    id: "d99245af-1cfa-42bc-906e-620505139acf",
    title: "Data",
  },
  {
    id: "9a6b909e-ab21-4704-8a15-bc34e49857c0",
    title: "Time",
  },
  {
    id: "b7064bac-f884-4631-90f7-3d1a0cc66657",
    title: "Money",
  },
  {
    id: "55642a7d-5abb-47da-84ad-845fa5eb10d1",
    title: "Patterns",
  },
  {
    id: "fcba8ff1-c517-4176-8d57-798b1e8e4ffb",
    title: "Logic",
  },
  {
    id: "57553e3f-60a1-45d8-8795-18f080d678de",
    title: "Estimation",
  },
  {
    id: "5859ea4c-53ce-48ff-a099-c518164cdef4",
    title: "Variables",
  },
  {
    id: "196453c2-0b5d-48e4-8726-d31c4fac3674",
    title: "Geometry",
    slug: "geometry",
  },
  {
    id: "8eccb70d-436e-488d-bb1c-de9ddc280973",
    title: "Fractions",
    slug: "fractions",
  },
  {
    id: "a5139286-58a2-454c-b19c-19f9bfbf1658",
    title: "Mixed Operations",
    slug: "mixed-operations",
  },
  {
    id: "7a66ac87-de3c-4168-b68c-2ebc6b068cff",
    title: "Division",
    slug: "division",
  },
  {
    id: "6538fb40-d168-46c4-8830-15562ce70051",
    title: "Multiplication",
    slug: "multiplication",
  },
  {
    id: "f8c94eaa-d405-473f-b709-ea105877fbcb",
    title: "Subtraction",
    slug: "subtraction",
  },
  {
    id: "6aa7774f-85d0-438f-a35f-04034ada4fe5",
    title: "Addition",
    slug: "addition",
  },
  {
    id: "81d5ff9c-7789-480d-ad5d-d98af7d3cb98",
    title: "Numbers",
    slug: "numbers",
  },
];

export const getSkillIdFromSlug = (slug: string) => {
  const filteredSkills = SKILLS.filter((it) => it.slug == slug);
  if (filteredSkills.length > 0) {
    return filteredSkills[0].id; // get the id for the current skill
  }
  return "";
};

export const userId = (session) => {
  if (session) {
    return session["userId"];
  }
  return "-1";
};
