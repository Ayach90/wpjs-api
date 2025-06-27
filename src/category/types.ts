import { WPYoastHeadJson } from "../types";

export interface WPCategoryFilters {
  context?: "view" | "embed" | "edit";
  page?: number;
  per_page?: number;
  search?: string;
  exclude?: number[];
  include?: number[];
  order?: "asc" | "desc";
  orderby?:
    | "count"
    | "id"
    | "include"
    | "name"
    | "slug"
    | "term_group"
    | "term_order";
  hide_empty?: boolean;
  parent?: number;
  post?: number;
  _fields?: string[];
  slug?: string;
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  yoast_head: string;
  yoast_head_json: WPYoastHeadJson;
  _links: Links;
  acf: { bgColor: string; textColor: string };
}

interface Links {
  self: LinkItem[];
  collection: LinkItem[];
  about: LinkItem[];
  "wp:post_type": LinkItem[];
  curies: CuriesItem[];
}

interface LinkItem {
  href: string;
  targetHints?: {
    allow: string[];
  };
}

interface CuriesItem {
  name: string;
  href: string;
  templated: boolean;
}
