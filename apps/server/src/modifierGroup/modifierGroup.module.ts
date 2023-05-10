import { Module } from "@nestjs/common";
import { ModifierGroupModuleBase } from "./base/modifierGroup.module.base";
import { ModifierGroupService } from "./modifierGroup.service";
import { ModifierGroupController } from "./modifierGroup.controller";
import { ModifierGroupResolver } from "./modifierGroup.resolver";

@Module({
  imports: [ModifierGroupModuleBase],
  controllers: [ModifierGroupController],
  providers: [ModifierGroupService, ModifierGroupResolver],
  exports: [ModifierGroupService],
})
export class ModifierGroupModule {}
