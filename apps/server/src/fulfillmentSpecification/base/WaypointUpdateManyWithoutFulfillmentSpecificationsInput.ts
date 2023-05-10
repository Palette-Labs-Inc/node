
import { InputType, Field } from "@nestjs/graphql";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WaypointUpdateManyWithoutFulfillmentSpecificationsInput {
  @Field(() => [WaypointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WaypointWhereUniqueInput],
  })
  connect?: Array<WaypointWhereUniqueInput>;

  @Field(() => [WaypointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WaypointWhereUniqueInput],
  })
  disconnect?: Array<WaypointWhereUniqueInput>;

  @Field(() => [WaypointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WaypointWhereUniqueInput],
  })
  set?: Array<WaypointWhereUniqueInput>;
}

export { WaypointUpdateManyWithoutFulfillmentSpecificationsInput as WaypointUpdateManyWithoutFulfillmentSpecificationsInput };
