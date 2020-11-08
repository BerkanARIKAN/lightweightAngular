import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  constructor(private authService:AuthenticationService,private router: Router) { this.user =new User(); }

  ngOnInit() {
  }
  register(){
    console.log("register");
    this.authService.register(this.user)
    .subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['/login'])
    },er=>{
      console.log(er);
    });
  }
}
