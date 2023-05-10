
import { registerEnumType } from "@nestjs/graphql";

export enum EnumFulfillmentSpecificationStatus {
  NewOrder = "NewOrder",
  Confirmed = "Confirmed",
  PickedUp = "PickedUp",
  Canceled = "Canceled",
  Fulfilled = "Fulfilled",
  Prepared = "Prepared",
  Rejected = "Rejected",
  CourierRequested = "CourierRequested",
  CourierAssigned = "CourierAssigned",
  CourierPickedUp = "CourierPickedUp",
  CourierCompleted = "CourierCompleted",
  CourierCanceled = "CourierCanceled",
  CourierArrivedAtPickup = "CourierArrivedAtPickup",
}

registerEnumType(EnumFulfillmentSpecificationStatus, {
  name: "EnumFulfillmentSpecificationStatus",
});
