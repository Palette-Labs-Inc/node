
import { ArgsType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "./IndividualWhereUniqueInput";
import { IndividualUpdateInput } from "./IndividualUpdateInput";

@ArgsType()
class UpdateIndividualArgs {
  @Field(() => IndividualWhereUniqueInput, { nullable: false })
  where!: IndividualWhereUniqueInput;
  @Field(() => IndividualUpdateInput, { nullable: false })
  data!: IndividualUpdateInput;
}

export { UpdateIndividualArgs as UpdateIndividualArgs };
