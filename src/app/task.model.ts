export interface Task {
  id: number;
  titulo: string;
  prioridade: 'alta' | 'media' | 'baixa';
  data: string;
  responsavel: string;
  status: 'a_fazer' | 'em_andamento' | 'aguardando' | 'concluida';
}