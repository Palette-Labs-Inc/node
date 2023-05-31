
import { ArgsType, Field } from "@nestjs/graphql";
import { SellerCreateInput } from "./SellerCreateInput";

@ArgsType()
class CreateSellerArgs {
  @Field(() => SellerCreateInput, { nullable: false })
  data!: SellerCreateInput;
}

export { CreateSellerArgs as CreateSellerArgs };
