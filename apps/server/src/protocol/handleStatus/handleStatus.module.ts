import { Module } from '@nestjs/common';
import { HandleStatusController } from './handleStatus.controller';
import { HandleStatusService } from './handleStatus.service';

@Module({
  controllers: [HandleStatusController],
  providers: [HandleStatusService],
})
export class HandleStatusModule {}
