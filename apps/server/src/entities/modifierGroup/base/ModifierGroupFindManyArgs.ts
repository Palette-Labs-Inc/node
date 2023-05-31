
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ModifierGroupWhereInput } from "./ModifierGroupWhereInput";
import { Type } from "class-transformer";
import { ModifierGroupOrderByInput } from "./ModifierGroupOrderByInput";

@ArgsType()
class ModifierGroupFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ModifierGroupWhereInput,
  })
  @Field(() => ModifierGroupWhereInput, { nullable: true })
  @Type(() => ModifierGroupWhereInput)
  where?: ModifierGroupWhereInput;

  @ApiProperty({
    required: false,
    type: [ModifierGroupOrderByInput],
  })
  @Field(() => [ModifierGroupOrderByInput], { nullable: true })
  @Type(() => ModifierGroupOrderByInput)
  orderBy?: Array<ModifierGroupOrderByInput>;

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

export { ModifierGroupFindManyArgs as ModifierGroupFindManyArgs };
