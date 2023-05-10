import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleCreateDto } from './dto/handleCreate.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleCreateService } from './handleCreate.service';

@ApiTags('purchase')
@Controller()
export class HandleCreateController {
  constructor(private readonly protocolService: HandleCreateService) {}

  @Post('/handleCreate')
  async processProtocol(@Body() dto: HandleCreateDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
