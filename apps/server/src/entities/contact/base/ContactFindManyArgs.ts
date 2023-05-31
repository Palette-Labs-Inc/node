
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactWhereInput } from "./ContactWhereInput";
import { Type } from "class-transformer";
import { ContactOrderByInput } from "./ContactOrderByInput";

@ArgsType()
class ContactFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContactWhereInput,
  })
  @Field(() => ContactWhereInput, { nullable: true })
  @Type(() => ContactWhereInput)
  where?: ContactWhereInput;

  @ApiProperty({
    required: false,
    type: [ContactOrderByInput],
  })
  @Field(() => [ContactOrderByInput], { nullable: true })
  @Type(() => ContactOrderByInput)
  orderBy?: Array<ContactOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ContactFindManyArgs as ContactFindManyArgs };
