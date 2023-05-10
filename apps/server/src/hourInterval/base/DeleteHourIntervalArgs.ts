
import { ArgsType, Field } from "@nestjs/graphql";
import { HourIntervalWhereUniqueInput } from "./HourIntervalWhereUniqueInput";

@ArgsType()
class DeleteHourIntervalArgs {
  @Field(() => HourIntervalWhereUniqueInput, { nullable: false })
  where!: HourIntervalWhereUniqueInput;
}

export { DeleteHourIntervalArgs as DeleteHourIntervalArgs };
