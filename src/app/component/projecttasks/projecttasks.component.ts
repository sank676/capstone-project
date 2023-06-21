import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-projecttasks',
  templateUrl: './projecttasks.component.html',
  styleUrls: ['./projecttasks.component.css']
})
export class ProjecttasksComponent implements OnInit {
  projectId : string = '';
  tasks: Tasks[] = [];
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId')!;
      console.log(this.projectId);
      this.getTasksByProjectId(this.projectId);
    });

}
  
  getTasksByProjectId(projectId: string): Observable<Tasks[]> {
    const url = `${this.apiUrl}/tasks/${projectId}`;
    this.taskService.getTasksByProjectId(this.projectId).subscribe(tasks => {
      this.tasks = tasks;
    });console.log(this.tasks);
    return this.http.get<Tasks[]>(url);
  }
// getTasksByProjectId(projectId: string): Observable<Tasks[]> {
//   const url = `${this.apiUrl}/tasks/${projectId}`;
//   return this.http.get<Tasks[]>(url)
//     .pipe(
//       catchError(this.handleError)
//     );
// }

updateTask(task: Tasks): Observable<Tasks> {
  const url = `${this.apiUrl}/tasks/${task.taskId}`;
  return this.http.put<Tasks>(url, task)
    .pipe(
      catchError(this.handleError)
    );
}

deleteTask(taskId: string): Observable<void> {
  const url = `${this.apiUrl}/tasks/${taskId}`;
  return this.http.delete<void>(url)
    .pipe(
      catchError(this.handleError)
    );
}

private handleError(error: any): Observable<any> {
  console.error('An error occurred:', error);
  // Handle error here, e.g., show an error message or perform any necessary actions
  // You can also throw a custom error or rethrow the original error if needed
  return throwError('Something went wrong. Please try again later.');
}
}
 

