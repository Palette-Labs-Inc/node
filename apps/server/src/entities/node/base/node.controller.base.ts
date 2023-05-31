
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { NodeService } from "../node.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NodeCreateInput } from "./NodeCreateInput";
import { NodeWhereInput } from "./NodeWhereInput";
import { NodeWhereUniqueInput } from "./NodeWhereUniqueInput";
import { NodeFindManyArgs } from "./NodeFindManyArgs";
import { NodeUpdateInput } from "./NodeUpdateInput";
import { Node } from "./Node";
import { LocationFindManyArgs } from "../../location/base/LocationFindManyArgs";
import { Location } from "../../location/base/Location";
import { LocationWhereUniqueInput } from "../../location/base/LocationWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NodeControllerBase {
  constructor(
    protected readonly service: NodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Node })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: NodeCreateInput): Promise<Node> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        hostUrl: true,
        id: true,
        industryCode: true,
        operatorType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Node] })
  @ApiNestedQuery(NodeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Node[]> {
    const args = plainToClass(NodeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        hostUrl: true,
        id: true,
        industryCode: true,
        operatorType: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: NodeWhereUniqueInput
  ): Promise<Node | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        hostUrl: true,
        id: true,
        industryCode: true,
        operatorType: true,
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
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: NodeWhereUniqueInput,
    @common.Body() data: NodeUpdateInput
  ): Promise<Node | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hostUrl: true,
          id: true,
          industryCode: true,
          operatorType: true,
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
  @swagger.ApiOkResponse({ type: Node })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Node",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: NodeWhereUniqueInput
  ): Promise<Node | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          hostUrl: true,
          id: true,
          industryCode: true,
          operatorType: true,
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
  @common.Get("/:id/location")
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  async findManyLocation(
    @common.Req() request: Request,
    @common.Param() params: NodeWhereUniqueInput
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
    resource: "Node",
    action: "update",
    possession: "any",
  })
  async connectLocation(
    @common.Param() params: NodeWhereUniqueInput,
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
    resource: "Node",
    action: "update",
    possession: "any",
  })
  async updateLocation(
    @common.Param() params: NodeWhereUniqueInput,
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
    resource: "Node",
    action: "update",
    possession: "any",
  })
  async disconnectLocation(
    @common.Param() params: NodeWhereUniqueInput,
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
}
