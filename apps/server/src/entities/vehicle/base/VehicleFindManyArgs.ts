
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VehicleWhereInput } from "./VehicleWhereInput";
import { Type } from "class-transformer";
import { VehicleOrderByInput } from "./VehicleOrderByInput";

@ArgsType()
class VehicleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VehicleWhereInput,
  })
  @Field(() => VehicleWhereInput, { nullable: true })
  @Type(() => VehicleWhereInput)
  where?: VehicleWhereInput;

  @ApiProperty({
    required: false,
    type: [VehicleOrderByInput],
  })
  @Field(() => [VehicleOrderByInput], { nullable: true })
  @Type(() => VehicleOrderByInput)
  orderBy?: Array<VehicleOrderByInput>;

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

export { VehicleFindManyArgs as VehicleFindManyArgs };