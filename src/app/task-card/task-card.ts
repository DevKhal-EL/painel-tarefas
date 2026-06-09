import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-card',
  imports: [NgClass],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  @Input() tarefa!: Task;
}
