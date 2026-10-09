export type Section = { title: string; items: string[] };

type BasePage = {
  id: string;            // canonical id, e.g. "lamina_propria"
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
  children?: string[];   // ids of child pages (used by the tree and by directory pages)
};

export type DetailPage = BasePage & { type: "detail"; sections?: Section[] };
export type DirectoryPage = BasePage & { type: "directory"; children: string[] };
export type CategorizeGamePage = BasePage & { type: "categorize", categories: Category[], properties: CategoryProperty[] };

export type PageData = DetailPage | DirectoryPage | CategorizeGamePage
export type CategoryProperty = {property: string, category: string}
export type Category = {id: string, title: string}