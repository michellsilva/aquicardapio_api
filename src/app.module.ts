import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { LicenseModule } from './module/license/license.module';

@Module({
  imports: [UserModule, LicenseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
