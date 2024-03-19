import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PrismaService } from 'src/database/prismaService';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PrismaService]
})
export class AuthModule {}
