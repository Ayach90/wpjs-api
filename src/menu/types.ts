/** Link genérico que aparece en las respuestas HAL de la REST API de WP */
interface WPLink {
  href: string;
  /** Solo algunos enlaces traen la clave targetHints */
  targetHints?: { allow: Array<"GET" | "POST" | "PUT" | "PATCH" | "DELETE"> };
  /** Para los enlaces de objeto/taxonomía */
  post_type?: string;
  taxonomy?: string;
  embeddable?: boolean;
  /** Para los curies */
  name?: string;
  templated?: boolean;
}

/** Agrupa todos los enlaces que puede devolver un nav menu item */
interface WPMenuItemLinks {
  self: WPLink[];
  collection: WPLink[];
  about: WPLink[];
  "wp:term": WPLink[]; // enlaces a la taxonomía nav_menu
  "wp:menu-item-object": WPLink[]; // enlace al objeto vinculado (page, post…)
  curies: WPLink[];
}

/** Estructura completa de un ítem de menú (`/wp/v2/menu-items/:id`) */
export interface WPMenuItem {
  id: number;
  title: { rendered: string };
  status: "publish" | "draft" | "private" | string;
  url: string;
  attr_title: string;
  description: string;
  type: "post_type" | "custom" | "taxonomy" | string;
  type_label: string;
  object: string; // p. ej. "page", "post", "category"…
  object_id: number;
  parent: number;
  menu_order: number;
  target: string;
  classes: string[];
  xfn: string[];
  invalid: boolean;
  meta: unknown[]; // la API devuelve un array (normalmente vacío)
  menus: number; // ID del menú al que pertenece
  _links: WPMenuItemLinks;
}
