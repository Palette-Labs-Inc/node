
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HourIntervalWhereInput } from "./HourIntervalWhereInput";
import { Type } from "class-transformer";
import { HourIntervalOrderByInput } from "./HourIntervalOrderByInput";

@ArgsType()
class HourIntervalFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HourIntervalWhereInput,
  })
  @Field(() => HourIntervalWhereInput, { nullable: true })
  @Type(() => HourIntervalWhereInput)
  where?: HourIntervalWhereInput;

  @ApiProperty({
    required: false,
    type: [HourIntervalOrderByInput],
  })
  @Field(() => [HourIntervalOrderByInput], { nullable: true })
  @Type(() => HourIntervalOrderByInput)
  orderBy?: Array<HourIntervalOrderByInput>;

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

export { HourIntervalFindManyArgs as HourIntervalFindManyArgs };
