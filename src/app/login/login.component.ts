import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private appService: AppService,private router: Router) {}
  username;
  password;
  isLoaded:boolean=false;
  isInvalid:boolean=false;
  ngOnInit(): void {}
  user;
  login() {
    console.log(this.username);
    console.log(this.password);
     this.user = {
      username: this.username,
      password: this.password,
    };
    if(this.username=="saif@gmail.com" && this.password=="123456")
    {localStorage.setItem('SeesionUser',JSON.stringify(this.user))  
    this.router.navigate(["home"]);}
    else{
      this.isInvalid=true;
    }
    // this.appService.submitLoginData(data).subscribe(
    //   (response) => {
    //     this.router.navigate(['/home']);
    //   },
    //   (err)=>{
    //     this.isInvalid=true;
    //   }
    // );
    
  }
  email(username) {
    this.username = username.viewModel;
  }
  pass(password) {
    this.password = password.viewModel;
  }
}