import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { LicenseModule } from './module/license/license.module';
import { AuthModule } from './module/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './module/auth/guards/jwt-auth.guard';
import { RolesGuard } from './module/auth/guards/roles.guard';

@Module({
  imports: [UserModule, LicenseModule, AuthModule],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard }
  ],
})
export class AppModule {}
