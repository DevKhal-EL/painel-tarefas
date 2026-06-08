import { Component } from '@angular/core';
import { TaskCard } from '../task-card/task-card';
import { Task } from '../task.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {

  tarefas: Task[] = [
    {
      id: 1,
      titulo: 'Reunião com cliente',
      prioridade: 'media',
      data: '23/05/2024',
      responsavel: 'Lucas Almeida',
      status: 'a_fazer',
    },
    {
      id: 2,
      titulo: 'Desenvolver tela de login',
      prioridade: 'alta',
      data: '22/05/2024',
      responsavel: 'João Ferreira',
      status: 'em_andamento',
    },
        {
      id: 1,
      titulo: 'Aprovação de layout',
      prioridade: 'media',
      data: '28/05/2024',
      responsavel: 'Fernanda Oliveira',
      status: 'aguardando',
    },
  ];

}
