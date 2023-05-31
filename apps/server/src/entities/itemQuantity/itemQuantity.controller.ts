import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ItemQuantityService } from "./itemQuantity.service";
import { ItemQuantityControllerBase } from "./base/itemQuantity.controller.base";

@swagger.ApiTags("itemQuantities")
@common.Controller("itemQuantities")
export class ItemQuantityController extends ItemQuantityControllerBase {
  constructor(
    protected readonly service: ItemQuantityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
