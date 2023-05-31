
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
import { ImageCreateNestedManyWithoutIndividualsInput } from "./ImageCreateNestedManyWithoutIndividualsInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { WaypointCreateNestedManyWithoutIndividualsInput } from "./WaypointCreateNestedManyWithoutIndividualsInput";

@InputType()
class IndividualCreateInput {
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
    required: false,
    type: () => ImageCreateNestedManyWithoutIndividualsInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutIndividualsInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutIndividualsInput, {
    nullable: true,
  })
  image?: ImageCreateNestedManyWithoutIndividualsInput;

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
  middleName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

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
    type: () => WaypointCreateNestedManyWithoutIndividualsInput,
  })
  @ValidateNested()
  @Type(() => WaypointCreateNestedManyWithoutIndividualsInput)
  @IsOptional()
  @Field(() => WaypointCreateNestedManyWithoutIndividualsInput, {
    nullable: true,
  })
  waypoints?: WaypointCreateNestedManyWithoutIndividualsInput;
}

export { IndividualCreateInput as IndividualCreateInput };
