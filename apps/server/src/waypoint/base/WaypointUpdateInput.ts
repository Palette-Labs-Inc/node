
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { IndividualUpdateManyWithoutWaypointsInput } from "./IndividualUpdateManyWithoutWaypointsInput";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";

@InputType()
class WaypointUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactWhereUniqueInput, {
    nullable: true,
  })
  contact?: ContactWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereUniqueInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationWhereUniqueInput, {
    nullable: true,
  })
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => IndividualUpdateManyWithoutWaypointsInput,
  })
  @ValidateNested()
  @Type(() => IndividualUpdateManyWithoutWaypointsInput)
  @IsOptional()
  @Field(() => IndividualUpdateManyWithoutWaypointsInput, {
    nullable: true,
  })
  individual?: IndividualUpdateManyWithoutWaypointsInput;

  @ApiProperty({
    required: false,
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  waypointCode?: string;
}

export { WaypointUpdateInput as WaypointUpdateInput };
