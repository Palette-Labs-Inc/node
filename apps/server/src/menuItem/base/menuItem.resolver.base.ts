
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
import { CreateMenuItemArgs } from "./CreateMenuItemArgs";
import { UpdateMenuItemArgs } from "./UpdateMenuItemArgs";
import { DeleteMenuItemArgs } from "./DeleteMenuItemArgs";
import { MenuItemFindManyArgs } from "./MenuItemFindManyArgs";
import { MenuItemFindUniqueArgs } from "./MenuItemFindUniqueArgs";
import { MenuItem } from "./MenuItem";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { MediaFileFindManyArgs } from "../../mediaFile/base/MediaFileFindManyArgs";
import { MediaFile } from "../../mediaFile/base/MediaFile";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { SearchFindManyArgs } from "../../search/base/SearchFindManyArgs";
import { Search } from "../../search/base/Search";
import { ItemQuantity } from "../../itemQuantity/base/ItemQuantity";
import { Seller } from "../../seller/base/Seller";
import { MenuItemService } from "../menuItem.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MenuItem)
export class MenuItemResolverBase {
  constructor(
    protected readonly service: MenuItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async _menuItemsMeta(
    @graphql.Args() args: MenuItemFindManyArgs
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
  @graphql.Query(() => [MenuItem])
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MenuItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "own",
  })
  async menuItem(
    @graphql.Args() args: MenuItemFindUniqueArgs
  ): Promise<MenuItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuItem)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "create",
    possession: "any",
  })
  async createMenuItem(
    @graphql.Args() args: CreateMenuItemArgs
  ): Promise<MenuItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        quantity: args.data.quantity
          ? {
              connect: args.data.quantity,
            }
          : undefined,

        sellers: args.data.sellers
          ? {
              connect: args.data.sellers,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MenuItem)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  async updateMenuItem(
    @graphql.Args() args: UpdateMenuItemArgs
  ): Promise<MenuItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          quantity: args.data.quantity
            ? {
                connect: args.data.quantity,
              }
            : undefined,

          sellers: args.data.sellers
            ? {
                connect: args.data.sellers,
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

  @graphql.Mutation(() => MenuItem)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "delete",
    possession: "any",
  })
  async deleteMenuItem(
    @graphql.Args() args: DeleteMenuItemArgs
  ): Promise<MenuItem | null> {
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
  @graphql.ResolveField(() => [Image])
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async images(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: ImageFindManyArgs
  ): Promise<Image[]> {
    const results = await this.service.findImages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MediaFile])
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  async mediaFile(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: MediaFileFindManyArgs
  ): Promise<MediaFile[]> {
    const results = await this.service.findMediaFile(parent.id, args);

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
  async menuItemsSelectedModifiers(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findMenuItemsSelectedModifiers(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async orders(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Organization])
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    const results = await this.service.findOrganization(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Quote])
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async quotes(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: QuoteFindManyArgs
  ): Promise<Quote[]> {
    const results = await this.service.findQuotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Search])
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async searches(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: SearchFindManyArgs
  ): Promise<Search[]> {
    const results = await this.service.findSearches(parent.id, args);

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
  async selectedModifiers(
    @graphql.Parent() parent: MenuItem,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findSelectedModifiers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => ItemQuantity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async quantity(
    @graphql.Parent() parent: MenuItem
  ): Promise<ItemQuantity | null> {
    const result = await this.service.getQuantity(parent.id);

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
  async sellers(@graphql.Parent() parent: MenuItem): Promise<Seller | null> {
    const result = await this.service.getSellers(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
