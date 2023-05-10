
import { ArgsType, Field } from "@nestjs/graphql";
import { ContactCreateInput } from "./ContactCreateInput";

@ArgsType()
class CreateContactArgs {
  @Field(() => ContactCreateInput, { nullable: false })
  data!: ContactCreateInput;
}

export { CreateContactArgs as CreateContactArgs };
