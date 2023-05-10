
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { WaypointService } from "../waypoint.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WaypointCreateInput } from "./WaypointCreateInput";
import { WaypointWhereInput } from "./WaypointWhereInput";
import { WaypointWhereUniqueInput } from "./WaypointWhereUniqueInput";
import { WaypointFindManyArgs } from "./WaypointFindManyArgs";
import { WaypointUpdateInput } from "./WaypointUpdateInput";
import { Waypoint } from "./Waypoint";
import { IndividualFindManyArgs } from "../../individual/base/IndividualFindManyArgs";
import { Individual } from "../../individual/base/Individual";
import { IndividualWhereUniqueInput } from "../../individual/base/IndividualWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WaypointControllerBase {
  constructor(
    protected readonly service: WaypointService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Waypoint })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: WaypointCreateInput): Promise<Waypoint> {
    return await this.service.create({
      data: {
        ...data,

        contact: data.contact
          ? {
              connect: data.contact,
            }
          : undefined,

        fulfillmentSpecification: data.fulfillmentSpecification
          ? {
              connect: data.fulfillmentSpecification,
            }
          : undefined,

        location: data.location
          ? {
              connect: data.location,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Waypoint] })
  @ApiNestedQuery(WaypointFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Waypoint[]> {
    const args = plainToClass(WaypointFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: WaypointWhereUniqueInput
  ): Promise<Waypoint | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: WaypointWhereUniqueInput,
    @common.Body() data: WaypointUpdateInput
  ): Promise<Waypoint | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contact: data.contact
            ? {
                connect: data.contact,
              }
            : undefined,

          fulfillmentSpecification: data.fulfillmentSpecification
            ? {
                connect: data.fulfillmentSpecification,
              }
            : undefined,

          location: data.location
            ? {
                connect: data.location,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Waypoint })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: WaypointWhereUniqueInput
  ): Promise<Waypoint | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/individual")
  @ApiNestedQuery(IndividualFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  async findManyIndividual(
    @common.Req() request: Request,
    @common.Param() params: WaypointWhereUniqueInput
  ): Promise<Individual[]> {
    const query = plainToClass(IndividualFindManyArgs, request.query);
    const results = await this.service.findIndividual(params.id, {
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

  @common.Post("/:id/individual")
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "update",
    possession: "any",
  })
  async connectIndividual(
    @common.Param() params: WaypointWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individual: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/individual")
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "update",
    possession: "any",
  })
  async updateIndividual(
    @common.Param() params: WaypointWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individual: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/individual")
  @nestAccessControl.UseRoles({
    resource: "Waypoint",
    action: "update",
    possession: "any",
  })
  async disconnectIndividual(
    @common.Param() params: WaypointWhereUniqueInput,
    @common.Body() body: IndividualWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      individual: {
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
