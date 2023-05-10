
import { ArgsType, Field } from "@nestjs/graphql";
import { FulfillmentSpecificationWhereUniqueInput } from "./FulfillmentSpecificationWhereUniqueInput";

@ArgsType()
class FulfillmentSpecificationFindUniqueArgs {
  @Field(() => FulfillmentSpecificationWhereUniqueInput, { nullable: false })
  where!: FulfillmentSpecificationWhereUniqueInput;
}

export { FulfillmentSpecificationFindUniqueArgs as FulfillmentSpecificationFindUniqueArgs };
