
import { ArgsType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationWhereUniqueInput } from "./FulfillmentSpecificationWhereUniqueInput";
import { FulfillmentSpecificationUpdateInput } from "./FulfillmentSpecificationUpdateInput";

@ArgsType()
class UpdateFulfillmentSpecificationArgs {
  @Field(() => FulfillmentSpecificationWhereUniqueInput, { nullable: false })
  where!: FulfillmentSpecificationWhereUniqueInput;
  @Field(() => FulfillmentSpecificationUpdateInput, { nullable: false })
  data!: FulfillmentSpecificationUpdateInput;
}

export { UpdateFulfillmentSpecificationArgs as UpdateFulfillmentSpecificationArgs };
