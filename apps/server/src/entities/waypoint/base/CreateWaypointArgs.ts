
import { ArgsType, Field } from "@nestjs/graphql";
import { WaypointCreateInput } from "./WaypointCreateInput";

@ArgsType()
class CreateWaypointArgs {
  @Field(() => WaypointCreateInput, { nullable: false })
  data!: WaypointCreateInput;
}

export { CreateWaypointArgs as CreateWaypointArgs };
