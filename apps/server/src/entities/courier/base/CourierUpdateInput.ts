
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationUpdateManyWithoutCouriersInput } from "./FulfillmentSpecificationUpdateManyWithoutCouriersInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { OrganizationUpdateManyWithoutCouriersInput } from "./OrganizationUpdateManyWithoutCouriersInput";
import { RatingUpdateManyWithoutCouriersInput } from "./RatingUpdateManyWithoutCouriersInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CourierUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationUpdateManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationUpdateManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationUpdateManyWithoutCouriersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationUpdateManyWithoutCouriersInput;

  @ApiProperty({
    required: false,
    type: () => IndividualWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereUniqueInput)
  @IsOptional()
  @Field(() => IndividualWhereUniqueInput, {
    nullable: true,
  })
  inidividual?: IndividualWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrganizationUpdateManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => OrganizationUpdateManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => OrganizationUpdateManyWithoutCouriersInput, {
    nullable: true,
  })
  organization?: OrganizationUpdateManyWithoutCouriersInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @ApiProperty({
    required: false,
    type: () => RatingUpdateManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => RatingUpdateManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => RatingUpdateManyWithoutCouriersInput, {
    nullable: true,
  })
  ratings?: RatingUpdateManyWithoutCouriersInput;

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
  users?: UserWhereUniqueInput;
}

export { CourierUpdateInput as CourierUpdateInput };
