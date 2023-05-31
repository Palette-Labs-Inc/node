
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
import { CreateSellerArgs } from "./CreateSellerArgs";
import { UpdateSellerArgs } from "./UpdateSellerArgs";
import { DeleteSellerArgs } from "./DeleteSellerArgs";
import { SellerFindManyArgs } from "./SellerFindManyArgs";
import { SellerFindUniqueArgs } from "./SellerFindUniqueArgs";
import { Seller } from "./Seller";
import { BazaarFindManyArgs } from "../../bazaar/base/BazaarFindManyArgs";
import { Bazaar } from "../../bazaar/base/Bazaar";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { ModifierGroupFindManyArgs } from "../../modifierGroup/base/ModifierGroupFindManyArgs";
import { ModifierGroup } from "../../modifierGroup/base/ModifierGroup";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { PaymentTerm } from "../../paymentTerm/base/PaymentTerm";
import { Search } from "../../search/base/Search";
import { User } from "../../user/base/User";
import { SellerService } from "../seller.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Seller)
export class SellerResolverBase {
  constructor(
    protected readonly service: SellerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async _sellersMeta(
    @graphql.Args() args: SellerFindManyArgs
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
  @graphql.Query(() => [Seller])
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async sellers(@graphql.Args() args: SellerFindManyArgs): Promise<Seller[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "own",
  })
  async seller(
    @graphql.Args() args: SellerFindUniqueArgs
  ): Promise<Seller | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Seller)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "create",
    possession: "any",
  })
  async createSeller(@graphql.Args() args: CreateSellerArgs): Promise<Seller> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        paymentTerm: args.data.paymentTerm
          ? {
              connect: args.data.paymentTerm,
            }
          : undefined,

        search: args.data.search
          ? {
              connect: args.data.search,
            }
          : undefined,

        users: {
          connect: args.data.users,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Seller)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "update",
    possession: "any",
  })
  async updateSeller(
    @graphql.Args() args: UpdateSellerArgs
  ): Promise<Seller | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          paymentTerm: args.data.paymentTerm
            ? {
                connect: args.data.paymentTerm,
              }
            : undefined,

          search: args.data.search
            ? {
                connect: args.data.search,
              }
            : undefined,

          users: {
            connect: args.data.users,
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

  @graphql.Mutation(() => Seller)
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "delete",
    possession: "any",
  })
  async deleteSeller(
    @graphql.Args() args: DeleteSellerArgs
  ): Promise<Seller | null> {
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
  @graphql.ResolveField(() => [Bazaar])
  @nestAccessControl.UseRoles({
    resource: "Bazaar",
    action: "read",
    possession: "any",
  })
  async bazaar(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: BazaarFindManyArgs
  ): Promise<Bazaar[]> {
    const results = await this.service.findBazaar(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    const results = await this.service.findCategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [FulfillmentSpecification])
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecifications(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: FulfillmentSpecificationFindManyArgs
  ): Promise<FulfillmentSpecification[]> {
    const results = await this.service.findFulfillmentSpecifications(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async locations(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    const results = await this.service.findLocations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MenuItem])
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findMenuItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Menu])
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async menus(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: MenuFindManyArgs
  ): Promise<Menu[]> {
    const results = await this.service.findMenus(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ModifierGroup])
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "any",
  })
  async modifierGroups(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: ModifierGroupFindManyArgs
  ): Promise<ModifierGroup[]> {
    const results = await this.service.findModifierGroups(parent.id, args);

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
  async promotions(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: PromotionFindManyArgs
  ): Promise<Promotion[]> {
    const results = await this.service.findPromotions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Rating])
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async ratings(
    @graphql.Parent() parent: Seller,
    @graphql.Args() args: RatingFindManyArgs
  ): Promise<Rating[]> {
    const results = await this.service.findRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => PaymentTerm, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PaymentTerm",
    action: "read",
    possession: "any",
  })
  async paymentTerm(
    @graphql.Parent() parent: Seller
  ): Promise<PaymentTerm | null> {
    const result = await this.service.getPaymentTerm(parent.id);

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
  async search(@graphql.Parent() parent: Seller): Promise<Search | null> {
    const result = await this.service.getSearch(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Parent() parent: Seller): Promise<User | null> {
    const result = await this.service.getUsers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
