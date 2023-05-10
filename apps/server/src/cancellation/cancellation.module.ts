import { Module } from "@nestjs/common";
import { CancellationModuleBase } from "./base/cancellation.module.base";
import { CancellationService } from "./cancellation.service";
import { CancellationController } from "./cancellation.controller";
import { CancellationResolver } from "./cancellation.resolver";

@Module({
  imports: [CancellationModuleBase],
  controllers: [CancellationController],
  providers: [CancellationService, CancellationResolver],
  exports: [CancellationService],
})
export class CancellationModule {}
