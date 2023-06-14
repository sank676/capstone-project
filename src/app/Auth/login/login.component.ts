import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username : string = '';
  password : string = '';
  role : string = '';
  roles : string[];
  user:User= new User();

  constructor(private authService : AuthService,private route : Router){
    this.roles=[
      'admin',
      'user'
    ]
  }
  ngOnInit(): void {
    this.username = '';
    this.password = '';
    
  }
  login(){
    this.user.userName = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res =>{
      if(res==null){
        alert("username or password is wrong");
        this.ngOnInit();
      }
      else{
        console.log("Login successfull");
        localStorage.setItem("token",res.token);
      

      if(this.role=='user'){
        this.route.navigate(['/user']);
      }
      if(this.role=='admin'){
        this.route.navigate(['/admin']);
      }
    }

    },err =>{
      alert("login failed");
      this.ngOnInit();
    })
    
  }

}
