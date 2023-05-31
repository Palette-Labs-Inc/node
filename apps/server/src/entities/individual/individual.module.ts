import { Module } from "@nestjs/common";
import { IndividualModuleBase } from "./base/individual.module.base";
import { IndividualService } from "./individual.service";
import { IndividualController } from "./individual.controller";
import { IndividualResolver } from "./individual.resolver";

@Module({
  imports: [IndividualModuleBase],
  controllers: [IndividualController],
  providers: [IndividualService, IndividualResolver],
  exports: [IndividualService],
})
export class IndividualModule {}
