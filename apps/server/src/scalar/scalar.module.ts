import { Module } from "@nestjs/common";
import { ScalarModuleBase } from "./base/scalar.module.base";
import { ScalarService } from "./scalar.service";
import { ScalarController } from "./scalar.controller";
import { ScalarResolver } from "./scalar.resolver";

@Module({
  imports: [ScalarModuleBase],
  controllers: [ScalarController],
  providers: [ScalarService, ScalarResolver],
  exports: [ScalarService],
})
export class ScalarModule {}
