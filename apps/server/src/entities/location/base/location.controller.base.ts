
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LocationService } from "../location.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LocationCreateInput } from "./LocationCreateInput";
import { LocationWhereInput } from "./LocationWhereInput";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationUpdateInput } from "./LocationUpdateInput";
import { Location } from "./Location";
import { ConditionFindManyArgs } from "../../condition/base/ConditionFindManyArgs";
import { Condition } from "../../condition/base/Condition";
import { ConditionWhereUniqueInput } from "../../condition/base/ConditionWhereUniqueInput";
import { PromotionFindManyArgs } from "../../promotion/base/PromotionFindManyArgs";
import { Promotion } from "../../promotion/base/Promotion";
import { PromotionWhereUniqueInput } from "../../promotion/base/PromotionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LocationControllerBase {
  constructor(
    protected readonly service: LocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Location })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: LocationCreateInput): Promise<Location> {
    return await this.service.create({
      data: {
        ...data,

        node: data.node
          ? {
              connect: data.node,
            }
          : undefined,

        organizations: data.organizations
          ? {
              connect: data.organizations,
            }
          : undefined,

        seller: data.seller
          ? {
              connect: data.seller,
            }
          : undefined,

        trackings: data.trackings
          ? {
              connect: data.trackings,
            }
          : undefined,

        waypoints: data.waypoints
          ? {
              connect: data.waypoints,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Location] })
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Location[]> {
    const args = plainToClass(LocationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() data: LocationUpdateInput
  ): Promise<Location | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          node: data.node
            ? {
                connect: data.node,
              }
            : undefined,

          organizations: data.organizations
            ? {
                connect: data.organizations,
              }
            : undefined,

          seller: data.seller
            ? {
                connect: data.seller,
              }
            : undefined,

          trackings: data.trackings
            ? {
                connect: data.trackings,
              }
            : undefined,

          waypoints: data.waypoints
            ? {
                connect: data.waypoints,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/conditions")
  @ApiNestedQuery(ConditionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Condition",
    action: "read",
    possession: "any",
  })
  async findManyConditions(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Condition[]> {
    const query = plainToClass(ConditionFindManyArgs, request.query);
    const results = await this.service.findConditions(params.id, {
      ...query,
      select: {
        bsnId: true,
        bsnUrl: true,
        createdAt: true,
        csnId: true,
        csnUrl: true,
        id: true,
        industryCode: true,

        location: {
          select: {
            id: true,
          },
        },

        messageId: true,
        method: true,
        publicKey: true,
        ssnId: true,
        ssnUrl: true,
        timeToLive: true,
        transactionId: true,
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

  @common.Post("/:id/conditions")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async connectConditions(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: ConditionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conditions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/conditions")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async updateConditions(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: ConditionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conditions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/conditions")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async disconnectConditions(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: ConditionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      conditions: {
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
  @common.Get("/:id/promotion")
  @ApiNestedQuery(PromotionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Promotion",
    action: "read",
    possession: "any",
  })
  async findManyPromotion(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Promotion[]> {
    const query = plainToClass(PromotionFindManyArgs, request.query);
    const results = await this.service.findPromotion(params.id, {
      ...query,
      select: {
        amount: true,

        bazaar: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        expirationDate: true,
        id: true,
        maximumPurchase: true,
        minimumPurchase: true,
        name: true,
        percentage: true,

        search: {
          select: {
            id: true,
          },
        },

        seller: {
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

  @common.Post("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async connectPromotion(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async updatePromotion(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/promotion")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async disconnectPromotion(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: PromotionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      promotion: {
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
