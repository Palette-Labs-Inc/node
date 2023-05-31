import { Module } from '@nestjs/common';
import { HandleRateController } from './handleRating.controller';
import { HandleRateService } from './handleRating.service';

@Module({
  controllers: [HandleRateController],
  providers: [HandleRateService],
})
export class HandleRateModule {}
