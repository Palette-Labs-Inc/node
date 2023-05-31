
import { InputType, Field } from "@nestjs/graphql";
import { BazaarWhereUniqueInput } from "../../bazaar/base/BazaarWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BazaarUpdateManyWithoutSellersInput {
  @Field(() => [BazaarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BazaarWhereUniqueInput],
  })
  connect?: Array<BazaarWhereUniqueInput>;

  @Field(() => [BazaarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BazaarWhereUniqueInput],
  })
  disconnect?: Array<BazaarWhereUniqueInput>;

  @Field(() => [BazaarWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BazaarWhereUniqueInput],
  })
  set?: Array<BazaarWhereUniqueInput>;
}

export { BazaarUpdateManyWithoutSellersInput as BazaarUpdateManyWithoutSellersInput };
