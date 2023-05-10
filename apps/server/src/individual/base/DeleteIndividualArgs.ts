
import { ArgsType, Field } from "@nestjs/graphql";
import { IndividualWhereUniqueInput } from "./IndividualWhereUniqueInput";

@ArgsType()
class DeleteIndividualArgs {
  @Field(() => IndividualWhereUniqueInput, { nullable: false })
  where!: IndividualWhereUniqueInput;
}

export { DeleteIndividualArgs as DeleteIndividualArgs };
