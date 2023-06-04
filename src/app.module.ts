import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeModule } from './atividade/atividade.module';

@Module({
  imports: [AtividadeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
