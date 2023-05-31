import { Module } from '@nestjs/common';
import { HandleCancelController } from './handleCancel.controller';
import { HandleCancelService } from './handleCancel.service';

@Module({
  controllers: [HandleCancelController],
  providers: [HandleCancelService],
})
export class HandleCancelModule {}
