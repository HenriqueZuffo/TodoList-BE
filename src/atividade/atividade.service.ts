import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dtos/create-atividade.dto';

@Injectable()
export class AtividadeService {
  async create(_: CreateAtividadeDto) {
    throw new Error('Deu b.o');
  }
}
