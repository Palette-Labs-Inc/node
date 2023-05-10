import { IndividualWhereInput } from "./IndividualWhereInput";
import { IndividualOrderByInput } from "./IndividualOrderByInput";

export type IndividualFindManyArgs = {
  where?: IndividualWhereInput;
  orderBy?: Array<IndividualOrderByInput>;
  skip?: number;
  take?: number;
};
