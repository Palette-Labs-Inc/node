import { BazaarWhereInput } from "./BazaarWhereInput";
import { BazaarOrderByInput } from "./BazaarOrderByInput";

export type BazaarFindManyArgs = {
  where?: BazaarWhereInput;
  orderBy?: Array<BazaarOrderByInput>;
  skip?: number;
  take?: number;
};
