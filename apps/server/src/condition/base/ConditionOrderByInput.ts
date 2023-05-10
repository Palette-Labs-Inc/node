
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class ConditionOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  bsnId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  bsnUrl?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  csnId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  csnUrl?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  industryCode?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  locationId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  messageId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  method?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  publicKey?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  ssnId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  ssnUrl?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  timeToLive?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  transactionId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;
}

export { ConditionOrderByInput as ConditionOrderByInput };
