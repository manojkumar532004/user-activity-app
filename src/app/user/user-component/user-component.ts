import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service/user-service';
import { User } from '../../models/models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-component',
  imports: [RouterModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})
export class UserComponent {
  searchId : number = 0;
  userById ?: User;
  removeId : number = 0;

  constructor(private userService : UserService,private cdr : ChangeDetectorRef){}

  getUser() : void{
    this.userService.getUserById(this.searchId).subscribe(data=>{
      this.userById = data;
      this.cdr.detectChanges();
    });
  }

  removeUser() : void{
    this.userService.deleteUser(this.removeId).subscribe(()=>{
      alert('User removed successfully!');
      this.cdr.detectChanges();
    })
  }
}
