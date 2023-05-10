
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateNested, IsOptional, IsDate } from "class-validator";
import { Billing } from "../../billing/base/Billing";
import { Type } from "class-transformer";
import { Contact } from "../../contact/base/Contact";
import { Courier } from "../../courier/base/Courier";
import { Location } from "../../location/base/Location";
import { MenuItem } from "../../menuItem/base/MenuItem";

@ObjectType()
class Organization {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: false,
    type: () => [Billing],
  })
  @ValidateNested()
  @Type(() => Billing)
  @IsOptional()
  billings?: Array<Billing>;

  @ApiProperty({
    required: true,
    type: () => [Contact],
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contact?: Array<Contact>;

  @ApiProperty({
    required: false,
    type: () => [Courier],
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  couriers?: Array<Courier>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => [Location],
  })
  @ValidateNested()
  @Type(() => Location)
  @IsOptional()
  location?: Array<Location>;

  @ApiProperty({
    required: false,
    type: () => [MenuItem],
  })
  @ValidateNested()
  @Type(() => MenuItem)
  @IsOptional()
  menuItems?: Array<MenuItem>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Organization as Organization };
