import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity, User } from '../../models/models';
import { ActivityService } from '../activity-service/activity-service';
import { UserService } from '../../user/user-service/user-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-activity-component',
  imports: [RouterModule,CommonModule,FormsModule,HttpClientModule],
  templateUrl: './activity-component.html',
  styleUrl: './activity-component.css'
})
export class ActivityComponent {
  newActivity : Activity = { steps:0,distance:0,caloriesBurned:0,userId:0,date:new Date()};
  activities : Activity[] = [];
  userId : number = 0;
  users:User[] = [];

  constructor(private activityService : ActivityService,private cdr : ChangeDetectorRef){}

  addActivity() : void{
    this.activityService.addActivity(this.newActivity).subscribe(data=>{
      alert('Activity added successfully!');
      this.newActivity = { steps:0,distance:0,caloriesBurned:0,userId:0,date:new Date()};
      this.cdr.detectChanges();
    });
  } 

  getAllActivities() : void{
    this.activityService.getAllActivitiesByUserId(this.userId).subscribe(data=>{
      this.activities = data;
    });
  }

}
