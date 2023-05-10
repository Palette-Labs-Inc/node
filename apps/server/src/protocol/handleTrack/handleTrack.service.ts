import { Injectable } from '@nestjs/common';
import { HandleTrackDto } from './dto/handleTrack.dto';
import { Wave, WaveType } from '../interfaces/protocol.interface';

@Injectable()
export class HandleTrackService {
  async protocolHandler(dto: HandleTrackDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleTrackDto) {
    console.log(dto);
  }
}
