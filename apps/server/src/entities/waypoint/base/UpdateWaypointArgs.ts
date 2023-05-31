
import { ArgsType, Field } from "@nestjs/graphql";
import { WaypointWhereUniqueInput } from "./WaypointWhereUniqueInput";
import { WaypointUpdateInput } from "./WaypointUpdateInput";

@ArgsType()
class UpdateWaypointArgs {
  @Field(() => WaypointWhereUniqueInput, { nullable: false })
  where!: WaypointWhereUniqueInput;
  @Field(() => WaypointUpdateInput, { nullable: false })
  data!: WaypointUpdateInput;
}

export { UpdateWaypointArgs as UpdateWaypointArgs };
