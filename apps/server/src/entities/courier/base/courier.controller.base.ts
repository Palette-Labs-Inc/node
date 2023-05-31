
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../../prisma.util";
import * as errors from "../../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../../auth/defaultAuth.guard";
import { CourierService } from "../courier.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CourierCreateInput } from "./CourierCreateInput";
import { CourierWhereInput } from "./CourierWhereInput";
import { CourierWhereUniqueInput } from "./CourierWhereUniqueInput";
import { CourierFindManyArgs } from "./CourierFindManyArgs";
import { CourierUpdateInput } from "./CourierUpdateInput";
import { Courier } from "./Courier";
import { FulfillmentSpecificationFindManyArgs } from "../../fulfillmentSpecification/base/FulfillmentSpecificationFindManyArgs";
import { FulfillmentSpecification } from "../../fulfillmentSpecification/base/FulfillmentSpecification";
import { FulfillmentSpecificationWhereUniqueInput } from "../../fulfillmentSpecification/base/FulfillmentSpecificationWhereUniqueInput";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationWhereUniqueInput } from "../../organization/base/OrganizationWhereUniqueInput";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CourierControllerBase {
  constructor(
    protected readonly service: CourierService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Courier })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: CourierCreateInput): Promise<Courier> {
    return await this.service.create({
      data: {
        ...data,

        inidividual: data.inidividual
          ? {
              connect: data.inidividual,
            }
          : undefined,

        users: {
          connect: data.users,
        },
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Courier] })
  @ApiNestedQuery(CourierFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Courier[]> {
    const args = plainToClass(CourierFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    const result = await this.service.findOne({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() data: CourierUpdateInput
  ): Promise<Courier | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          inidividual: data.inidividual
            ? {
                connect: data.inidividual,
              }
            : undefined,

          users: {
            connect: data.users,
          },
        },
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
  @swagger.ApiOkResponse({ type: Courier })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Courier | null> {
    try {
      return await this.service.delete({
        where: params,
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
    @common.Param() params: CourierWhereUniqueInput
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async connectFulfillmentSpecifications(
    @common.Param() params: CourierWhereUniqueInput,
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateFulfillmentSpecifications(
    @common.Param() params: CourierWhereUniqueInput,
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
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async disconnectFulfillmentSpecifications(
    @common.Param() params: CourierWhereUniqueInput,
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
  @common.Get("/:id/organization")
  @ApiNestedQuery(OrganizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async findManyOrganization(
    @common.Req() request: Request,
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Organization[]> {
    const query = plainToClass(OrganizationFindManyArgs, request.query);
    const results = await this.service.findOrganization(params.id, {
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

  @common.Post("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async connectOrganization(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async disconnectOrganization(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      organization: {
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
  @common.Get("/:id/ratings")
  @ApiNestedQuery(RatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async findManyRatings(
    @common.Req() request: Request,
    @common.Param() params: CourierWhereUniqueInput
  ): Promise<Rating[]> {
    const query = plainToClass(RatingFindManyArgs, request.query);
    const results = await this.service.findRatings(params.id, {
      ...query,
      select: {
        courier: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        entity: true,
        entityId: true,
        id: true,

        seller: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        value: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async connectRatings(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async updateRatings(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Courier",
    action: "update",
    possession: "any",
  })
  async disconnectRatings(
    @common.Param() params: CourierWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
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
