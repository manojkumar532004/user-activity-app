import { ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../../models/models';
import { UserService } from '../user-service/user-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {
  newUser : User = {userName:'',email:'',password:'',profile:{id:0,age:0,height:0,weight:0}};
  users : User[] = [];

  constructor(private userService : UserService,private router : Router,private cdr : ChangeDetectorRef){}

  registerUser() : void{
    this.userService.registerUser(this.newUser).subscribe(data=>{
      this.users.push(data);
      alert('User registered successfully');
      this.cdr.detectChanges();
      this.router.navigate(['login-page']);
    })
  }
}
