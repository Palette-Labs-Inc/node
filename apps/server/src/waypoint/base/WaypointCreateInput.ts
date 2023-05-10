
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { IndividualCreateNestedManyWithoutWaypointsInput } from "./IndividualCreateNestedManyWithoutWaypointsInput";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";

@InputType()
class WaypointCreateInput {
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
    required: true,
    type: () => IndividualCreateNestedManyWithoutWaypointsInput,
  })
  @ValidateNested()
  @Type(() => IndividualCreateNestedManyWithoutWaypointsInput)
  @IsOptional()
  @Field(() => IndividualCreateNestedManyWithoutWaypointsInput, {
    nullable: true,
  })
  individual?: IndividualCreateNestedManyWithoutWaypointsInput;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  waypointCode!: string;
}

export { WaypointCreateInput as WaypointCreateInput };
