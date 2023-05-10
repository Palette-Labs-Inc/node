
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { EnumTrackingStatus } from "./EnumTrackingStatus";

@InputType()
class TrackingUpdateInput {
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
  fulfillmentSpecifications?: FulfillmentSpecificationWhereUniqueInput | null;

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
  location?: LocationWhereUniqueInput | null;

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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  trackingUrl?: string;
}

export { TrackingUpdateInput as TrackingUpdateInput };
