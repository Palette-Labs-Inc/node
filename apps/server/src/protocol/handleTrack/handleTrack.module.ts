import { Module } from '@nestjs/common';
import { HandleTrackController } from './handleTrack.controller';
import { HandleTrackService } from './handleTrack.service';

@Module({
  controllers: [HandleTrackController],
  providers: [HandleTrackService],
})
export class HandleTrackModule {}
