import { Test, TestingModule } from '@nestjs/testing';
import { LicenseController } from '../license.controller';
import { LicenseService } from '../license.service';

describe('LicenseController', () => {
  let controller: LicenseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenseController],
      providers: [LicenseService],
    }).compile();

    controller = module.get<LicenseController>(LicenseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
