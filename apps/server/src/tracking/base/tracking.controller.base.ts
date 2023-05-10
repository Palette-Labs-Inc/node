
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TrackingService } from "../tracking.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TrackingCreateInput } from "./TrackingCreateInput";
import { TrackingWhereInput } from "./TrackingWhereInput";
import { TrackingWhereUniqueInput } from "./TrackingWhereUniqueInput";
import { TrackingFindManyArgs } from "./TrackingFindManyArgs";
import { TrackingUpdateInput } from "./TrackingUpdateInput";
import { Tracking } from "./Tracking";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TrackingControllerBase {
  constructor(
    protected readonly service: TrackingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tracking })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TrackingCreateInput): Promise<Tracking> {
    return await this.service.create({
      data: {
        ...data,

        fulfillmentSpecifications: data.fulfillmentSpecifications
          ? {
              connect: data.fulfillmentSpecifications,
            }
          : undefined,

        location: data.location
          ? {
              connect: data.location,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        fulfillmentSpecifications: {
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

        status: true,
        trackingUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Tracking] })
  @ApiNestedQuery(TrackingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Tracking[]> {
    const args = plainToClass(TrackingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        fulfillmentSpecifications: {
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

        status: true,
        trackingUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TrackingWhereUniqueInput
  ): Promise<Tracking | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        fulfillmentSpecifications: {
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

        status: true,
        trackingUrl: true,
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
  @swagger.ApiOkResponse({ type: Tracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TrackingWhereUniqueInput,
    @common.Body() data: TrackingUpdateInput
  ): Promise<Tracking | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          fulfillmentSpecifications: data.fulfillmentSpecifications
            ? {
                connect: data.fulfillmentSpecifications,
              }
            : undefined,

          location: data.location
            ? {
                connect: data.location,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          fulfillmentSpecifications: {
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

          status: true,
          trackingUrl: true,
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
  @swagger.ApiOkResponse({ type: Tracking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Tracking",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TrackingWhereUniqueInput
  ): Promise<Tracking | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          fulfillmentSpecifications: {
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

          status: true,
          trackingUrl: true,
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
}
