import { TestBed } from '@angular/core/testing';

import { UserService } from './user-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Profile, User } from '../../models/models';

describe('UserService', () => {
  let service: UserService;
  let httpMock : HttpTestingController;

  const dummyProfile : Profile = {id:1,age:21,height:170,weight:53};

  const dummyUser : User ={
    id:1,
    userName:'Manoj',
    email:'manoj@gmail.com',
    password:'786786',
    profile:{id:1,age:21,height:170,weight:53}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register user via POST', ()=>{
    service.registerUser(dummyUser).subscribe((res)=>{
      expect(res).toEqual(dummyUser);
    });

    const req = httpMock.expectOne('http://localhost:2001/api/users/register');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  it('should login user via POST', ()=>{
    service.loginUser(dummyUser).subscribe((res)=>{
      expect(res).toEqual(dummyUser);
    });

    const req = httpMock.expectOne('http://localhost:2001/api/users/login');
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);
  });

  it('should get a user by id via GET',()=>{
    const userId = 1;

    service.getUserById(userId).subscribe((res)=>{
      expect(res).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/users/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('should update profile via PUT',()=>{
    const userId = 1;
    const updatedProfile = {id:1,age:25,height:180,weight:70};

    service.updateProfile(userId,updatedProfile).subscribe((res)=>{
      expect(res).toEqual(updatedProfile);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/users/profile/${userId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedProfile);
  });

  it('should get profile by user id via GET',()=>{
    const userId = 1;

    service.getProfileById(userId).subscribe((res)=>{
      expect(res).toEqual(dummyUser.profile);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/users/profile/${userId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProfile);
  });
});
