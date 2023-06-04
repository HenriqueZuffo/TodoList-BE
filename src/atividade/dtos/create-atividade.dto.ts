import { dias_da_semana } from '../../utils/dias-da-semana';

export class CreateAtividadeDto {
  descricao: string;
  dia_da_semana: dias_da_semana[];
  hora: Date;
}
