
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BillingListRelationFilter } from "../../billing/base/BillingListRelationFilter";
import { ContactListRelationFilter } from "../../contact/base/ContactListRelationFilter";
import { CourierListRelationFilter } from "../../courier/base/CourierListRelationFilter";
import { LocationListRelationFilter } from "../../location/base/LocationListRelationFilter";
import { MenuItemListRelationFilter } from "../../menuItem/base/MenuItemListRelationFilter";

@InputType()
class OrganizationWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => BillingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BillingListRelationFilter)
  @IsOptional()
  @Field(() => BillingListRelationFilter, {
    nullable: true,
  })
  billings?: BillingListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ContactListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContactListRelationFilter)
  @IsOptional()
  @Field(() => ContactListRelationFilter, {
    nullable: true,
  })
  contact?: ContactListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CourierListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CourierListRelationFilter)
  @IsOptional()
  @Field(() => CourierListRelationFilter, {
    nullable: true,
  })
  couriers?: CourierListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LocationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LocationListRelationFilter)
  @IsOptional()
  @Field(() => LocationListRelationFilter, {
    nullable: true,
  })
  location?: LocationListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MenuItemListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MenuItemListRelationFilter)
  @IsOptional()
  @Field(() => MenuItemListRelationFilter, {
    nullable: true,
  })
  menuItems?: MenuItemListRelationFilter;
}

export { OrganizationWhereInput as OrganizationWhereInput };
