
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
import { CreateOrderArgs } from "./CreateOrderArgs";
import { UpdateOrderArgs } from "./UpdateOrderArgs";
import { DeleteOrderArgs } from "./DeleteOrderArgs";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderFindUniqueArgs } from "./OrderFindUniqueArgs";
import { Order } from "./Order";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { Billing } from "../../billing/base/Billing";
import { Cancellation } from "../../cancellation/base/Cancellation";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { OrderService } from "../order.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Order)
export class OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async _ordersMeta(
    @graphql.Args() args: OrderFindManyArgs
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
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(@graphql.Args() args: OrderFindManyArgs): Promise<Order[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "own",
  })
  async order(
    @graphql.Args() args: OrderFindUniqueArgs
  ): Promise<Order | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "create",
    possession: "any",
  })
  async createOrder(@graphql.Args() args: CreateOrderArgs): Promise<Order> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        billing: {
          connect: args.data.billing,
        },

        cancellation: args.data.cancellation
          ? {
              connect: args.data.cancellation,
            }
          : undefined,

        fulfillmentSpecification: {
          connect: args.data.fulfillmentSpecification,
        },

        paymentTerm: args.data.paymentTerm
          ? {
              connect: args.data.paymentTerm,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "update",
    possession: "any",
  })
  async updateOrder(
    @graphql.Args() args: UpdateOrderArgs
  ): Promise<Order | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          billing: {
            connect: args.data.billing,
          },

          cancellation: args.data.cancellation
            ? {
                connect: args.data.cancellation,
              }
            : undefined,

          fulfillmentSpecification: {
            connect: args.data.fulfillmentSpecification,
          },

          paymentTerm: args.data.paymentTerm
            ? {
                connect: args.data.paymentTerm,
              }
            : undefined,
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

  @graphql.Mutation(() => Order)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "delete",
    possession: "any",
  })
  async deleteOrder(
    @graphql.Args() args: DeleteOrderArgs
  ): Promise<Order | null> {
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
  @graphql.ResolveField(() => [MenuItem])
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findMenuItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Promotion])
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async promotion(
    @graphql.Parent() parent: Order,
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    const results = await this.service.findPromotion(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Billing, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async billing(@graphql.Parent() parent: Order): Promise<Billing | null> {
    const result = await this.service.getBilling(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Cancellation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cancellation",
    action: "read",
    possession: "any",
  })
  async cancellation(
    @graphql.Parent() parent: Order
  ): Promise<Cancellation | null> {
    const result = await this.service.getCancellation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => FulfillmentSpecification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecification(
    @graphql.Parent() parent: Order
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.getFulfillmentSpecification(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentTerm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async paymentTerm(
    @graphql.Parent() parent: Order
  ): Promise<PaymentTerm | null> {
    const result = await this.service.getPaymentTerm(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
