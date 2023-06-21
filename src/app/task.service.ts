import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from './model/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUri = 'http://localhost:3000/tasks';
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
 
  saveTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(this.apiUri, task);
  }

  getTasks(){}

  getTasksByProjectId(projectId: string): Observable<Tasks[]> {
    const url = `${this.apiUrl}/tasks?projectId=${projectId}`;
    return this.http.get<Tasks[]>(url);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }
}
