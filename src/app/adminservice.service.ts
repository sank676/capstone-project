import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Projects } from './model/projects';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  saveProject(project: Projects): Observable<any> {
    return this.http.post(`${this.apiUrl}/projects`, project);
  }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiUrl}/projects`);
  }
  getMenuByName(restname: String):Observable<Projects[]>{
    return this.http.get<Projects[]>('');
  }
  // deleteProject(id: string): Observable<any> {
  //   return this.http.delete(`${this.apiUrl}/projects/${id}`);
  // }
  deleteProject(id: string):Observable<Projects>{
    return this.http.delete<Projects>(`http://localhost:8080/rest/delete/${id}`);
  }

  getAllprojects(){
    return this.http.get<Projects[]>('http://localhost:8080/rest/getAllMenu');
  }

  getProjectById(id: number): Observable<Projects> {
    return this.http.get<Projects>(`http://localhost:3000/tasks?projectId=${Projects}`);
  }

  saveUpdate(project:Projects):Observable<Object>{
    return this.http.post("http://localhost:8080/rest/create",project);
  }

  updateProject(id:number,project: Projects): Observable<Object> {
    return this.http.put(`http://localhost:8080/rest/update/${id}`,project);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }

  
}
