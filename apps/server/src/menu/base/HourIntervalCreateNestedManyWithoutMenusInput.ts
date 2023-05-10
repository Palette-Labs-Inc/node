
import { InputType, Field } from "@nestjs/graphql";
import { HourIntervalWhereUniqueInput } from "../../hourInterval/base/HourIntervalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HourIntervalCreateNestedManyWithoutMenusInput {
  @Field(() => [HourIntervalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HourIntervalWhereUniqueInput],
  })
  connect?: Array<HourIntervalWhereUniqueInput>;
}

export { HourIntervalCreateNestedManyWithoutMenusInput as HourIntervalCreateNestedManyWithoutMenusInput };
