
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { FulfillmentSpecificationCreateNestedManyWithoutContactsInput } from "./FulfillmentSpecificationCreateNestedManyWithoutContactsInput";
import { Type } from "class-transformer";
import { IndividualCreateNestedManyWithoutContactsInput } from "./IndividualCreateNestedManyWithoutContactsInput";
import { OrganizationCreateNestedManyWithoutContactsInput } from "./OrganizationCreateNestedManyWithoutContactsInput";
import { WaypointCreateNestedManyWithoutContactsInput } from "./WaypointCreateNestedManyWithoutContactsInput";

@InputType()
class ContactCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationCreateNestedManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationCreateNestedManyWithoutContactsInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationCreateNestedManyWithoutContactsInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutContactsInput;

  @ApiProperty({
    required: false,
    type: () => IndividualCreateNestedManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => IndividualCreateNestedManyWithoutContactsInput)
  @IsOptional()
  @Field(() => IndividualCreateNestedManyWithoutContactsInput, {
    nullable: true,
  })
  individuals?: IndividualCreateNestedManyWithoutContactsInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationCreateNestedManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => OrganizationCreateNestedManyWithoutContactsInput)
  @IsOptional()
  @Field(() => OrganizationCreateNestedManyWithoutContactsInput, {
    nullable: true,
  })
  organizations?: OrganizationCreateNestedManyWithoutContactsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phone!: string;

  @ApiProperty({
    required: false,
    type: () => WaypointCreateNestedManyWithoutContactsInput,
  })
  @ValidateNested()
  @Type(() => WaypointCreateNestedManyWithoutContactsInput)
  @IsOptional()
  @Field(() => WaypointCreateNestedManyWithoutContactsInput, {
    nullable: true,
  })
  waypoints?: WaypointCreateNestedManyWithoutContactsInput;
}

export { ContactCreateInput as ContactCreateInput };
