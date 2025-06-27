import { apiRequest } from "../utils";
import { WPMenuItem } from "./types";
type GetMenusParams = {
  url: string;
  options?: RequestInit;
  menusIds: { header: string; footer: string };
};
export const getMenus = async ({
  url,
  options = {},
  menusIds,
}: GetMenusParams) => {
  const headerMenu = await apiRequest<WPMenuItem[]>({
    url: `${url}/menu-items?menus=${menusIds.header}`,
    options,
  });
  const footerMenu = await apiRequest<WPMenuItem[]>({
    url: `${url}/menu-items?menus=${menusIds.footer}`,
    options,
  });
  return { headerMenu, footerMenu };
};
