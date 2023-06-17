import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Projects } from 'src/app/model/projects';

@Component({
  selector: 'app-addprojects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.css']
})
export class AddprojectsComponent {
  addprojectGroup!: FormGroup;

  constructor(private adminService: AdminserviceService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addprojectGroup = this.formBuilder.group({
      projectId: [''],
      projectName: [''],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.addprojectGroup.valid) {
      const project: Projects = {
        projectId: this.addprojectGroup.get('projectId')?.value,
        projectName: this.addprojectGroup.get('projectName')?.value,
        description: this.addprojectGroup.get('description')?.value
      };

     
      this.adminService.saveProject(project).subscribe(
        (data) => {
          console.log(data);
          // Redirect to the view page or perform any other action
          this.router.navigate(['/viewproject']);

        },
        (error) => {
          console.log(error);
          // Handle the error
        }
      );
    }
  }

}
