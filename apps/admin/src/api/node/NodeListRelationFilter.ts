import { NodeWhereInput } from "./NodeWhereInput";

export type NodeListRelationFilter = {
  every?: NodeWhereInput;
  some?: NodeWhereInput;
  none?: NodeWhereInput;
};
