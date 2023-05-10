import { FulfillmentSpecificationWhereInput } from "./FulfillmentSpecificationWhereInput";
import { FulfillmentSpecificationOrderByInput } from "./FulfillmentSpecificationOrderByInput";

export type FulfillmentSpecificationFindManyArgs = {
  where?: FulfillmentSpecificationWhereInput;
  orderBy?: Array<FulfillmentSpecificationOrderByInput>;
  skip?: number;
  take?: number;
};
