import { apiRequest } from "../utils";
import { WPCategory, WPCategoryFilters } from "./types";

export const getCategories = async (
  wpApiUrl: string,
  filters: WPCategoryFilters = {}
) => {
  let url = `${wpApiUrl}/categories?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof WPCategoryFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<WPCategory[]>({ url });
  return posts;
};

export const getCategoryTotalPages = async (
  wpApiUrl: string,
  categoryId: number,
  perPage: number = 10
): Promise<number> => {
  try {
    const posts = await fetch(
      `${wpApiUrl}/posts?categories=${categoryId}&per_page=${perPage}`
    );
    const totalPages = Number(posts.headers.get("x-wp-totalpages"));
    return totalPages;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};
