import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('DRAWing 20 watts of power from POWER SERVICE');
    this.powerService.supplyPower(20);
    return 'data';
  }
}
