
import { ArgsType, Field } from "@nestjs/graphql";
import { SellerWhereUniqueInput } from "./SellerWhereUniqueInput";

@ArgsType()
class DeleteSellerArgs {
  @Field(() => SellerWhereUniqueInput, { nullable: false })
  where!: SellerWhereUniqueInput;
}

export { DeleteSellerArgs as DeleteSellerArgs };
