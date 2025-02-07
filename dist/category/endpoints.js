"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const utils_1 = require("../utils");
const getCategories = (wpApiUrl_1, ...args_1) => __awaiter(void 0, [wpApiUrl_1, ...args_1], void 0, function* (wpApiUrl, filters = {}) {
    let url = `${wpApiUrl}/categories?`;
    for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
            url += `${key}=${filters[key]}&`;
        }
    }
    url = url.slice(0, -1);
    const posts = yield (0, utils_1.apiRequest)(url);
    return posts;
});
exports.getCategories = getCategories;
