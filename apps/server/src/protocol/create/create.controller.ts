import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateDto } from './dto/create.dto';
import { Wave } from '../interfaces/protocol.interface';
import { CreateService } from './create.service';

@ApiTags('purchase')
@Controller()
export class CreateController {
  constructor(private readonly protocolService: CreateService) {}

  @Post('/create')
  async processProtocol(@Body() dto: CreateDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
