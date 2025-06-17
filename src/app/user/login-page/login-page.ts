import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/models';
import { Router } from '@angular/router';
import { UserService } from '../user-service/user-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  oldUser : User = {userName:'',email:'',password:'',profile:{id:0,age:0,height:0,weight:0}};

  constructor(private userService : UserService,private router : Router,private cdr : ChangeDetectorRef){}

  loginUser() : void{
    this.userService.loginUser(this.oldUser).subscribe(data=>{
      alert('Logged in successfully!');
      this.cdr.detectChanges();
      this.router.navigate(['dashboard']);
    })
  }
}
