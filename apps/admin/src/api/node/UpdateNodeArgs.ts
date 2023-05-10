import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { NodeUpdateInput } from "./NodeUpdateInput";

export type UpdateNodeArgs = {
  where: NodeWhereUniqueInput;
  data: NodeUpdateInput;
};
