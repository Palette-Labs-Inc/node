import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentSourceResolverBase } from "./base/paymentSource.resolver.base";
import { PaymentSource } from "./base/PaymentSource";
import { PaymentSourceService } from "./paymentSource.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentSource)
export class PaymentSourceResolver extends PaymentSourceResolverBase {
  constructor(
    protected readonly service: PaymentSourceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
