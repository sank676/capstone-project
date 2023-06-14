import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserprojectsComponent } from './component/userprojects/userprojects.component';
import { UsertasksComponent } from './component/usertasks/usertasks.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'user',component:UserDashboardComponent},
  {path: 'admin',component:AdminDashboardComponent},
  {path: 'userprojects',component:UserprojectsComponent},
  {path: 'usertasks',component:UsertasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
