import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board implements OnInit {
  tarefas: Task[] = [];

  colunas = [
    { titulo: 'À Fazer', status: 'a_fazer' as const, classe: 'a-fazer', badge: 'count-red' },
    { titulo: 'Em Andamento', status: 'em_andamento' as const, classe: 'em-andamento', badge: 'count-yellow' },
    { titulo: 'Aguardando', status: 'aguardando' as const, classe: 'aguardando', badge: 'count-green' },
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.taskService.getTarefas().subscribe({
      next: (resposta) => {
        console.log('Resposta da API:', resposta);
        this.tarefas = resposta.tarefas;
        console.log('Tarefas carregadas:', this.tarefas);
      },
      error: (erro) => {
        console.error('Erro ao buscar tarefas:', erro);
      },
    });
  }

  tarefasPorStatus(status: Task['status']) {
    return this.tarefas.filter((tarefa) => tarefa.status === status);
  }
}
