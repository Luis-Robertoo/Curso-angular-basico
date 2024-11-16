import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserGit } from '../_models/userGit';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = environment.apiRrl;
  user: User | undefined;

  constructor(private http: HttpClient) { }

  getGitUser(userName: String){
    return this.http.get<UserGit>(this.baseUrl + 'users/' + userName).pipe(
      map((res: UserGit) => {
        return res;
      })
    );
  }

  setUser(user: User | undefined){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getUser(){
    return this.user;
  }
}
