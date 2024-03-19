import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { LicenseModule } from './module/license/license.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, LicenseModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
