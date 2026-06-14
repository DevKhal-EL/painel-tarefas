import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/tarefas';

  getTarefas(): Observable<{ tarefas: Task[] }> {
    return this.http.get<{ tarefas: Task[] }>(this.apiUrl);
  }
}