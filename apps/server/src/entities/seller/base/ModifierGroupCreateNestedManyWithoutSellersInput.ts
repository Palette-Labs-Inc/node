
import { InputType, Field } from "@nestjs/graphql";
import { ModifierGroupWhereUniqueInput } from "../../modifierGroup/base/ModifierGroupWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ModifierGroupCreateNestedManyWithoutSellersInput {
  @Field(() => [ModifierGroupWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ModifierGroupWhereUniqueInput],
  })
  connect?: Array<ModifierGroupWhereUniqueInput>;
}

export { ModifierGroupCreateNestedManyWithoutSellersInput as ModifierGroupCreateNestedManyWithoutSellersInput };
