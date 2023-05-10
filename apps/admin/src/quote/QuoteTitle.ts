import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "currencyCode";

export const QuoteTitle = (record: TQuote): string => {
  return record.currencyCode || String(record.id);
};
