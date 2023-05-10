
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
import { CreateOrganizationArgs } from "./CreateOrganizationArgs";
import { UpdateOrganizationArgs } from "./UpdateOrganizationArgs";
import { DeleteOrganizationArgs } from "./DeleteOrganizationArgs";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationFindUniqueArgs } from "./OrganizationFindUniqueArgs";
import { Organization } from "./Organization";
import { BillingFindManyArgs } from "../../billing/base/BillingFindManyArgs";
import { Billing } from "../../billing/base/Billing";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { OrganizationService } from "../organization.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Organization)
export class OrganizationResolverBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async _organizationsMeta(
    @graphql.Args() args: OrganizationFindManyArgs
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
  @graphql.Query(() => [Organization])
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organizations(
    @graphql.Args() args: OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  async organization(
    @graphql.Args() args: OrganizationFindUniqueArgs
  ): Promise<Organization | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  async createOrganization(
    @graphql.Args() args: CreateOrganizationArgs
  ): Promise<Organization> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @graphql.Args() args: UpdateOrganizationArgs
  ): Promise<Organization | null> {
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

  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  async deleteOrganization(
    @graphql.Args() args: DeleteOrganizationArgs
  ): Promise<Organization | null> {
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
  @graphql.ResolveField(() => [Billing])
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async billings(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: BillingFindManyArgs
  ): Promise<Billing[]> {
    const results = await this.service.findBillings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Contact])
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async contact(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: ContactFindManyArgs
  ): Promise<Contact[]> {
    const results = await this.service.findContact(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Courier])
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async couriers(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: CourierFindManyArgs
  ): Promise<Courier[]> {
    const results = await this.service.findCouriers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Location])
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async location(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: LocationFindManyArgs
  ): Promise<Location[]> {
    const results = await this.service.findLocation(parent.id, args);

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
  async menuItems(
    @graphql.Parent() parent: Organization,
    @graphql.Args() args: MenuItemFindManyArgs
  ): Promise<MenuItem[]> {
    const results = await this.service.findMenuItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
