import { ConditionWhereInput } from "./ConditionWhereInput";
import { ConditionOrderByInput } from "./ConditionOrderByInput";

export type ConditionFindManyArgs = {
  where?: ConditionWhereInput;
  orderBy?: Array<ConditionOrderByInput>;
  skip?: number;
  take?: number;
};
