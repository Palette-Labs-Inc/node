import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentTermResolverBase } from "./base/paymentTerm.resolver.base";
import { PaymentTerm } from "./base/PaymentTerm";
import { PaymentTermService } from "./paymentTerm.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentTerm)
export class PaymentTermResolver extends PaymentTermResolverBase {
  constructor(
    protected readonly service: PaymentTermService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
