import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  projects: Projects[] = [];
  
  constructor(private adminService: AdminserviceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.getProjects().subscribe(
      (data: Projects[]) => {
        this.projects = data;
      },
      (error) => {
        console.log(error);
        // Handle the error
      }
    );
  }

  deleteProject(project: Projects): void {
    this.adminService.deleteProject(project.projectId).subscribe(
      () => {
        const index = this.projects.findIndex(p => p.projectId === project.projectId);
        if (index !== -1) {
          this.projects.splice(index, 1);
        }
        console.log(`Deleted project with ID: ${project.projectId}`);
      },
      (error) => {
        console.log(error);
        // Handle the error
      }
    );
  }

  updateProject(project: Projects): void {
    // Implement your update logic here
    // For example, navigate to the update page with the project ID
    this.router.navigate(['/update-project', project.projectId]);
  }
  viewTasks(projectId: string): void {
    this.router.navigate(['/projecttasks', projectId]);
  }
  
}