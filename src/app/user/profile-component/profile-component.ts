import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Profile } from '../../models/models';
import { UserService } from '../user-service/user-service';

@Component({
  selector: 'app-profile-component',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './profile-component.html',
  styleUrl: './profile-component.css'
})
export class ProfileComponent {
  userId : number = 0;
  updatedUserId : number = 0;
  profileById ?: Profile;
  updatedProfile : Profile = {id:0,age:0,height:0,weight:0};
  showForm = false;

  constructor(private userService : UserService,private cdr : ChangeDetectorRef){}
  
  getProfile() : void{
    this.userService.getProfileById(this.userId).subscribe(data=>{
      this.profileById = data;
      this.cdr.detectChanges();
    });
  }

  populateUpdateForm() : void{
    this.userService.getProfileById(this.updatedUserId).subscribe(data=>{
      this.showForm=true;
      this.updatedProfile = {...data};

    });
  }

  updateProfile() : void{
    if(this.updatedProfile.id!=null){
      this.userService.updateProfile(this.updatedUserId,this.updatedProfile).subscribe(data=>{
        alert('Profile updated successfully!');
        this.cdr.detectChanges();
        this.showForm = false;
      });
    }
  }

}
