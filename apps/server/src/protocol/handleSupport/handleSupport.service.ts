import { Injectable } from '@nestjs/common';
import { HandleSupportDto } from './dto/handleSupport.dto';
import { Wave, WaveType } from '../interfaces/wave.interface';

@Injectable()
export class HandleSupportService {
  async protocolHandler(dto: HandleSupportDto): Promise<Wave> {
    // declare any logic to define whether the acknowledgment of the API call should be processed or not. This will determine if the Wave is AFF or NEG

    this.handleProtocolRequest(dto);
    const wave: Wave = {
      status: WaveType.AFF,
    };

    return wave;
  }

  async handleProtocolRequest(dto: HandleSupportDto) {
    console.log(dto);
  }
}
