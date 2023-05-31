
import { InputType, Field } from "@nestjs/graphql";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BazaarCreateNestedManyWithoutSellersInput {
  @Field(() => [BazaarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BazaarWhereUniqueInput],
  })
  connect?: Array<BazaarWhereUniqueInput>;
}

export { BazaarCreateNestedManyWithoutSellersInput as BazaarCreateNestedManyWithoutSellersInput };
