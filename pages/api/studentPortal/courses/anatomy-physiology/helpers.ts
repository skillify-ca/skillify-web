import type { PageData } from "./types"

// A title-only page. Use it for topics that appear in the sidebar but have no content yet,
// then replace it with a full object when you write the content.
export const stub = (id: string, title: string, tags: string[] = []): PageData => ({ type: "detail", id, title, tags })