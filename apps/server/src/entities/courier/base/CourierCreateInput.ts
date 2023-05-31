
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FulfillmentSpecificationCreateNestedManyWithoutCouriersInput } from "./FulfillmentSpecificationCreateNestedManyWithoutCouriersInput";
import { ValidateNested, IsOptional, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { OrganizationCreateNestedManyWithoutCouriersInput } from "./OrganizationCreateNestedManyWithoutCouriersInput";
import { RatingCreateNestedManyWithoutCouriersInput } from "./RatingCreateNestedManyWithoutCouriersInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CourierCreateInput {
  @ApiProperty({
    required: false,
    type: () => FulfillmentSpecificationCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => FulfillmentSpecificationCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => FulfillmentSpecificationCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  fulfillmentSpecifications?: FulfillmentSpecificationCreateNestedManyWithoutCouriersInput;

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
    type: () => OrganizationCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => OrganizationCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => OrganizationCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  organization?: OrganizationCreateNestedManyWithoutCouriersInput;

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
    type: () => RatingCreateNestedManyWithoutCouriersInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutCouriersInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutCouriersInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutCouriersInput;

  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  users!: UserWhereUniqueInput;
}

export { CourierCreateInput as CourierCreateInput };
