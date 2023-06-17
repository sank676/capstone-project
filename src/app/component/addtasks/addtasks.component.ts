import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {
  projectId!: string ; // ID of the project for which the task is being added
  addTaskGroup!: FormGroup ;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the project ID from the route parameters
    this.route.params.subscribe(params => {
      this.projectId = params['projectId'];
    });

    this.addTaskGroup = this.formBuilder.group({
      taskId: [''],
      taskName: [''],
      userId: [''],
      status: [''],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.addTaskGroup.valid) {
      const task: Tasks = {
        taskId: this.addTaskGroup.get('taskId')?.value,
        taskName: this.addTaskGroup.get('taskName')?.value,
        userId: this.addTaskGroup.get('userId')?.value,
        status: this.addTaskGroup.get('status')?.value,
        projectId: this.projectId,
        tdescription: this.addTaskGroup.get('description')?.value
      };

      // Save the task using the appropriate service or method
      // For example, you can use a TaskService to save the task
      // taskService.saveTask(task);

      // Redirect to the project's task list page
      this.router.navigate(['/projects', this.projectId, 'tasks']);
    }
  }

}
