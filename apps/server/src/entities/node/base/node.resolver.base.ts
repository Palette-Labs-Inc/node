
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
import { CreateNodeArgs } from "./CreateNodeArgs";
import { UpdateNodeArgs } from "./UpdateNodeArgs";
import { DeleteNodeArgs } from "./DeleteNodeArgs";
import { NodeFindManyArgs } from "./NodeFindManyArgs";
import { NodeFindUniqueArgs } from "./NodeFindUniqueArgs";
import { Node } from "./Node";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { NodeService } from "../node.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Node)
export class NodeResolverBase {
  constructor(
    protected readonly service: NodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  async _nodesMeta(
    @graphql.Args() args: NodeFindManyArgs
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
  @graphql.Query(() => [Node])
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  async nodes(@graphql.Args() args: NodeFindManyArgs): Promise<Node[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Node, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "own",
  })
  async node(@graphql.Args() args: NodeFindUniqueArgs): Promise<Node | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Node)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "create",
    possession: "any",
  })
  async createNode(@graphql.Args() args: CreateNodeArgs): Promise<Node> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Node)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "update",
    possession: "any",
  })
  async updateNode(@graphql.Args() args: UpdateNodeArgs): Promise<Node | null> {
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

  @graphql.Mutation(() => Node)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "delete",
    possession: "any",
  })
  async deleteNode(@graphql.Args() args: DeleteNodeArgs): Promise<Node | null> {
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
  @graphql.ResolveField(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async location(
    @graphql.Parent() parent: Node,
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    const results = await this.service.findLocation(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
