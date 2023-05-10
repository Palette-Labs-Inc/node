
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBillingArgs } from "./CreateBillingArgs";
import { UpdateBillingArgs } from "./UpdateBillingArgs";
import { DeleteBillingArgs } from "./DeleteBillingArgs";
import { BillingFindManyArgs } from "./BillingFindManyArgs";
import { BillingFindUniqueArgs } from "./BillingFindUniqueArgs";
import { Billing } from "./Billing";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { Organization } from "../../organization/base/Organization";
import { BillingService } from "../billing.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Billing)
export class BillingResolverBase {
  constructor(
    protected readonly service: BillingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async _billingsMeta(
    @graphql.Args() args: BillingFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Billing])
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async billings(
    @graphql.Args() args: BillingFindManyArgs
  ): Promise<Billing[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Billing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "own",
  })
  async billing(
    @graphql.Args() args: BillingFindUniqueArgs
  ): Promise<Billing | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Billing)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "create",
    possession: "any",
  })
  async createBilling(
    @graphql.Args() args: CreateBillingArgs
  ): Promise<Billing> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: {
          connect: args.data.organization,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Billing)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "update",
    possession: "any",
  })
  async updateBilling(
    @graphql.Args() args: UpdateBillingArgs
  ): Promise<Billing | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: {
            connect: args.data.organization,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Billing)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "delete",
    possession: "any",
  })
  async deleteBilling(
    @graphql.Args() args: DeleteBillingArgs
  ): Promise<Billing | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(
    @graphql.Parent() parent: Billing,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: Billing
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
