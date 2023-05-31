
import { InputType, Field } from "@nestjs/graphql";
import { MediaFileWhereUniqueInput } from "../../mediaFile/base/MediaFileWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MediaFileCreateNestedManyWithoutRatingsInput {
  @Field(() => [MediaFileWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MediaFileWhereUniqueInput],
  })
  connect?: Array<MediaFileWhereUniqueInput>;
}

export { MediaFileCreateNestedManyWithoutRatingsInput as MediaFileCreateNestedManyWithoutRatingsInput };
