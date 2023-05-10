import { Injectable } from '@nestjs/common';
import { HandleBroadcastDto } from './dto/handleBroadcast.dto';
import { Wave, WaveType } from '../interfaces/protocol.interface';

@Injectable()
export class HandleBroadcastService {
  async protocolHandler(dto: HandleBroadcastDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleBroadcastDto) {
    console.log(dto);
  }
}
