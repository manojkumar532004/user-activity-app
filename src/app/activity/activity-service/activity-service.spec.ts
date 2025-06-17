import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from '../../user/user-service/user-service';
import { Activity, Goal } from '../../models/models';

describe('ActivityService', () => {
  let service: ActivityService;
  let httpMock : HttpTestingController;

  const dummyActivity : Activity = {
    id:1,
    steps:100,
    distance:30,
    caloriesBurned:250,
    userId:1,
    date:new Date("2025-06-13")
  };

  const dummyGoal : Goal = {
    id:1,
    targetSteps:500,
    targetCalories:400
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ActivityService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add activity via POST', ()=>{
    service.addActivity(dummyActivity).subscribe((res)=>{
      expect(res).toEqual(dummyActivity);
    });

    const req = httpMock.expectOne('http://localhost:2002/api/activities');
    expect(req.request.method).toBe('POST');
    req.flush(dummyActivity);
  });

  it('should get all activities by user id via GET', ()=>{
    const userId = 1;
    const activities : Activity[] = [dummyActivity];

    service.getAllActivitiesByUserId(userId).subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(activities);
    });

    const req = httpMock.expectOne(`http://localhost:2002/api/user/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(activities);
  });

  it('should add goal for user via POST', ()=>{
    const userId = 1;

    service.addGoalForUser(userId,dummyGoal).subscribe((res)=>{
      expect(res).toEqual(dummyGoal);
    });

    const req = httpMock.expectOne(`http://localhost:2002/api/goals/${userId}`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyGoal);
  });

  it('should get all goals for a user via GET', ()=>{
    const userId = 1;
    const goals : Goal[] = [dummyGoal];

    service.getAllGoalsByUserId(userId).subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(goals);
    });

    const req = httpMock.expectOne(`http://localhost:2002/api/goals/user/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(goals);
  });

});
