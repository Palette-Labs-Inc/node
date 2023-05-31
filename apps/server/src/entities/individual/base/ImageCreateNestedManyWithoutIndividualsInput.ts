
import { InputType, Field } from "@nestjs/graphql";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ImageCreateNestedManyWithoutIndividualsInput {
  @Field(() => [ImageWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ImageWhereUniqueInput],
  })
  connect?: Array<ImageWhereUniqueInput>;
}

export { ImageCreateNestedManyWithoutIndividualsInput as ImageCreateNestedManyWithoutIndividualsInput };
