import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateAtividadeDto } from './dtos/create-atividade.dto';
import { AtividadeService } from './atividade.service';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly atividadeService: AtividadeService) {}
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() atividade: CreateAtividadeDto) {
    try {
      return await this.atividadeService.create(atividade);
    } catch (err) {
      throw new HttpException(
        `Ocorreu um erro ao criar a atividade!\n${err}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
