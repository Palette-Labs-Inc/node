
import { InputType, Field } from "@nestjs/graphql";
import { ModifierGroupWhereUniqueInput } from "../../modifierGroup/base/ModifierGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ModifierGroupUpdateManyWithoutSellersInput {
  @Field(() => [ModifierGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModifierGroupWhereUniqueInput],
  })
  connect?: Array<ModifierGroupWhereUniqueInput>;

  @Field(() => [ModifierGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModifierGroupWhereUniqueInput],
  })
  disconnect?: Array<ModifierGroupWhereUniqueInput>;

  @Field(() => [ModifierGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModifierGroupWhereUniqueInput],
  })
  set?: Array<ModifierGroupWhereUniqueInput>;
}

export { ModifierGroupUpdateManyWithoutSellersInput as ModifierGroupUpdateManyWithoutSellersInput };
