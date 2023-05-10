import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FulfillmentSpecificationService } from "./fulfillmentSpecification.service";
import { FulfillmentSpecificationControllerBase } from "./base/fulfillmentSpecification.controller.base";

@swagger.ApiTags("fulfillmentSpecifications")
@common.Controller("fulfillmentSpecifications")
export class FulfillmentSpecificationController extends FulfillmentSpecificationControllerBase {
  constructor(
    protected readonly service: FulfillmentSpecificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
