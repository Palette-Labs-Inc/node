import { Injectable } from '@nestjs/common';
import { HandleCreateDto } from './dto/handleCreate.dto';
import { Wave, WaveType } from '../interfaces/protocol.interface';

@Injectable()
export class HandleCreateService {
  async protocolHandler(dto: HandleCreateDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleCreateDto) {
    console.log(dto);
  }
}
