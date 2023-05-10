import { Search as TSearch } from "../api/search/Search";

export const SEARCH_TITLE_FIELD = "id";

export const SearchTitle = (record: TSearch): string => {
  return record.id || String(record.id);
};
