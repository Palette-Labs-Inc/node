
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PaymentSourceWhereInput } from "./PaymentSourceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PaymentSourceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PaymentSourceWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceWhereInput)
  @IsOptional()
  @Field(() => PaymentSourceWhereInput, {
    nullable: true,
  })
  every?: PaymentSourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceWhereInput)
  @IsOptional()
  @Field(() => PaymentSourceWhereInput, {
    nullable: true,
  })
  some?: PaymentSourceWhereInput;

  @ApiProperty({
    required: false,
    type: () => PaymentSourceWhereInput,
  })
  @ValidateNested()
  @Type(() => PaymentSourceWhereInput)
  @IsOptional()
  @Field(() => PaymentSourceWhereInput, {
    nullable: true,
  })
  none?: PaymentSourceWhereInput;
}
export { PaymentSourceListRelationFilter as PaymentSourceListRelationFilter };
