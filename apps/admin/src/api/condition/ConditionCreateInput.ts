import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";

export type ConditionCreateInput = {
  bsnId: string;
  bsnUrl: string;
  csnId?: string | null;
  csnUrl?: string | null;
  industryCode: string;
  location: LocationWhereUniqueInput;
  messageId: string;
  method: string;
  publicKey: string;
  ssnId: string;
  ssnUrl: string;
  timeToLive: string;
  transactionId: string;
};
