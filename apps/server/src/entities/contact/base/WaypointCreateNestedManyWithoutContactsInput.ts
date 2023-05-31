
import { InputType, Field } from "@nestjs/graphql";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WaypointCreateNestedManyWithoutContactsInput {
  @Field(() => [WaypointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WaypointWhereUniqueInput],
  })
  connect?: Array<WaypointWhereUniqueInput>;
}

export { WaypointCreateNestedManyWithoutContactsInput as WaypointCreateNestedManyWithoutContactsInput };
