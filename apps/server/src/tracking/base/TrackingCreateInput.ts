
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { EnumTrackingStatus } from "./EnumTrackingStatus";

@InputType()
class TrackingCreateInput {
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
    required: true,
    enum: EnumTrackingStatus,
  })
  @IsEnum(EnumTrackingStatus)
  @Field(() => EnumTrackingStatus)
  status!: "Active" | "Inactive";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  trackingUrl!: string;
}

export { TrackingCreateInput as TrackingCreateInput };
