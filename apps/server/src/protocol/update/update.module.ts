import { Module } from '@nestjs/common';
import { UpdateController } from './create.controller';
import { UpdateService } from './create.service';

@Module({
  controllers: [UpdateController],
  providers: [UpdateService],
})
export class UpdateModule {}
