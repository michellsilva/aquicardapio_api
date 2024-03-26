import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './module/user/user.module';
import { LicenseModule } from './module/license/license.module';
import { AuthModule } from './module/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './module/auth/guards/jwt-auth.guard';
import { RolesGuard } from './module/auth/guards/roles.guard';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    UserModule,
    LicenseModule,
    AuthModule,
    ThrottlerModule.forRoot([{
      ttl: 1000,
      limit: 1,
    }])
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
