
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
import { CreateContactArgs } from "./CreateContactArgs";
import { UpdateContactArgs } from "./UpdateContactArgs";
import { DeleteContactArgs } from "./DeleteContactArgs";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactFindUniqueArgs } from "./ContactFindUniqueArgs";
import { Contact } from "./Contact";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { IndividualFindManyArgs } from "../../individual/base/IndividualFindManyArgs";
import { Individual } from "../../individual/base/Individual";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { ContactService } from "../contact.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Contact)
export class ContactResolverBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async _contactsMeta(
    @graphql.Args() args: ContactFindManyArgs
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
  @graphql.Query(() => [Contact])
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contacts(
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Contact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  async contact(
    @graphql.Args() args: ContactFindUniqueArgs
  ): Promise<Contact | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  async createContact(
    @graphql.Args() args: CreateContactArgs
  ): Promise<Contact> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateContact(
    @graphql.Args() args: UpdateContactArgs
  ): Promise<Contact | null> {
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

  @graphql.Mutation(() => Contact)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  async deleteContact(
    @graphql.Args() args: DeleteContactArgs
  ): Promise<Contact | null> {
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
  @graphql.ResolveField(() => [FulfillmentSpecification])
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async fulfillmentSpecifications(
    @graphql.Parent() parent: Contact,
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
  @graphql.ResolveField(() => [Individual])
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async individuals(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: IndividualFindManyArgs
  ): Promise<Individual[]> {
    const results = await this.service.findIndividuals(parent.id, args);

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
  async organizations(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    const results = await this.service.findOrganizations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Waypoint])
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async waypoints(
    @graphql.Parent() parent: Contact,
    @graphql.Args() args: WaypointFindManyArgs
  ): Promise<Waypoint[]> {
    const results = await this.service.findWaypoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
