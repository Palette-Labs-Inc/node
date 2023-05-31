
import { ArgsType, Field } from "@nestjs/graphql";
import { HourIntervalWhereUniqueInput } from "./HourIntervalWhereUniqueInput";

@ArgsType()
class HourIntervalFindUniqueArgs {
  @Field(() => HourIntervalWhereUniqueInput, { nullable: false })
  where!: HourIntervalWhereUniqueInput;
}

export { HourIntervalFindUniqueArgs as HourIntervalFindUniqueArgs };
