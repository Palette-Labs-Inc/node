
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BazaarWhereInput } from "./BazaarWhereInput";
import { Type } from "class-transformer";
import { BazaarOrderByInput } from "./BazaarOrderByInput";

@ArgsType()
class BazaarFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BazaarWhereInput,
  })
  @Field(() => BazaarWhereInput, { nullable: true })
  @Type(() => BazaarWhereInput)
  where?: BazaarWhereInput;

  @ApiProperty({
    required: false,
    type: [BazaarOrderByInput],
  })
  @Field(() => [BazaarOrderByInput], { nullable: true })
  @Type(() => BazaarOrderByInput)
  orderBy?: Array<BazaarOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BazaarFindManyArgs as BazaarFindManyArgs };
