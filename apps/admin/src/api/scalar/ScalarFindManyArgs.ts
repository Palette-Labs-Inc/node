import { ScalarWhereInput } from "./ScalarWhereInput";
import { ScalarOrderByInput } from "./ScalarOrderByInput";

export type ScalarFindManyArgs = {
  where?: ScalarWhereInput;
  orderBy?: Array<ScalarOrderByInput>;
  skip?: number;
  take?: number;
};
