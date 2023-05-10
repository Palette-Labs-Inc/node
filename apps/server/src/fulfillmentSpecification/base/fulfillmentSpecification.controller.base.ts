
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FulfillmentSpecificationService } from "../fulfillmentSpecification.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FulfillmentSpecificationCreateInput } from "./FulfillmentSpecificationCreateInput";
import { FulfillmentSpecificationWhereInput } from "./FulfillmentSpecificationWhereInput";
import { FulfillmentSpecificationWhereUniqueInput } from "./FulfillmentSpecificationWhereUniqueInput";
import { FulfillmentSpecificationFindManyArgs } from "./FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecificationUpdateInput } from "./FulfillmentSpecificationUpdateInput";
import { FulfillmentSpecification } from "./FulfillmentSpecification";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { SearchFindManyArgs } from "../../search/base/SearchFindManyArgs";
import { Search } from "../../search/base/Search";
import { SearchWhereUniqueInput } from "../../search/base/SearchWhereUniqueInput";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FulfillmentSpecificationControllerBase {
  constructor(
    protected readonly service: FulfillmentSpecificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FulfillmentSpecification })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: FulfillmentSpecificationCreateInput
  ): Promise<FulfillmentSpecification> {
    return await this.service.create({
      data: {
        ...data,

        buyer: {
          connect: data.buyer,
        },

        contact: {
          connect: data.contact,
        },

        courier: data.courier
          ? {
              connect: data.courier,
            }
          : undefined,

        seller: {
          connect: data.seller,
        },

        tracking: data.tracking
          ? {
              connect: data.tracking,
            }
          : undefined,

        vehicle: data.vehicle
          ? {
              connect: data.vehicle,
            }
          : undefined,
      },
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FulfillmentSpecification] })
  @ApiNestedQuery(FulfillmentSpecificationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(
    @common.Req() request: Request
  ): Promise<FulfillmentSpecification[]> {
    const args = plainToClass(
      FulfillmentSpecificationFindManyArgs,
      request.query
    );
    return this.service.findMany({
      ...args,
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
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FulfillmentSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput
  ): Promise<FulfillmentSpecification | null> {
    const result = await this.service.findOne({
      where: params,
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
  @swagger.ApiOkResponse({ type: FulfillmentSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() data: FulfillmentSpecificationUpdateInput
  ): Promise<FulfillmentSpecification | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          buyer: {
            connect: data.buyer,
          },

          contact: {
            connect: data.contact,
          },

          courier: data.courier
            ? {
                connect: data.courier,
              }
            : undefined,

          seller: {
            connect: data.seller,
          },

          tracking: data.tracking
            ? {
                connect: data.tracking,
              }
            : undefined,

          vehicle: data.vehicle
            ? {
                connect: data.vehicle,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: FulfillmentSpecification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput
  ): Promise<FulfillmentSpecification | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        billing: {
          select: {
            id: true,
          },
        },

        cancellation: {
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

        paymentTerm: {
          select: {
            id: true,
          },
        },

        referenceOrderIds: true,
        status: true,
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

  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async connectOrders(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async disconnectOrders(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
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
  @common.Get("/:id/searches")
  @ApiNestedQuery(SearchFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Search",
    action: "read",
    possession: "any",
  })
  async findManySearches(
    @common.Req() request: Request,
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput
  ): Promise<Search[]> {
    const query = plainToClass(SearchFindManyArgs, request.query);
    const results = await this.service.findSearches(params.id, {
      ...query,
      select: {
        createdAt: true,

        fulfillmentSpecification: {
          select: {
            id: true,
          },
        },

        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        paymentTerm: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async connectSearches(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async updateSearches(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/searches")
  @nestAccessControl.UseRoles({
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async disconnectSearches(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
    @common.Body() body: SearchWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      searches: {
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
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput
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
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async connectWaypoints(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
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
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async updateWaypoints(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
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
    resource: "FulfillmentSpecification",
    action: "update",
    possession: "any",
  })
  async disconnectWaypoints(
    @common.Param() params: FulfillmentSpecificationWhereUniqueInput,
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
