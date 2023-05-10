import { NodeWhereInput } from "./NodeWhereInput";
import { NodeOrderByInput } from "./NodeOrderByInput";

export type NodeFindManyArgs = {
  where?: NodeWhereInput;
  orderBy?: Array<NodeOrderByInput>;
  skip?: number;
  take?: number;
};
