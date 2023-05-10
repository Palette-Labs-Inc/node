
import { InputType, Field } from "@nestjs/graphql";
import { HourIntervalWhereUniqueInput } from "../../hourInterval/base/HourIntervalWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class HourIntervalUpdateManyWithoutMenusInput {
  @Field(() => [HourIntervalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HourIntervalWhereUniqueInput],
  })
  connect?: Array<HourIntervalWhereUniqueInput>;

  @Field(() => [HourIntervalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HourIntervalWhereUniqueInput],
  })
  disconnect?: Array<HourIntervalWhereUniqueInput>;

  @Field(() => [HourIntervalWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [HourIntervalWhereUniqueInput],
  })
  set?: Array<HourIntervalWhereUniqueInput>;
}

export { HourIntervalUpdateManyWithoutMenusInput as HourIntervalUpdateManyWithoutMenusInput };
