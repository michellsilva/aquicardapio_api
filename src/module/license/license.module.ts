import { Module } from '@nestjs/common';
import { LicenseService } from './license.service';
import { LicenseController } from './license.controller';

@Module({
  controllers: [LicenseController],
  providers: [LicenseService],
})
export class LicenseModule {}
