import { Module } from '@nestjs/common';
import { HandleSubmitController } from './handleSubmit.controller';
import { HandleSubmitService } from './handleSubmit.service';

@Module({
  controllers: [HandleSubmitController],
  providers: [HandleSubmitService],
})
export class HandleSubmitModule {}
