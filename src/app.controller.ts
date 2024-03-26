import { Controller, Get } from '@nestjs/common';
import { IsPublic } from './module/auth/decorators/is-public.decorator';

@Controller()
export class AppController {

  @Get()
  @IsPublic()
  getHello(): string {
    return 'Api está Online!!!';
  }
}
