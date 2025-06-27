export interface WPMenuItem {
  id: number;
  title: { rendered: string };
  status: "publish" | "draft" | "private";
  url: string;
  attr_title: string;
  description: string;
  type: string;
  type_label: string;
  object: string;
  object_id: number;
  parent: number;
  menu_order: number;
  target: string;
  classes: string[];
  xfn: string[];
  invalid: boolean;
  meta: unknown[];
  menus: number;
  _links: WPMenuItemLinks;
}

interface WPLink {
  href: string;
  targetHints?: { allow: Array<"GET" | "POST" | "PUT" | "PATCH" | "DELETE"> };
  post_type?: string;
  taxonomy?: string;
  embeddable?: boolean;
  name?: string;
  templated?: boolean;
}

interface WPMenuItemLinks {
  self: WPLink[];
  collection: WPLink[];
  about: WPLink[];
  "wp:term": WPLink[];
  "wp:menu-item-object": WPLink[];
  curies: WPLink[];
}
