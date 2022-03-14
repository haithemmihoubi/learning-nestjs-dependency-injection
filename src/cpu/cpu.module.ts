import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { DiskService } from '../disk/disk.service';
import { PowerService } from '../power/power.service';
import { PowerModule } from '../power/power.module';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {}
