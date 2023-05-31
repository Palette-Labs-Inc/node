
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ItemQuantityWhereInput } from "./ItemQuantityWhereInput";
import { Type } from "class-transformer";
import { ItemQuantityOrderByInput } from "./ItemQuantityOrderByInput";

@ArgsType()
class ItemQuantityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ItemQuantityWhereInput,
  })
  @Field(() => ItemQuantityWhereInput, { nullable: true })
  @Type(() => ItemQuantityWhereInput)
  where?: ItemQuantityWhereInput;

  @ApiProperty({
    required: false,
    type: [ItemQuantityOrderByInput],
  })
  @Field(() => [ItemQuantityOrderByInput], { nullable: true })
  @Type(() => ItemQuantityOrderByInput)
  orderBy?: Array<ItemQuantityOrderByInput>;

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

export { ItemQuantityFindManyArgs as ItemQuantityFindManyArgs };
