
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WaypointWhereInput } from "./WaypointWhereInput";
import { Type } from "class-transformer";
import { WaypointOrderByInput } from "./WaypointOrderByInput";

@ArgsType()
class WaypointFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => WaypointWhereInput,
  })
  @Field(() => WaypointWhereInput, { nullable: true })
  @Type(() => WaypointWhereInput)
  where?: WaypointWhereInput;

  @ApiProperty({
    required: false,
    type: [WaypointOrderByInput],
  })
  @Field(() => [WaypointOrderByInput], { nullable: true })
  @Type(() => WaypointOrderByInput)
  orderBy?: Array<WaypointOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { WaypointFindManyArgs as WaypointFindManyArgs };
