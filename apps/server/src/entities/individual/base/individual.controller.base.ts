
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { IndividualService } from "../individual.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IndividualCreateInput } from "./IndividualCreateInput";
import { IndividualWhereInput } from "./IndividualWhereInput";
import { IndividualWhereUniqueInput } from "./IndividualWhereUniqueInput";
import { IndividualFindManyArgs } from "./IndividualFindManyArgs";
import { IndividualUpdateInput } from "./IndividualUpdateInput";
import { Individual } from "./Individual";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { WaypointFindManyArgs } from "../../waypoint/base/WaypointFindManyArgs";
import { Waypoint } from "../../waypoint/base/Waypoint";
import { WaypointWhereUniqueInput } from "../../waypoint/base/WaypointWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IndividualControllerBase {
  constructor(
    protected readonly service: IndividualService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Individual })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: IndividualCreateInput
  ): Promise<Individual> {
    return await this.service.create({
      data: {
        ...data,

        contact: data.contact
          ? {
              connect: data.contact,
            }
          : undefined,

        couriers: data.couriers
          ? {
              connect: data.couriers,
            }
          : undefined,

        users: data.users
          ? {
              connect: data.users,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Individual] })
  @ApiNestedQuery(IndividualFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Individual[]> {
    const args = plainToClass(IndividualFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Individual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: IndividualWhereUniqueInput
  ): Promise<Individual | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Individual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: IndividualWhereUniqueInput,
    @common.Body() data: IndividualUpdateInput
  ): Promise<Individual | null> {
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

          couriers: data.couriers
            ? {
                connect: data.couriers,
              }
            : undefined,

          users: data.users
            ? {
                connect: data.users,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Individual })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: IndividualWhereUniqueInput
  ): Promise<Individual | null> {
    try {
      return await this.service.delete({
        where: params,
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
  @common.Get("/:id/image")
  @ApiNestedQuery(ImageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  async findManyImage(
    @common.Req() request: Request,
    @common.Param() params: IndividualWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImage(params.id, {
      ...query,
      select: {
        createdAt: true,
        height: true,
        id: true,

        individuals: {
          select: {
            id: true,
          },
        },

        menuItem: {
          select: {
            id: true,
          },
        },

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async connectImage(
    @common.Param() params: IndividualWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async updateImage(
    @common.Param() params: IndividualWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/image")
  @nestAccessControl.UseRoles({
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async disconnectImage(
    @common.Param() params: IndividualWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      image: {
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
    @common.Param() params: IndividualWhereUniqueInput
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
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async connectWaypoints(
    @common.Param() params: IndividualWhereUniqueInput,
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
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async updateWaypoints(
    @common.Param() params: IndividualWhereUniqueInput,
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
    resource: "Individual",
    action: "update",
    possession: "any",
  })
  async disconnectWaypoints(
    @common.Param() params: IndividualWhereUniqueInput,
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
