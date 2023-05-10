
import { ArgsType, Field } from "@nestjs/graphql";
import { VehicleWhereUniqueInput } from "./VehicleWhereUniqueInput";

@ArgsType()
class DeleteVehicleArgs {
  @Field(() => VehicleWhereUniqueInput, { nullable: false })
  where!: VehicleWhereUniqueInput;
}

export { DeleteVehicleArgs as DeleteVehicleArgs };
