
import { ArgsType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationWhereUniqueInput } from "./FulfillmentSpecificationWhereUniqueInput";

@ArgsType()
class DeleteFulfillmentSpecificationArgs {
  @Field(() => FulfillmentSpecificationWhereUniqueInput, { nullable: false })
  where!: FulfillmentSpecificationWhereUniqueInput;
}

export { DeleteFulfillmentSpecificationArgs as DeleteFulfillmentSpecificationArgs };
