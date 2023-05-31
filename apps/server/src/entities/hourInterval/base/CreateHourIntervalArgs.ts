
import { ArgsType, Field } from "@nestjs/graphql";
import { HourIntervalCreateInput } from "./HourIntervalCreateInput";

@ArgsType()
class CreateHourIntervalArgs {
  @Field(() => HourIntervalCreateInput, { nullable: false })
  data!: HourIntervalCreateInput;
}

export { CreateHourIntervalArgs as CreateHourIntervalArgs };
