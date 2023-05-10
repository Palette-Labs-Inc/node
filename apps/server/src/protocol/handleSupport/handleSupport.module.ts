import { Module } from '@nestjs/common';
import { HandleSupportController } from './handleSupport.controller';
import { HandleSupportService } from './handleSupport.service';

@Module({
  controllers: [HandleSupportController],
  providers: [HandleSupportService],
})
export class HandleSupportModule {}
