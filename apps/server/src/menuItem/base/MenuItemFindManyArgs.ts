
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MenuItemWhereInput } from "./MenuItemWhereInput";
import { Type } from "class-transformer";
import { MenuItemOrderByInput } from "./MenuItemOrderByInput";

@ArgsType()
class MenuItemFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MenuItemWhereInput,
  })
  @Field(() => MenuItemWhereInput, { nullable: true })
  @Type(() => MenuItemWhereInput)
  where?: MenuItemWhereInput;

  @ApiProperty({
    required: false,
    type: [MenuItemOrderByInput],
  })
  @Field(() => [MenuItemOrderByInput], { nullable: true })
  @Type(() => MenuItemOrderByInput)
  orderBy?: Array<MenuItemOrderByInput>;

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

export { MenuItemFindManyArgs as MenuItemFindManyArgs };
