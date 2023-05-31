import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentSourceService } from "./paymentSource.service";
import { PaymentSourceControllerBase } from "./base/paymentSource.controller.base";

@swagger.ApiTags("paymentSources")
@common.Controller("paymentSources")
export class PaymentSourceController extends PaymentSourceControllerBase {
  constructor(
    protected readonly service: PaymentSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
