import { Module } from '@nestjs/common';
import { HandleCreateController } from './handleCreate.controller';
import { HandleCreateService } from './handleCreate.service';

@Module({
  controllers: [HandleCreateController],
  providers: [HandleCreateService],
})
export class HandleCreateModule {}
