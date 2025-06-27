import { apiRequest } from "../utils";
import { PageFilters, WPPage } from "./types";

export const getPageBySlug = async (
  wpApiUrl: string,
  filters: PageFilters = {}
) => {
  let url = `${wpApiUrl}/pages?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof PageFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<WPPage[]>({ url });
  return posts;
};
