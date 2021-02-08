import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  constructor(private authService:AuthenticationService,private router: Router) {
    this.user =new User();
    
        
    this.user.password= '';
    this.user.email= '';
    }
  

  ngOnInit() {
   
  }

  login(){
    console.log("login");
    this.authService.login(this.user.email,this.user.password)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/dashboard'])
    },er=>{
      console.log(er);
    });
  }
}
