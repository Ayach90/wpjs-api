import { YoastHeadJson } from "../category";

export interface PageFilters {
  _fields?: string[];
  after?: string;
  author_exclude?: number;
  author?: number;
  before?: string;
  context?: "view" | "embed" | "edit";
  exclude?: number[];
  include?: number[]; // Útil para obtener páginas por ID
  menu_order?: number;
  offset?: number;
  order?: "asc" | "desc";
  orderby?:
    | "date"
    | "relevance"
    | "id"
    | "include"
    | "title"
    | "slug"
    | "modified"
    | "menu_order"
    | "meta_value"
    | "meta_value_num"
    | "comment_count";
  page?: number;
  parent_exclude?: number[];
  parent?: number[];
  per_page?: number;
  search?: string;
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
}

export interface WPPage {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: "publish" | "future" | "draft" | "pending" | "private";
  type: "page";
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  meta: Record<string, any>;
  template: string;
  permalink_template?: string;
  generated_slug?: string;
  yoast_head_json: YoastHeadJson;
  yoast_head: string;
  acf?: Record<string, any>;
}
