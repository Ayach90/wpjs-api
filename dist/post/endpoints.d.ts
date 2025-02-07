import { Post, PostFilters } from "./types";
export declare const getPosts: (wpApiUrl: string | undefined, filters?: PostFilters) => Promise<Post[]>;
export declare const getTotalPages: (wpApiUrl: string, per_page?: number) => Promise<number>;
