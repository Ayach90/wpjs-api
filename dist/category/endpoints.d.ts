import { Category, CategoryFilters } from "./types";
export declare const getCategories: (wpApiUrl: string | undefined, filters?: CategoryFilters) => Promise<Category[]>;
