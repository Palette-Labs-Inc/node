
import { ArgsType, Field } from "@nestjs/graphql";
import { WaypointWhereUniqueInput } from "./WaypointWhereUniqueInput";

@ArgsType()
class WaypointFindUniqueArgs {
  @Field(() => WaypointWhereUniqueInput, { nullable: false })
  where!: WaypointWhereUniqueInput;
}

export { WaypointFindUniqueArgs as WaypointFindUniqueArgs };
