
import { ArgsType, Field } from "@nestjs/graphql";
import { SellerWhereUniqueInput } from "./SellerWhereUniqueInput";

@ArgsType()
class SellerFindUniqueArgs {
  @Field(() => SellerWhereUniqueInput, { nullable: false })
  where!: SellerWhereUniqueInput;
}

export { SellerFindUniqueArgs as SellerFindUniqueArgs };
