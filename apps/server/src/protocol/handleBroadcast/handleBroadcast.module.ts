import { Module } from '@nestjs/common';
import { HandleBroadcastController } from './handleBroadcast.controller';
import { HandleBroadcastService } from './handleBroadcast.service';

@Module({
  controllers: [HandleBroadcastController],
  providers: [HandleBroadcastService],
})
export class HandleBroadcastModule {}
