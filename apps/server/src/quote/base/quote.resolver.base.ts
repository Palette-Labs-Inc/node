
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
import { CreateQuoteArgs } from "./CreateQuoteArgs";
import { UpdateQuoteArgs } from "./UpdateQuoteArgs";
import { DeleteQuoteArgs } from "./DeleteQuoteArgs";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteFindUniqueArgs } from "./QuoteFindUniqueArgs";
import { Quote } from "./Quote";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { QuoteService } from "../quote.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Quote)
export class QuoteResolverBase {
  constructor(
    protected readonly service: QuoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async _quotesMeta(
    @graphql.Args() args: QuoteFindManyArgs
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
  @graphql.Query(() => [Quote])
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async quotes(@graphql.Args() args: QuoteFindManyArgs): Promise<Quote[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Quote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "own",
  })
  async quote(
    @graphql.Args() args: QuoteFindUniqueArgs
  ): Promise<Quote | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "create",
    possession: "any",
  })
  async createQuote(@graphql.Args() args: CreateQuoteArgs): Promise<Quote> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async updateQuote(
    @graphql.Args() args: UpdateQuoteArgs
  ): Promise<Quote | null> {
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

  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "delete",
    possession: "any",
  })
  async deleteQuote(
    @graphql.Args() args: DeleteQuoteArgs
  ): Promise<Quote | null> {
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
  @graphql.ResolveField(() => [MenuItem])
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async menuItems(
    @graphql.Parent() parent: Quote,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findMenuItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
