
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { FulfillmentSpecificationUpdateManyWithoutContactsInput } from "./FulfillmentSpecificationUpdateManyWithoutContactsInput";
import { Type } from "class-transformer";
import { IndividualUpdateManyWithoutContactsInput } from "./IndividualUpdateManyWithoutContactsInput";
import { OrganizationUpdateManyWithoutContactsInput } from "./OrganizationUpdateManyWithoutContactsInput";
import { WaypointUpdateManyWithoutContactsInput } from "./WaypointUpdateManyWithoutContactsInput";

@InputType()
class ContactUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationUpdateManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationUpdateManyWithoutContactsInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationUpdateManyWithoutContactsInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutContactsInput;

  @ApiProperty({
    required: false,
    type: () => IndividualUpdateManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => IndividualUpdateManyWithoutContactsInput)
  @IsOptional()
  @Field(() => IndividualUpdateManyWithoutContactsInput, {
    nullable: true,
  })
  individuals?: IndividualUpdateManyWithoutContactsInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutContactsInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutContactsInput, {
    nullable: true,
  })
  organizations?: OrganizationUpdateManyWithoutContactsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string;

  @ApiProperty({
    required: false,
    type: () => WaypointUpdateManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => WaypointUpdateManyWithoutContactsInput)
  @IsOptional()
  @Field(() => WaypointUpdateManyWithoutContactsInput, {
    nullable: true,
  })
  waypoints?: WaypointUpdateManyWithoutContactsInput;
}

export { ContactUpdateInput as ContactUpdateInput };
