
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../../util/StringFilter";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { EnumTrackingStatus } from "./EnumTrackingStatus";

@InputType()
class TrackingWhereInput {
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
  fulfillmentSpecifications?: FulfillmentSpecificationWhereUniqueInput;

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
    type: () => LocationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LocationWhereUniqueInput)
  @IsOptional()
  @Field(() => LocationWhereUniqueInput, {
    nullable: true,
  })
  location?: LocationWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTrackingStatus,
  })
  @IsEnum(EnumTrackingStatus)
  @IsOptional()
  @Field(() => EnumTrackingStatus, {
    nullable: true,
  })
  status?: "Active" | "Inactive";
}

export { TrackingWhereInput as TrackingWhereInput };
