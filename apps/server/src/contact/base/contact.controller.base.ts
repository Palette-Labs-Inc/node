
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ContactService } from "../contact.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContactCreateInput } from "./ContactCreateInput";
import { ContactWhereInput } from "./ContactWhereInput";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactUpdateInput } from "./ContactUpdateInput";
import { Contact } from "./Contact";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { IndividualFindManyArgs } from "../../individual/base/IndividualFindManyArgs";
import { Individual } from "../../individual/base/Individual";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContactControllerBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contact })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ContactCreateInput): Promise<Contact> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Contact] })
  @ApiNestedQuery(ContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Contact[]> {
    const args = plainToClass(ContactFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() data: ContactUpdateInput
  ): Promise<Contact | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/fulfillmentSpecifications")
  @ApiNestedQuery(FulfillmentSpecificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  async findManyFulfillmentSpecifications(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<FulfillmentSpecification[]> {
    const query = plainToClass(
      FulfillmentSpecificationFindManyArgs,
      request.query
    );
    const results = await this.service.findFulfillmentSpecifications(
      params.id,
      {
        ...query,
        select: {
          buyer: {
            select: {
              id: true,
            },
          },

          contact: {
            select: {
              id: true,
            },
          },

          courier: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          fulfillmentModes: true,
          id: true,
          isRateable: true,
          rating: true,

          seller: {
            select: {
              id: true,
            },
          },

          status: true,

          tracking: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          updatedBy: true,

          vehicle: {
            select: {
              id: true,
            },
          },
        },
      }
    );
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectFulfillmentSpecifications(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateFulfillmentSpecifications(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/fulfillmentSpecifications")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectFulfillmentSpecifications(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: FulfillmentSpecificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      fulfillmentSpecifications: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/individuals")
  @ApiNestedQuery(IndividualFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async findManyIndividuals(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Individual[]> {
    const query = plainToClass(IndividualFindManyArgs, request.query);
    const results = await this.service.findIndividuals(params.id, {
      ...query,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        couriers: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateOfBirth: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        middleName: true,
        updatedAt: true,
        username: true,

        users: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/individuals")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectIndividuals(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individuals: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/individuals")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateIndividuals(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individuals: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/individuals")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectIndividuals(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individuals: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/organizations")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findManyOrganizations(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganizations(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectOrganizations(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateOrganizations(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organizations")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectOrganizations(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organizations: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/waypoints")
  @ApiNestedQuery(WaypointFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  async findManyWaypoints(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Waypoint[]> {
    const query = plainToClass(WaypointFindManyArgs, request.query);
    const results = await this.service.findWaypoints(params.id, {
      ...query,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        location: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        waypointCode: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/waypoints")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectWaypoints(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: WaypointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waypoints: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/waypoints")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateWaypoints(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: WaypointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waypoints: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/waypoints")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectWaypoints(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: WaypointWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      waypoints: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
