import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FulfillmentSpecificationResolverBase } from "./base/fulfillmentSpecification.resolver.base";
import { FulfillmentSpecification } from "./base/FulfillmentSpecification";
import { FulfillmentSpecificationService } from "./fulfillmentSpecification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FulfillmentSpecification)
export class FulfillmentSpecificationResolver extends FulfillmentSpecificationResolverBase {
  constructor(
    protected readonly service: FulfillmentSpecificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
