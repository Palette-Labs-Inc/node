
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
import { CreateConditionArgs } from "./CreateConditionArgs";
import { UpdateConditionArgs } from "./UpdateConditionArgs";
import { DeleteConditionArgs } from "./DeleteConditionArgs";
import { ConditionFindManyArgs } from "./ConditionFindManyArgs";
import { ConditionFindUniqueArgs } from "./ConditionFindUniqueArgs";
import { Condition } from "./Condition";
import { Location } from "../../location/base/Location";
import { ConditionService } from "../condition.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Condition)
export class ConditionResolverBase {
  constructor(
    protected readonly service: ConditionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "any",
  })
  async _conditionsMeta(
    @graphql.Args() args: ConditionFindManyArgs
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
  @graphql.Query(() => [Condition])
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "any",
  })
  async conditions(
    @graphql.Args() args: ConditionFindManyArgs
  ): Promise<Condition[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Condition, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "own",
  })
  async condition(
    @graphql.Args() args: ConditionFindUniqueArgs
  ): Promise<Condition | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Condition)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "create",
    possession: "any",
  })
  async createCondition(
    @graphql.Args() args: CreateConditionArgs
  ): Promise<Condition> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        location: {
          connect: args.data.location,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Condition)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "update",
    possession: "any",
  })
  async updateCondition(
    @graphql.Args() args: UpdateConditionArgs
  ): Promise<Condition | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          location: {
            connect: args.data.location,
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

  @graphql.Mutation(() => Condition)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "delete",
    possession: "any",
  })
  async deleteCondition(
    @graphql.Args() args: DeleteConditionArgs
  ): Promise<Condition | null> {
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
  @graphql.ResolveField(() => Location, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async location(
    @graphql.Parent() parent: Condition
  ): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
