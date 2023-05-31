
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
import { CreateHourIntervalArgs } from "./CreateHourIntervalArgs";
import { UpdateHourIntervalArgs } from "./UpdateHourIntervalArgs";
import { DeleteHourIntervalArgs } from "./DeleteHourIntervalArgs";
import { HourIntervalFindManyArgs } from "./HourIntervalFindManyArgs";
import { HourIntervalFindUniqueArgs } from "./HourIntervalFindUniqueArgs";
import { HourInterval } from "./HourInterval";
import { Menu } from "../../menu/base/Menu";
import { HourIntervalService } from "../hourInterval.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HourInterval)
export class HourIntervalResolverBase {
  constructor(
    protected readonly service: HourIntervalService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "any",
  })
  async _hourIntervalsMeta(
    @graphql.Args() args: HourIntervalFindManyArgs
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
  @graphql.Query(() => [HourInterval])
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "any",
  })
  async hourIntervals(
    @graphql.Args() args: HourIntervalFindManyArgs
  ): Promise<HourInterval[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => HourInterval, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "read",
    possession: "own",
  })
  async hourInterval(
    @graphql.Args() args: HourIntervalFindUniqueArgs
  ): Promise<HourInterval | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HourInterval)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "create",
    possession: "any",
  })
  async createHourInterval(
    @graphql.Args() args: CreateHourIntervalArgs
  ): Promise<HourInterval> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        menus: args.data.menus
          ? {
              connect: args.data.menus,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => HourInterval)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "update",
    possession: "any",
  })
  async updateHourInterval(
    @graphql.Args() args: UpdateHourIntervalArgs
  ): Promise<HourInterval | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          menus: args.data.menus
            ? {
                connect: args.data.menus,
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

  @graphql.Mutation(() => HourInterval)
  @nestAccessControl.UseRoles({
    resource: "HourInterval",
    action: "delete",
    possession: "any",
  })
  async deleteHourInterval(
    @graphql.Args() args: DeleteHourIntervalArgs
  ): Promise<HourInterval | null> {
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
  @graphql.ResolveField(() => Menu, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async menus(@graphql.Parent() parent: HourInterval): Promise<Menu | null> {
    const result = await this.service.getMenus(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
