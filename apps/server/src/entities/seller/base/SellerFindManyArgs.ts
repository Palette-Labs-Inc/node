
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SellerWhereInput } from "./SellerWhereInput";
import { Type } from "class-transformer";
import { SellerOrderByInput } from "./SellerOrderByInput";

@ArgsType()
class SellerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SellerWhereInput,
  })
  @Field(() => SellerWhereInput, { nullable: true })
  @Type(() => SellerWhereInput)
  where?: SellerWhereInput;

  @ApiProperty({
    required: false,
    type: [SellerOrderByInput],
  })
  @Field(() => [SellerOrderByInput], { nullable: true })
  @Type(() => SellerOrderByInput)
  orderBy?: Array<SellerOrderByInput>;

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

export { SellerFindManyArgs as SellerFindManyArgs };
