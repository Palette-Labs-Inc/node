
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { OrganizationListRelationFilter } from "../../organization/base/OrganizationListRelationFilter";
import { FloatNullableFilter } from "../../../util/FloatNullableFilter";
import { RatingListRelationFilter } from "../../rating/base/RatingListRelationFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class CourierWhereInput {
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
    type: () => IndividualWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => IndividualWhereUniqueInput)
  @IsOptional()
  @Field(() => IndividualWhereUniqueInput, {
    nullable: true,
  })
  inidividual?: IndividualWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => OrganizationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => OrganizationListRelationFilter)
  @IsOptional()
  @Field(() => OrganizationListRelationFilter, {
    nullable: true,
  })
  organization?: OrganizationListRelationFilter;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RatingListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RatingListRelationFilter)
  @IsOptional()
  @Field(() => RatingListRelationFilter, {
    nullable: true,
  })
  ratings?: RatingListRelationFilter;

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

export { CourierWhereInput as CourierWhereInput };
