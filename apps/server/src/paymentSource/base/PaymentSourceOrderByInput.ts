
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class PaymentSourceOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressCity?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressCountry?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressLine_1?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressLine_2?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressState?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  addressZip?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  cardNumber?: SortOrder;

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
  currencyCode?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  cvc?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  expirationMonth?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  expirationYear?: SortOrder;

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
  name?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @Field(() => SortOrder, {
    nullable: true,
  })
  usersId?: SortOrder;
}

export { PaymentSourceOrderByInput as PaymentSourceOrderByInput };
