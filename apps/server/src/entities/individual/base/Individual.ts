
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Contact } from "../../contact/base/Contact";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Courier } from "../../courier/base/Courier";
import { EnumIndividualGender } from "./EnumIndividualGender";
import { Image } from "../../image/base/Image";
import { User } from "../../user/base/User";
import { Waypoint } from "../../waypoint/base/Waypoint";

@ObjectType()
class Individual {
  @ApiProperty({
    required: false,
    type: () => Contact,
  })
  @ValidateNested()
  @Type(() => Contact)
  @IsOptional()
  contact?: Contact | null;

  @ApiProperty({
    required: false,
    type: () => Courier,
  })
  @ValidateNested()
  @Type(() => Courier)
  @IsOptional()
  couriers?: Courier | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth!: Date | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  firstName!: string;

  @ApiProperty({
    required: false,
    enum: EnumIndividualGender,
  })
  @IsEnum(EnumIndividualGender)
  @IsOptional()
  @Field(() => EnumIndividualGender, {
    nullable: true,
  })
  gender?: "Male" | "Female" | "Na" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  image?: Array<Image>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  lastName!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  middleName!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  users?: User | null;

  @ApiProperty({
    required: false,
    type: () => [Waypoint],
  })
  @ValidateNested()
  @Type(() => Waypoint)
  @IsOptional()
  waypoints?: Array<Waypoint>;
}

export { Individual as Individual };
