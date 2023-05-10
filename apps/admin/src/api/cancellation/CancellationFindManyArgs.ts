import { CancellationWhereInput } from "./CancellationWhereInput";
import { CancellationOrderByInput } from "./CancellationOrderByInput";

export type CancellationFindManyArgs = {
  where?: CancellationWhereInput;
  orderBy?: Array<CancellationOrderByInput>;
  skip?: number;
  take?: number;
};
