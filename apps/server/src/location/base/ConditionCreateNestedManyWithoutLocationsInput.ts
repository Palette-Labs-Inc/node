
import { InputType, Field } from "@nestjs/graphql";
import { ConditionWhereUniqueInput } from "../../condition/base/ConditionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ConditionCreateNestedManyWithoutLocationsInput {
  @Field(() => [ConditionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConditionWhereUniqueInput],
  })
  connect?: Array<ConditionWhereUniqueInput>;
}

export { ConditionCreateNestedManyWithoutLocationsInput as ConditionCreateNestedManyWithoutLocationsInput };
