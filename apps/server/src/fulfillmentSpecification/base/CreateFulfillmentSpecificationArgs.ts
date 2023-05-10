
import { ArgsType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationCreateInput } from "./FulfillmentSpecificationCreateInput";

@ArgsType()
class CreateFulfillmentSpecificationArgs {
  @Field(() => FulfillmentSpecificationCreateInput, { nullable: false })
  data!: FulfillmentSpecificationCreateInput;
}

export { CreateFulfillmentSpecificationArgs as CreateFulfillmentSpecificationArgs };
