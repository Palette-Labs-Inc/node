import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type ConditionWhereInput = {
  bsnId?: StringFilter;
  bsnUrl?: StringFilter;
  csnId?: StringNullableFilter;
  csnUrl?: StringNullableFilter;
  id?: StringFilter;
  industryCode?: StringFilter;
  location?: LocationWhereUniqueInput;
  messageId?: StringFilter;
  method?: StringFilter;
  publicKey?: StringFilter;
  ssnId?: StringFilter;
  ssnUrl?: StringFilter;
  timeToLive?: StringFilter;
  transactionId?: StringFilter;
};
