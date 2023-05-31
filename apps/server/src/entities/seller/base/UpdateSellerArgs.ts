
import { ArgsType, Field } from "@nestjs/graphql";
import { SellerWhereUniqueInput } from "./SellerWhereUniqueInput";
import { SellerUpdateInput } from "./SellerUpdateInput";

@ArgsType()
class UpdateSellerArgs {
  @Field(() => SellerWhereUniqueInput, { nullable: false })
  where!: SellerWhereUniqueInput;
  @Field(() => SellerUpdateInput, { nullable: false })
  data!: SellerUpdateInput;
}

export { UpdateSellerArgs as UpdateSellerArgs };
