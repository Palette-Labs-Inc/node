import { Image as TImage } from "../api/image/Image";

export const IMAGE_TITLE_FIELD = "height";

export const ImageTitle = (record: TImage): string => {
  return record.height || String(record.id);
};
