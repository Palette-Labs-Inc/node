import { Module } from '@nestjs/common';
import { RateController } from './rating.controller';
import { RatingService } from './rating.service';

@Module({
  controllers: [RateController],
  providers: [RatingService],
})
export class RateModule {}
