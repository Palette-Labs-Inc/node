
import { InputType, Field } from "@nestjs/graphql";
import { SellerWhereUniqueInput } from "../../seller/base/SellerWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SellerCreateNestedManyWithoutBazaarsInput {
  @Field(() => [SellerWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SellerWhereUniqueInput],
  })
  connect?: Array<SellerWhereUniqueInput>;
}

export { SellerCreateNestedManyWithoutBazaarsInput as SellerCreateNestedManyWithoutBazaarsInput };
