import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HandleRatingDto } from './dto/handleRating.dto';
import { Wave } from '../interfaces/protocol.interface';
import { HandleRateService } from './handleRating.service';

@ApiTags('postFulfill')
@Controller()
export class HandleRateController {
  constructor(private readonly protocolService: HandleRateService) {}

  @Post('/handleRating')
  async processProtocol(@Body() dto: HandleRatingDto): Promise<Wave> {
    return this.protocolService.protocolHandler(dto);
  }
}
