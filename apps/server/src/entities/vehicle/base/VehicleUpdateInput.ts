
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, ValidateNested } from "class-validator";
import { FulfillmentSpecificationUpdateManyWithoutVehiclesInput } from "./FulfillmentSpecificationUpdateManyWithoutVehiclesInput";
import { Type } from "class-transformer";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  category?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  color?: string | null;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutVehiclesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  make?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registration?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  size?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  volume?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  wheelsCount?: number | null;
}

export { VehicleUpdateInput as VehicleUpdateInput };
