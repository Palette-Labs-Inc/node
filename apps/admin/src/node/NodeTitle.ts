import { Node as TNode } from "../api/node/Node";

export const NODE_TITLE_FIELD = "hostUrl";

export const NodeTitle = (record: TNode): string => {
  return record.hostUrl || String(record.id);
};
