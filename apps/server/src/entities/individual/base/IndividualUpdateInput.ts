
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { EnumIndividualGender } from "./EnumIndividualGender";
import { ImageUpdateManyWithoutIndividualsInput } from "./ImageUpdateManyWithoutIndividualsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WaypointUpdateManyWithoutIndividualsInput } from "./WaypointUpdateManyWithoutIndividualsInput";

@InputType()
class IndividualUpdateInput {
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
    type: () => CourierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CourierWhereUniqueInput)
  @IsOptional()
  @Field(() => CourierWhereUniqueInput, {
    nullable: true,
  })
  couriers?: CourierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

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
    required: false,
    type: () => ImageUpdateManyWithoutIndividualsInput,
  })
  @ValidateNested()
  @Type(() => ImageUpdateManyWithoutIndividualsInput)
  @IsOptional()
  @Field(() => ImageUpdateManyWithoutIndividualsInput, {
    nullable: true,
  })
  image?: ImageUpdateManyWithoutIndividualsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  middleName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  users?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => WaypointUpdateManyWithoutIndividualsInput,
  })
  @ValidateNested()
  @Type(() => WaypointUpdateManyWithoutIndividualsInput)
  @IsOptional()
  @Field(() => WaypointUpdateManyWithoutIndividualsInput, {
    nullable: true,
  })
  waypoints?: WaypointUpdateManyWithoutIndividualsInput;
}

export { IndividualUpdateInput as IndividualUpdateInput };
