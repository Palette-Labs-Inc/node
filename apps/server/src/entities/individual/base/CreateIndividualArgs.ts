
import { ArgsType, Field } from "@nestjs/graphql";
import { IndividualCreateInput } from "./IndividualCreateInput";

@ArgsType()
class CreateIndividualArgs {
  @Field(() => IndividualCreateInput, { nullable: false })
  data!: IndividualCreateInput;
}

export { CreateIndividualArgs as CreateIndividualArgs };
