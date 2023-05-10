
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
import { CreateSearchArgs } from "./CreateSearchArgs";
import { UpdateSearchArgs } from "./UpdateSearchArgs";
import { DeleteSearchArgs } from "./DeleteSearchArgs";
import { SearchFindManyArgs } from "./SearchFindManyArgs";
import { SearchFindUniqueArgs } from "./SearchFindUniqueArgs";
import { Search } from "./Search";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { SellerFindManyArgs } from "../../seller/base/SellerFindManyArgs";
import { Seller } from "../../seller/base/Seller";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { SearchService } from "../search.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Search)
export class SearchResolverBase {
  constructor(
    protected readonly service: SearchService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async _searchesMeta(
    @graphql.Args() args: SearchFindManyArgs
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
  @graphql.Query(() => [Search])
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async searches(@graphql.Args() args: SearchFindManyArgs): Promise<Search[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Search, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "own",
  })
  async search(
    @graphql.Args() args: SearchFindUniqueArgs
  ): Promise<Search | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Search)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "create",
    possession: "any",
  })
  async createSearch(@graphql.Args() args: CreateSearchArgs): Promise<Search> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        fulfillmentSpecification: args.data.fulfillmentSpecification
          ? {
              connect: args.data.fulfillmentSpecification,
            }
          : undefined,

        menuItems: args.data.menuItems
          ? {
              connect: args.data.menuItems,
            }
          : undefined,

        paymentTerm: args.data.paymentTerm
          ? {
              connect: args.data.paymentTerm,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Search)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "update",
    possession: "any",
  })
  async updateSearch(
    @graphql.Args() args: UpdateSearchArgs
  ): Promise<Search | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          fulfillmentSpecification: args.data.fulfillmentSpecification
            ? {
                connect: args.data.fulfillmentSpecification,
              }
            : undefined,

          menuItems: args.data.menuItems
            ? {
                connect: args.data.menuItems,
              }
            : undefined,

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

  @graphql.Mutation(() => Search)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "delete",
    possession: "any",
  })
  async deleteSearch(
    @graphql.Args() args: DeleteSearchArgs
  ): Promise<Search | null> {
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
  @graphql.ResolveField(() => [Promotion])
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async promotions(
    @graphql.Parent() parent: Search,
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    const results = await this.service.findPromotions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Seller])
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async sellers(
    @graphql.Parent() parent: Search,
    @graphql.Args() args: SellerFindManyArgs
  ): Promise<Seller[]> {
    const results = await this.service.findSellers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => FulfillmentSpecification, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecification(
    @graphql.Parent() parent: Search
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.getFulfillmentSpecification(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => MenuItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(@graphql.Parent() parent: Search): Promise<MenuItem | null> {
    const result = await this.service.getMenuItems(parent.id);

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
    @graphql.Parent() parent: Search
  ): Promise<PaymentTerm | null> {
    const result = await this.service.getPaymentTerm(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
