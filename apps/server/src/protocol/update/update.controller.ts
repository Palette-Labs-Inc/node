import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateDto } from './dto/update.dto';
import { Wave } from '../interfaces/protocol.interface';
import { UpdateService } from './update.service';

@ApiTags('fulfill')
@Controller()
export class UpdateController {
  constructor(private readonly protocolService: UpdateService) {}

  @Post('/update')
  async processProtocol(@Body() dto: UpdateDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
