
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
import { CreateMenuArgs } from "./CreateMenuArgs";
import { UpdateMenuArgs } from "./UpdateMenuArgs";
import { DeleteMenuArgs } from "./DeleteMenuArgs";
import { MenuFindManyArgs } from "./MenuFindManyArgs";
import { MenuFindUniqueArgs } from "./MenuFindUniqueArgs";
import { Menu } from "./Menu";
import { HourIntervalFindManyArgs } from "../../hourInterval/base/HourIntervalFindManyArgs";
import { HourInterval } from "../../hourInterval/base/HourInterval";
import { Seller } from "../../seller/base/Seller";
import { MenuService } from "../menu.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Menu)
export class MenuResolverBase {
  constructor(
    protected readonly service: MenuService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async _menusMeta(
    @graphql.Args() args: MenuFindManyArgs
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
  @graphql.Query(() => [Menu])
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async menus(@graphql.Args() args: MenuFindManyArgs): Promise<Menu[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Menu, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "own",
  })
  async menu(@graphql.Args() args: MenuFindUniqueArgs): Promise<Menu | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "create",
    possession: "any",
  })
  async createMenu(@graphql.Args() args: CreateMenuArgs): Promise<Menu> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        seller: {
          connect: args.data.seller,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "update",
    possession: "any",
  })
  async updateMenu(@graphql.Args() args: UpdateMenuArgs): Promise<Menu | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          seller: {
            connect: args.data.seller,
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

  @graphql.Mutation(() => Menu)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "delete",
    possession: "any",
  })
  async deleteMenu(@graphql.Args() args: DeleteMenuArgs): Promise<Menu | null> {
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
  @graphql.ResolveField(() => [HourInterval])
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "any",
  })
  async hourIntervals(
    @graphql.Parent() parent: Menu,
    @graphql.Args() args: HourIntervalFindManyArgs
  ): Promise<HourInterval[]> {
    const results = await this.service.findHourIntervals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Seller, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Seller",
    action: "read",
    possession: "any",
  })
  async seller(@graphql.Parent() parent: Menu): Promise<Seller | null> {
    const result = await this.service.getSeller(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
