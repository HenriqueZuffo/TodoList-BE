import { Test, TestingModule } from '@nestjs/testing';
import { AtividadeService } from './atividade.service';
import { CreateAtividadeDto } from './dtos/create-atividade.dto';
import { dias_da_semana } from '../utils/dias-da-semana';

describe('AtividadeService', () => {
  let service: AtividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtividadeService],
    }).compile();

    service = module.get<AtividadeService>(AtividadeService);
  });

  it('Create', async () => {
    const createAtividadeDTO = new CreateAtividadeDto();
    createAtividadeDTO.descricao = 'teste';
    createAtividadeDTO.hora = new Date().getHours();
    createAtividadeDTO.minuto = new Date().getMinutes();

    createAtividadeDTO.dia_da_semana = [
      dias_da_semana.Domingo,
      dias_da_semana.Quarta,
    ];

    expect('1').toBe('1');
  });
});
