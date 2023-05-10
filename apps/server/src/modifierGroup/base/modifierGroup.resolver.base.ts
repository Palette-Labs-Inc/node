
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
import { CreateModifierGroupArgs } from "./CreateModifierGroupArgs";
import { UpdateModifierGroupArgs } from "./UpdateModifierGroupArgs";
import { DeleteModifierGroupArgs } from "./DeleteModifierGroupArgs";
import { ModifierGroupFindManyArgs } from "./ModifierGroupFindManyArgs";
import { ModifierGroupFindUniqueArgs } from "./ModifierGroupFindUniqueArgs";
import { ModifierGroup } from "./ModifierGroup";
import { Seller } from "../../seller/base/Seller";
import { ModifierGroupService } from "../modifierGroup.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ModifierGroup)
export class ModifierGroupResolverBase {
  constructor(
    protected readonly service: ModifierGroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "any",
  })
  async _modifierGroupsMeta(
    @graphql.Args() args: ModifierGroupFindManyArgs
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
  @graphql.Query(() => [ModifierGroup])
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "any",
  })
  async modifierGroups(
    @graphql.Args() args: ModifierGroupFindManyArgs
  ): Promise<ModifierGroup[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ModifierGroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "read",
    possession: "own",
  })
  async modifierGroup(
    @graphql.Args() args: ModifierGroupFindUniqueArgs
  ): Promise<ModifierGroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ModifierGroup)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "create",
    possession: "any",
  })
  async createModifierGroup(
    @graphql.Args() args: CreateModifierGroupArgs
  ): Promise<ModifierGroup> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        sellerModifierGroups: args.data.sellerModifierGroups
          ? {
              connect: args.data.sellerModifierGroups,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ModifierGroup)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "update",
    possession: "any",
  })
  async updateModifierGroup(
    @graphql.Args() args: UpdateModifierGroupArgs
  ): Promise<ModifierGroup | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          sellerModifierGroups: args.data.sellerModifierGroups
            ? {
                connect: args.data.sellerModifierGroups,
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

  @graphql.Mutation(() => ModifierGroup)
  @nestAccessControl.UseRoles({
    resource: "ModifierGroup",
    action: "delete",
    possession: "any",
  })
  async deleteModifierGroup(
    @graphql.Args() args: DeleteModifierGroupArgs
  ): Promise<ModifierGroup | null> {
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
  @graphql.ResolveField(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async sellerModifierGroups(
    @graphql.Parent() parent: ModifierGroup
  ): Promise<Seller | null> {
    const result = await this.service.getSellerModifierGroups(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
