
import { InputType, Field } from "@nestjs/graphql";
import { ConditionWhereUniqueInput } from "../../condition/base/ConditionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ConditionUpdateManyWithoutLocationsInput {
  @Field(() => [ConditionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConditionWhereUniqueInput],
  })
  connect?: Array<ConditionWhereUniqueInput>;

  @Field(() => [ConditionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConditionWhereUniqueInput],
  })
  disconnect?: Array<ConditionWhereUniqueInput>;

  @Field(() => [ConditionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ConditionWhereUniqueInput],
  })
  set?: Array<ConditionWhereUniqueInput>;
}

export { ConditionUpdateManyWithoutLocationsInput as ConditionUpdateManyWithoutLocationsInput };
