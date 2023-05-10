
import { ArgsType, Field } from "@nestjs/graphql";
import { BazaarCreateInput } from "./BazaarCreateInput";

@ArgsType()
class CreateBazaarArgs {
  @Field(() => BazaarCreateInput, { nullable: false })
  data!: BazaarCreateInput;
}

export { CreateBazaarArgs as CreateBazaarArgs };
