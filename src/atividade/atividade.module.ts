import { Module } from '@nestjs/common';
import { AtividadeController } from './atividade.controller';
import { AtividadeService } from './atividade.service';

@Module({
  imports: [],
  controllers: [AtividadeController],
  providers: [AtividadeService],
})
export class AtividadeModule {}
