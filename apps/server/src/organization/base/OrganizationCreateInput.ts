
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { BillingCreateNestedManyWithoutOrganizationsInput } from "./BillingCreateNestedManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
import { ContactCreateNestedManyWithoutOrganizationsInput } from "./ContactCreateNestedManyWithoutOrganizationsInput";
import { CourierCreateNestedManyWithoutOrganizationsInput } from "./CourierCreateNestedManyWithoutOrganizationsInput";
import { LocationCreateNestedManyWithoutOrganizationsInput } from "./LocationCreateNestedManyWithoutOrganizationsInput";
import { MenuItemCreateNestedManyWithoutOrganizationsInput } from "./MenuItemCreateNestedManyWithoutOrganizationsInput";

@InputType()
class OrganizationCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: false,
    type: () => BillingCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => BillingCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => BillingCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  billings?: BillingCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: true,
    type: () => ContactCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => ContactCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => ContactCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  contact?: ContactCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => CourierCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => CourierCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => CourierCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  couriers?: CourierCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: true,
    type: () => LocationCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => LocationCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => LocationCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  location?: LocationCreateNestedManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemCreateNestedManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemCreateNestedManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => MenuItemCreateNestedManyWithoutOrganizationsInput, {
    nullable: true,
  })
  menuItems?: MenuItemCreateNestedManyWithoutOrganizationsInput;
}

export { OrganizationCreateInput as OrganizationCreateInput };
