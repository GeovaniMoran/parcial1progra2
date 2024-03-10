import { Test, TestingModule } from '@nestjs/testing';
import { ParcialController } from './parcial.controller';

describe('ParcialController', () => {
  let controller: ParcialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcialController],
    }).compile();

    controller = module.get<ParcialController>(ParcialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
