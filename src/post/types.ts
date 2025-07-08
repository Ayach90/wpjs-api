import { WPYoastHeadJson } from "../types";

export interface WPPostFilters {
  _fields?: string[];
  _embed?: string;
  after?: string;
  author_exclude?: number;
  author?: number;
  before?: string;
  categories_exclude?: number[];
  categories?: number[];
  context?: "view" | "embed" | "edit";
  exclude?: number[];
  offset?: number;
  page?: number;
  per_page?: number;
  search?: string;
  sticky?: boolean;
  tags_exclude?: number[];
  tags?: number[];
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
  slug?: string;
  status?: "publish" | "future" | "draft" | "pending" | "private";
}

export interface WPAuthorInfo {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    24: string;
    48: string;
    96: string;
  };
}

export interface WPPost {
  _embedded?: {
    "wp:term": Array<Array<{ id: number; slug: string; taxonomy: string }>>;
    author: Array<WPAuthorInfo>;
    _links: WPLinks;
    categories: number[];
    categories_data: CategoryData[];
    class_list: string[];
    comment_status: string;
    content: RenderedContent;
    date_gmt: string;
    date: string;
    excerpt: RenderedContent;
    featured_image: {
      url: string;
      alt: string;
    } | null;
    featured_media: number;
    format:
      | "standard"
      | "aside"
      | "gallery"
      | "link"
      | "image"
      | "quote"
      | "status"
      | "video"
      | "audio";
    guid: Guid;
    id: number;
    link: string;
    meta: PostMeta;
    modified_gmt: string;
    modified: string;
    ping_status: "open" | "closed";
    slug: string;
    status: "publish" | "draft" | "future" | "pending" | "private";
    sticky: boolean;
    tags: number[];
    template: string;
    title: RenderedContent;
    type: string;
    yoast_head_json: WPYoastHeadJson;
    yoast_head: string;
  };
}

interface Guid {
  rendered: string;
}

interface RenderedContent {
  protected?: boolean;
  rendered: string;
}

interface CategoryData {
  id: number;
  name: string;
  slug: string;
  url: string;
}

interface PostMeta {
  _acf_changed: boolean;
  footnotes: string;
}

interface WPLinks {
  self: Array<{
    href: string;
    targetHints?: { allow: string[] };
  }>;
  collection: Array<{ href: string }>;
  about: Array<{ href: string }>;
  author: Array<{
    embeddable: boolean;
    href: string;
  }>;
  replies: Array<{
    embeddable: boolean;
    href: string;
  }>;
  "version-history": Array<{
    count: number;
    href: string;
  }>;
  "predecessor-version": Array<{
    id: number;
    href: string;
  }>;
  "wp:featuredmedia": Array<{
    embeddable: boolean;
    href: string;
  }>;
  "wp:attachment": Array<{ href: string }>;
  "wp:term": Array<
    | { taxonomy: "category"; embeddable: boolean; href: string }
    | { taxonomy: "post_tag"; embeddable: boolean; href: string }
  >;
  curies: Array<{
    name: string;
    href: string;
    templated: boolean;
  }>;
}
