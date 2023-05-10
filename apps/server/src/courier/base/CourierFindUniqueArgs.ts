
import { ArgsType, Field } from "@nestjs/graphql";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";

@ArgsType()
class CourierFindUniqueArgs {
  @Field(() => CourierWhereUniqueInput, { nullable: false })
  where!: CourierWhereUniqueInput;
}

export { CourierFindUniqueArgs as CourierFindUniqueArgs };
