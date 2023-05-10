
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SellerWhereInput } from "./SellerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SellerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SellerWhereInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereInput)
  @IsOptional()
  @Field(() => SellerWhereInput, {
    nullable: true,
  })
  every?: SellerWhereInput;

  @ApiProperty({
    required: false,
    type: () => SellerWhereInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereInput)
  @IsOptional()
  @Field(() => SellerWhereInput, {
    nullable: true,
  })
  some?: SellerWhereInput;

  @ApiProperty({
    required: false,
    type: () => SellerWhereInput,
  })
  @ValidateNested()
  @Type(() => SellerWhereInput)
  @IsOptional()
  @Field(() => SellerWhereInput, {
    nullable: true,
  })
  none?: SellerWhereInput;
}
export { SellerListRelationFilter as SellerListRelationFilter };
