
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationWhereInput } from "./FulfillmentSpecificationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FulfillmentSpecificationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationWhereInput, {
    nullable: true,
  })
  every?: FulfillmentSpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationWhereInput, {
    nullable: true,
  })
  some?: FulfillmentSpecificationWhereInput;

  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationWhereInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationWhereInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationWhereInput, {
    nullable: true,
  })
  none?: FulfillmentSpecificationWhereInput;
}
export { FulfillmentSpecificationListRelationFilter as FulfillmentSpecificationListRelationFilter };
