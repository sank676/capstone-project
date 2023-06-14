import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from './model/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasksByProjectId(projectId: string): Observable<Tasks[]> {
    const url = `${this.apiUrl}/tasks?projectId=${projectId}`;
    return this.http.get<Tasks[]>(url);
  }
}
