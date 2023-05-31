
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IndividualListRelationFilter } from "../../individual/base/IndividualListRelationFilter";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";

@InputType()
class WaypointWhereInput {
  @ApiProperty({
    required: false,
    type: () => ContactWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactWhereUniqueInput)
  @IsOptional()
  @Field(() => ContactWhereUniqueInput, {
    nullable: true,
  })
  contact?: ContactWhereUniqueInput;

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
  fulfillmentSpecification?: FulfillmentSpecificationWhereUniqueInput;

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
    type: () => IndividualListRelationFilter,
  })
  @ValidateNested()
  @Type(() => IndividualListRelationFilter)
  @IsOptional()
  @Field(() => IndividualListRelationFilter, {
    nullable: true,
  })
  individual?: IndividualListRelationFilter;

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
  location?: LocationWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  waypointCode?: StringFilter;
}

export { WaypointWhereInput as WaypointWhereInput };
