import { Injectable } from '@angular/core';
import { Profile, User } from '../../models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private userUrl = 'http://localhost:2001/api/users';

  constructor(private http : HttpClient) { }

  registerUser(user : User) : Observable<User>{
    return this.http.post<User>(`${this.userUrl}/register`,user);
  } 

  loginUser(user:User) : Observable<User>{
    return this.http.post<User>(`${this.userUrl}/login`,user);
  }

  getUserById(id:number) : Observable<User>{
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  deleteUser(id:number) : Observable<void>{
    return this.http.delete<void>(`${this.userUrl}/${id}`);
  }

  updateProfile(userId : number,profile : Profile) : Observable<Profile>{
    return this.http.put<Profile>(`${this.userUrl}/profile/${userId}`,profile);
  }

  getProfileById(id:number) : Observable<Profile>{
    return this.http.get<Profile>(`${this.userUrl}/profile/${id}`);
  }
}
