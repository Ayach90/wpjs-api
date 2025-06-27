import { apiRequest } from "../utils";
import { WPPost, WPPostFilters } from "./types";

export const getPosts = async (
  wpApiUrl: string,
  filters: WPPostFilters = {}
) => {
  let url = `${wpApiUrl}/posts?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof WPPostFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<WPPost[]>({ url });
  return posts;
};

export const getTotalPagesPagination = async (
  wpApiUrl: string,
  perPage: number = 10
): Promise<number> => {
  try {
    const posts = await fetch(`${wpApiUrl}/posts?per_page=${perPage}`);
    const totalPages = Number(posts.headers.get("x-wp-totalpages"));
    return totalPages;
  } catch (e) {
    throw new Error(`Error: ${e}`);
  }
};
