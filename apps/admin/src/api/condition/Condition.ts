import { Location } from "../location/Location";

export type Condition = {
  bsnId: string;
  bsnUrl: string;
  createdAt: Date;
  csnId: string | null;
  csnUrl: string | null;
  id: string;
  industryCode: string;
  location?: Location;
  messageId: string;
  method: string;
  publicKey: string;
  ssnId: string;
  ssnUrl: string;
  timeToLive: string;
  transactionId: string;
  updatedAt: Date;
};
