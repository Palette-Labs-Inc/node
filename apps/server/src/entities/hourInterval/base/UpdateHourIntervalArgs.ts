
import { ArgsType, Field } from "@nestjs/graphql";
import { HourIntervalWhereUniqueInput } from "./HourIntervalWhereUniqueInput";
import { HourIntervalUpdateInput } from "./HourIntervalUpdateInput";

@ArgsType()
class UpdateHourIntervalArgs {
  @Field(() => HourIntervalWhereUniqueInput, { nullable: false })
  where!: HourIntervalWhereUniqueInput;
  @Field(() => HourIntervalUpdateInput, { nullable: false })
  data!: HourIntervalUpdateInput;
}

export { UpdateHourIntervalArgs as UpdateHourIntervalArgs };
