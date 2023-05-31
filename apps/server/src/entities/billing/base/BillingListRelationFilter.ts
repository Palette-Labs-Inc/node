
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillingWhereInput } from "./BillingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BillingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BillingWhereInput,
  })
  @ValidateNested()
  @Type(() => BillingWhereInput)
  @IsOptional()
  @Field(() => BillingWhereInput, {
    nullable: true,
  })
  every?: BillingWhereInput;

  @ApiProperty({
    required: false,
    type: () => BillingWhereInput,
  })
  @ValidateNested()
  @Type(() => BillingWhereInput)
  @IsOptional()
  @Field(() => BillingWhereInput, {
    nullable: true,
  })
  some?: BillingWhereInput;

  @ApiProperty({
    required: false,
    type: () => BillingWhereInput,
  })
  @ValidateNested()
  @Type(() => BillingWhereInput)
  @IsOptional()
  @Field(() => BillingWhereInput, {
    nullable: true,
  })
  none?: BillingWhereInput;
}
export { BillingListRelationFilter as BillingListRelationFilter };
