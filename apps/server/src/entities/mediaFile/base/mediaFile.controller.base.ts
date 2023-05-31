
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MediaFileService } from "../mediaFile.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MediaFileCreateInput } from "./MediaFileCreateInput";
import { MediaFileWhereInput } from "./MediaFileWhereInput";
import { MediaFileWhereUniqueInput } from "./MediaFileWhereUniqueInput";
import { MediaFileFindManyArgs } from "./MediaFileFindManyArgs";
import { MediaFileUpdateInput } from "./MediaFileUpdateInput";
import { MediaFile } from "./MediaFile";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MediaFileControllerBase {
  constructor(
    protected readonly service: MediaFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MediaFile })
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: MediaFileCreateInput): Promise<MediaFile> {
    return await this.service.create({
      data: {
        ...data,

        menuItems: data.menuItems
          ? {
              connect: data.menuItems,
            }
          : undefined,

        rating: data.rating
          ? {
              connect: data.rating,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        mimeType: true,

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MediaFile] })
  @ApiNestedQuery(MediaFileFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<MediaFile[]> {
    const args = plainToClass(MediaFileFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        mimeType: true,

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MediaFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: MediaFileWhereUniqueInput
  ): Promise<MediaFile | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        menuItems: {
          select: {
            id: true,
          },
        },

        mimeType: true,

        rating: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
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
  @swagger.ApiOkResponse({ type: MediaFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: MediaFileWhereUniqueInput,
    @common.Body() data: MediaFileUpdateInput
  ): Promise<MediaFile | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          menuItems: data.menuItems
            ? {
                connect: data.menuItems,
              }
            : undefined,

          rating: data.rating
            ? {
                connect: data.rating,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          menuItems: {
            select: {
              id: true,
            },
          },

          mimeType: true,

          rating: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
  @swagger.ApiOkResponse({ type: MediaFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MediaFile",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: MediaFileWhereUniqueInput
  ): Promise<MediaFile | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          menuItems: {
            select: {
              id: true,
            },
          },

          mimeType: true,

          rating: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
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
