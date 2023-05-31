import { Module } from '@nestjs/common';
import { HandleUpdateController } from './handleUpdate.controller';
import { HandleUpdateService } from './handleUpdate.service';

@Module({
  controllers: [HandleUpdateController],
  providers: [HandleUpdateService],
})
export class HandleUpdateModule {}
