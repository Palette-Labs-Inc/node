import { Module } from "@nestjs/common";
import { HourIntervalModuleBase } from "./base/hourInterval.module.base";
import { HourIntervalService } from "./hourInterval.service";
import { HourIntervalController } from "./hourInterval.controller";
import { HourIntervalResolver } from "./hourInterval.resolver";

@Module({
  imports: [HourIntervalModuleBase],
  controllers: [HourIntervalController],
  providers: [HourIntervalService, HourIntervalResolver],
  exports: [HourIntervalService],
})
export class HourIntervalModule {}
