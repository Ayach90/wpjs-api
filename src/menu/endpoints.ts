import { apiRequest } from "../utils";
import { MenusResponse } from "./types";

export const getMenus = async (wpApiUrl: string) => {
  const posts = await apiRequest<MenusResponse>(`${wpApiUrl}/menus`);
  return posts;
};
