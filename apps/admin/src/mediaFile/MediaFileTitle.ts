import { MediaFile as TMediaFile } from "../api/mediaFile/MediaFile";

export const MEDIAFILE_TITLE_FIELD = "mimeType";

export const MediaFileTitle = (record: TMediaFile): string => {
  return record.mimeType || String(record.id);
};
