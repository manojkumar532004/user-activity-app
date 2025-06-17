import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Goal } from '../../models/models';
import { ActivityService } from '../activity-service/activity-service';

@Component({
  selector: 'app-goal-component',
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './goal-component.html',
  styleUrl: './goal-component.css'
})
export class GoalComponent {
  newGoal : Goal = {targetSteps:0,targetCalories:0};
  goals : Goal[] = [];
  userId : number = 0;
  searchId : number = 0;

  constructor(private activityService : ActivityService,private cdr : ChangeDetectorRef){}

  addGoal() : void{
    this.activityService.addGoalForUser(this.userId,this.newGoal).subscribe(data=>{
      alert('Goal added successfully!');
      this.userId=0;
      this.newGoal = {targetSteps:0,targetCalories:0};
      this.cdr.detectChanges();
    });
  }

  getAllGoals() : void{
    this.activityService.getAllGoalsByUserId(this.searchId).subscribe(data=>{
      this.goals = data;
    });
  }
}
