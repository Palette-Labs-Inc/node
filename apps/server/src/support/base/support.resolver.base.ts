
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
import { CreateSupportArgs } from "./CreateSupportArgs";
import { UpdateSupportArgs } from "./UpdateSupportArgs";
import { DeleteSupportArgs } from "./DeleteSupportArgs";
import { SupportFindManyArgs } from "./SupportFindManyArgs";
import { SupportFindUniqueArgs } from "./SupportFindUniqueArgs";
import { Support } from "./Support";
import { SupportService } from "../support.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Support)
export class SupportResolverBase {
  constructor(
    protected readonly service: SupportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async _supportsMeta(
    @graphql.Args() args: SupportFindManyArgs
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
  @graphql.Query(() => [Support])
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async supports(
    @graphql.Args() args: SupportFindManyArgs
  ): Promise<Support[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Support, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "own",
  })
  async support(
    @graphql.Args() args: SupportFindUniqueArgs
  ): Promise<Support | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "create",
    possession: "any",
  })
  async createSupport(
    @graphql.Args() args: CreateSupportArgs
  ): Promise<Support> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "update",
    possession: "any",
  })
  async updateSupport(
    @graphql.Args() args: UpdateSupportArgs
  ): Promise<Support | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "delete",
    possession: "any",
  })
  async deleteSupport(
    @graphql.Args() args: DeleteSupportArgs
  ): Promise<Support | null> {
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
}
