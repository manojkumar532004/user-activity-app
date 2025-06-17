import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, Goal } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activityUrl = 'http://localhost:2002/api';

  constructor(private http : HttpClient) { }

  getAllActivitiesByUserId(userId:number) : Observable<Activity[]>{
    return this.http.get<Activity[]>(`${this.activityUrl}/user/${userId}`);
  }

  addGoalForUser(userId:number,goal:Goal) : Observable<Goal>{
    return this.http.post<Goal>(`${this.activityUrl}/goals/${userId}`,goal);
  } 

  addActivity(activity : Activity) : Observable<Activity>{
    return this.http.post<Activity>(`${this.activityUrl}/activities`,activity);
  }

  getAllGoalsByUserId(userId : number) : Observable<Goal[]>{
    return this.http.get<Goal[]>(`${this.activityUrl}/goals/user/${userId}`);
  }
}
