
import { ArgsType, Field } from "@nestjs/graphql";
import { SupportCreateInput } from "./SupportCreateInput";

@ArgsType()
class CreateSupportArgs {
  @Field(() => SupportCreateInput, { nullable: false })
  data!: SupportCreateInput;
}

export { CreateSupportArgs as CreateSupportArgs };
