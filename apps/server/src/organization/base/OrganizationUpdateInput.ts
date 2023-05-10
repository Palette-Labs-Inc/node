
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { BillingUpdateManyWithoutOrganizationsInput } from "./BillingUpdateManyWithoutOrganizationsInput";
import { Type } from "class-transformer";
import { ContactUpdateManyWithoutOrganizationsInput } from "./ContactUpdateManyWithoutOrganizationsInput";
import { CourierUpdateManyWithoutOrganizationsInput } from "./CourierUpdateManyWithoutOrganizationsInput";
import { LocationUpdateManyWithoutOrganizationsInput } from "./LocationUpdateManyWithoutOrganizationsInput";
import { MenuItemUpdateManyWithoutOrganizationsInput } from "./MenuItemUpdateManyWithoutOrganizationsInput";

@InputType()
class OrganizationUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

  @ApiProperty({
    required: false,
    type: () => BillingUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => BillingUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => BillingUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  billings?: BillingUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  contact?: ContactUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => CourierUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => CourierUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => CourierUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  couriers?: CourierUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => LocationUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => LocationUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => LocationUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  location?: LocationUpdateManyWithoutOrganizationsInput;

  @ApiProperty({
    required: false,
    type: () => MenuItemUpdateManyWithoutOrganizationsInput,
  })
  @ValidateNested()
  @Type(() => MenuItemUpdateManyWithoutOrganizationsInput)
  @IsOptional()
  @Field(() => MenuItemUpdateManyWithoutOrganizationsInput, {
    nullable: true,
  })
  menuItems?: MenuItemUpdateManyWithoutOrganizationsInput;
}

export { OrganizationUpdateInput as OrganizationUpdateInput };
