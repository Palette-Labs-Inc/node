import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HourIntervalServiceBase } from "./base/hourInterval.service.base";

@Injectable()
export class HourIntervalService extends HourIntervalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
