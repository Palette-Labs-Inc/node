
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
import { CreatePaymentTermArgs } from "./CreatePaymentTermArgs";
import { UpdatePaymentTermArgs } from "./UpdatePaymentTermArgs";
import { DeletePaymentTermArgs } from "./DeletePaymentTermArgs";
import { PaymentTermFindManyArgs } from "./PaymentTermFindManyArgs";
import { PaymentTermFindUniqueArgs } from "./PaymentTermFindUniqueArgs";
import { PaymentTerm } from "./PaymentTerm";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { Order } from "../../order/base/Order";
import { PaymentSource } from "../../paymentSource/base/PaymentSource";
import { Search } from "../../search/base/Search";
import { Seller } from "../../seller/base/Seller";
import { PaymentTermService } from "../paymentTerm.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentTerm)
export class PaymentTermResolverBase {
  constructor(
    protected readonly service: PaymentTermService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async _paymentTermsMeta(
    @graphql.Args() args: PaymentTermFindManyArgs
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
  @graphql.Query(() => [PaymentTerm])
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async paymentTerms(
    @graphql.Args() args: PaymentTermFindManyArgs
  ): Promise<PaymentTerm[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PaymentTerm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "own",
  })
  async paymentTerm(
    @graphql.Args() args: PaymentTermFindUniqueArgs
  ): Promise<PaymentTerm | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentTerm)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "create",
    possession: "any",
  })
  async createPaymentTerm(
    @graphql.Args() args: CreatePaymentTermArgs
  ): Promise<PaymentTerm> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        bazaar: args.data.bazaar
          ? {
              connect: args.data.bazaar,
            }
          : undefined,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,

        paymentSource: args.data.paymentSource
          ? {
              connect: args.data.paymentSource,
            }
          : undefined,

        search: args.data.search
          ? {
              connect: args.data.search,
            }
          : undefined,

        seller: args.data.seller
          ? {
              connect: args.data.seller,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PaymentTerm)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "update",
    possession: "any",
  })
  async updatePaymentTerm(
    @graphql.Args() args: UpdatePaymentTermArgs
  ): Promise<PaymentTerm | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          bazaar: args.data.bazaar
            ? {
                connect: args.data.bazaar,
              }
            : undefined,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,

          paymentSource: args.data.paymentSource
            ? {
                connect: args.data.paymentSource,
              }
            : undefined,

          search: args.data.search
            ? {
                connect: args.data.search,
              }
            : undefined,

          seller: args.data.seller
            ? {
                connect: args.data.seller,
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

  @graphql.Mutation(() => PaymentTerm)
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "delete",
    possession: "any",
  })
  async deletePaymentTerm(
    @graphql.Args() args: DeletePaymentTermArgs
  ): Promise<PaymentTerm | null> {
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
  @graphql.ResolveField(() => Bazaar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async bazaar(@graphql.Parent() parent: PaymentTerm): Promise<Bazaar | null> {
    const result = await this.service.getBazaar(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async order(@graphql.Parent() parent: PaymentTerm): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentSource, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentSource",
    action: "read",
    possession: "any",
  })
  async paymentSource(
    @graphql.Parent() parent: PaymentTerm
  ): Promise<PaymentSource | null> {
    const result = await this.service.getPaymentSource(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Search, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async search(@graphql.Parent() parent: PaymentTerm): Promise<Search | null> {
    const result = await this.service.getSearch(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async seller(@graphql.Parent() parent: PaymentTerm): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
