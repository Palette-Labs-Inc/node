
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
import { CreateItemQuantityArgs } from "./CreateItemQuantityArgs";
import { UpdateItemQuantityArgs } from "./UpdateItemQuantityArgs";
import { DeleteItemQuantityArgs } from "./DeleteItemQuantityArgs";
import { ItemQuantityFindManyArgs } from "./ItemQuantityFindManyArgs";
import { ItemQuantityFindUniqueArgs } from "./ItemQuantityFindUniqueArgs";
import { ItemQuantity } from "./ItemQuantity";
import { Scalar } from "../../scalar/base/Scalar";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { ItemQuantityService } from "../itemQuantity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ItemQuantity)
export class ItemQuantityResolverBase {
  constructor(
    protected readonly service: ItemQuantityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async _itemQuantitiesMeta(
    @graphql.Args() args: ItemQuantityFindManyArgs
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
  @graphql.Query(() => [ItemQuantity])
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "any",
  })
  async itemQuantities(
    @graphql.Args() args: ItemQuantityFindManyArgs
  ): Promise<ItemQuantity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ItemQuantity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "read",
    possession: "own",
  })
  async itemQuantity(
    @graphql.Args() args: ItemQuantityFindUniqueArgs
  ): Promise<ItemQuantity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemQuantity)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "create",
    possession: "any",
  })
  async createItemQuantity(
    @graphql.Args() args: CreateItemQuantityArgs
  ): Promise<ItemQuantity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        allocatedMeasure: {
          connect: args.data.allocatedMeasure,
        },

        availableMeasure: {
          connect: args.data.availableMeasure,
        },

        maximumPurchasableMeasure: {
          connect: args.data.maximumPurchasableMeasure,
        },

        menuItem: args.data.menuItem
          ? {
              connect: args.data.menuItem,
            }
          : undefined,

        minimumPurchasableMeasure: args.data.minimumPurchasableMeasure
          ? {
              connect: args.data.minimumPurchasableMeasure,
            }
          : undefined,

        selectedMeasure: args.data.selectedMeasure
          ? {
              connect: args.data.selectedMeasure,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ItemQuantity)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "update",
    possession: "any",
  })
  async updateItemQuantity(
    @graphql.Args() args: UpdateItemQuantityArgs
  ): Promise<ItemQuantity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          allocatedMeasure: {
            connect: args.data.allocatedMeasure,
          },

          availableMeasure: {
            connect: args.data.availableMeasure,
          },

          maximumPurchasableMeasure: {
            connect: args.data.maximumPurchasableMeasure,
          },

          menuItem: args.data.menuItem
            ? {
                connect: args.data.menuItem,
              }
            : undefined,

          minimumPurchasableMeasure: args.data.minimumPurchasableMeasure
            ? {
                connect: args.data.minimumPurchasableMeasure,
              }
            : undefined,

          selectedMeasure: args.data.selectedMeasure
            ? {
                connect: args.data.selectedMeasure,
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

  @graphql.Mutation(() => ItemQuantity)
  @nestAccessControl.UseRoles({
    resource: "ItemQuantity",
    action: "delete",
    possession: "any",
  })
  async deleteItemQuantity(
    @graphql.Args() args: DeleteItemQuantityArgs
  ): Promise<ItemQuantity | null> {
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
  @graphql.ResolveField(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async allocatedMeasure(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<Scalar | null> {
    const result = await this.service.getAllocatedMeasure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async availableMeasure(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<Scalar | null> {
    const result = await this.service.getAvailableMeasure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async maximumPurchasableMeasure(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<Scalar | null> {
    const result = await this.service.getMaximumPurchasableMeasure(parent.id);

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
  async menuItem(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<MenuItem | null> {
    const result = await this.service.getMenuItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async minimumPurchasableMeasure(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<Scalar | null> {
    const result = await this.service.getMinimumPurchasableMeasure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Scalar, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Scalar",
    action: "read",
    possession: "any",
  })
  async selectedMeasure(
    @graphql.Parent() parent: ItemQuantity
  ): Promise<Scalar | null> {
    const result = await this.service.getSelectedMeasure(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
