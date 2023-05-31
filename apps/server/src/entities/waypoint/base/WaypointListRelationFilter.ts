
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WaypointWhereInput } from "./WaypointWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WaypointListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WaypointWhereInput,
  })
  @ValidateNested()
  @Type(() => WaypointWhereInput)
  @IsOptional()
  @Field(() => WaypointWhereInput, {
    nullable: true,
  })
  every?: WaypointWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaypointWhereInput,
  })
  @ValidateNested()
  @Type(() => WaypointWhereInput)
  @IsOptional()
  @Field(() => WaypointWhereInput, {
    nullable: true,
  })
  some?: WaypointWhereInput;

  @ApiProperty({
    required: false,
    type: () => WaypointWhereInput,
  })
  @ValidateNested()
  @Type(() => WaypointWhereInput)
  @IsOptional()
  @Field(() => WaypointWhereInput, {
    nullable: true,
  })
  none?: WaypointWhereInput;
}
export { WaypointListRelationFilter as WaypointListRelationFilter };
