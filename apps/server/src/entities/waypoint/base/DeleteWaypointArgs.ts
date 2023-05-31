
import { ArgsType, Field } from "@nestjs/graphql";
import { WaypointWhereUniqueInput } from "./WaypointWhereUniqueInput";

@ArgsType()
class DeleteWaypointArgs {
  @Field(() => WaypointWhereUniqueInput, { nullable: false })
  where!: WaypointWhereUniqueInput;
}

export { DeleteWaypointArgs as DeleteWaypointArgs };
