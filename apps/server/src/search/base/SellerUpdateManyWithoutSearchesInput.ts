
import { InputType, Field } from "@nestjs/graphql";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SellerUpdateManyWithoutSearchesInput {
  @Field(() => [SellerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SellerWhereUniqueInput],
  })
  connect?: Array<SellerWhereUniqueInput>;

  @Field(() => [SellerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SellerWhereUniqueInput],
  })
  disconnect?: Array<SellerWhereUniqueInput>;

  @Field(() => [SellerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SellerWhereUniqueInput],
  })
  set?: Array<SellerWhereUniqueInput>;
}

export { SellerUpdateManyWithoutSearchesInput as SellerUpdateManyWithoutSearchesInput };
