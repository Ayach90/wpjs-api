import { apiRequest } from "../utils";
import { WPPageFilters, WPPage } from "./types";

export const getPageBySlug = async (
  wpApiUrl: string,
  filters: WPPageFilters = {}
) => {
  let url = `${wpApiUrl}/pages?`;
  for (const key in filters) {
    if (Object.prototype.hasOwnProperty.call(filters, key)) {
      url += `${key}=${filters[key as keyof WPPageFilters]}&`;
    }
  }
  url = url.slice(0, -1);
  const posts = await apiRequest<WPPage[]>({ url });
  return posts;
};
