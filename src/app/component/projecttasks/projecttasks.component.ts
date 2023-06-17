import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-projecttasks',
  templateUrl: './projecttasks.component.html',
  styleUrls: ['./projecttasks.component.css']
})
export class ProjecttasksComponent implements OnInit {
  projectId: string | null | undefined;
  tasks: Tasks[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId');
      this.getTasksByProjectId(this.projectId);
    });

}
  getTasksByProjectId(projectId: string | null) {
    throw new Error('Method not implemented.');
  }
}
