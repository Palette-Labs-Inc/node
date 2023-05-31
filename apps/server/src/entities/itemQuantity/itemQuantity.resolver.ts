import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ItemQuantityResolverBase } from "./base/itemQuantity.resolver.base";
import { ItemQuantity } from "./base/ItemQuantity";
import { ItemQuantityService } from "./itemQuantity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemQuantity)
export class ItemQuantityResolver extends ItemQuantityResolverBase {
  constructor(
    protected readonly service: ItemQuantityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
