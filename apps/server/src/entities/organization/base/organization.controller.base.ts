
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { OrganizationService } from "../organization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { Organization } from "./Organization";
import { BillingFindManyArgs } from "../../billing/base/BillingFindManyArgs";
import { Billing } from "../../billing/base/Billing";
import { BillingWhereUniqueInput } from "../../billing/base/BillingWhereUniqueInput";
import { ContactFindManyArgs } from "../../contact/base/ContactFindManyArgs";
import { Contact } from "../../contact/base/Contact";
import { ContactWhereUniqueInput } from "../../contact/base/ContactWhereUniqueInput";
import { CourierFindManyArgs } from "../../courier/base/CourierFindManyArgs";
import { Courier } from "../../courier/base/Courier";
import { CourierWhereUniqueInput } from "../../courier/base/CourierWhereUniqueInput";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";
import { MenuItemFindManyArgs } from "../../menuItem/base/MenuItemFindManyArgs";
import { MenuItem } from "../../menuItem/base/MenuItem";
import { MenuItemWhereUniqueInput } from "../../menuItem/base/MenuItemWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organization })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: OrganizationCreateInput
  ): Promise<Organization> {
    return await this.service.create({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organization] })
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() data: OrganizationUpdateInput
  ): Promise<Organization | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
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
  @common.Get("/:id/billings")
  @ApiNestedQuery(BillingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Billing",
    action: "read",
    possession: "any",
  })
  async findManyBillings(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Billing[]> {
    const query = plainToClass(BillingFindManyArgs, request.query);
    const results = await this.service.findBillings(params.id, {
      ...query,
      select: {
        address: true,
        city: true,
        country: true,
        createdAt: true,
        email: true,
        id: true,
        name: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        state: true,
        taxId: true,
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

  @common.Post("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectBillings(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateBillings(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/billings")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectBillings(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: BillingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      billings: {
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
  @common.Get("/:id/contact")
  @ApiNestedQuery(ContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async findManyContact(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Contact[]> {
    const query = plainToClass(ContactFindManyArgs, request.query);
    const results = await this.service.findContact(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        id: true,
        phone: true,
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

  @common.Post("/:id/contact")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectContact(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contact: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/contact")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateContact(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contact: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/contact")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectContact(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: ContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      contact: {
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
  @common.Get("/:id/couriers")
  @ApiNestedQuery(CourierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  async findManyCouriers(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Courier[]> {
    const query = plainToClass(CourierFindManyArgs, request.query);
    const results = await this.service.findCouriers(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        inidividual: {
          select: {
            id: true,
          },
        },

        rating: true,
        updatedAt: true,

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

  @common.Post("/:id/couriers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectCouriers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/couriers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateCouriers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/couriers")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectCouriers(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: CourierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      couriers: {
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
  @common.Get("/:id/location")
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async findManyLocation(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Location[]> {
    const query = plainToClass(LocationFindManyArgs, request.query);
    const results = await this.service.findLocation(params.id, {
      ...query,
      select: {
        address: true,
        areaCode: true,
        city: true,
        coordinate: true,
        country: true,
        createdAt: true,
        id: true,
        mapUrl: true,

        node: {
          select: {
            id: true,
          },
        },

        organizations: {
          select: {
            id: true,
          },
        },

        radius: true,

        seller: {
          select: {
            id: true,
          },
        },

        state: true,

        trackings: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        waypoints: {
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

  @common.Post("/:id/location")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectLocation(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      location: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/location")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateLocation(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      location: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/location")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectLocation(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: LocationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      location: {
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
  @common.Get("/:id/menuItems")
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  async findManyMenuItems(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<MenuItem[]> {
    const query = plainToClass(MenuItemFindManyArgs, request.query);
    const results = await this.service.findMenuItems(params.id, {
      ...query,
      select: {
        createdAt: true,
        currencyCode: true,
        fulfillmentModes: true,
        id: true,
        isRateable: true,
        locationIDs: true,
        modifierGroupIDs: true,
        paymentModes: true,
        price: true,

        quantity: {
          select: {
            id: true,
          },
        },

        rating: true,

        sellers: {
          select: {
            id: true,
          },
        },

        timeToLive: true,
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

  @common.Post("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async connectMenuItems(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateMenuItems(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menuItems")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async disconnectMenuItems(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: MenuItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menuItems: {
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
