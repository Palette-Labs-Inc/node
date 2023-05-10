import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MediaFileServiceBase } from "./base/mediaFile.service.base";

@Injectable()
export class MediaFileService extends MediaFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
