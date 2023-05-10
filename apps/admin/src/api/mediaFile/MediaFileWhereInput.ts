import { StringFilter } from "../../util/StringFilter";
import { RatingWhereUniqueInput } from "../rating/RatingWhereUniqueInput";

export type MediaFileWhereInput = {
  id?: StringFilter;
  mimeType?: StringFilter;
  rating?: RatingWhereUniqueInput;
};
