import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubconnectService {

  constructor(private http: HttpClient) { }

  getUserInfo(){

    
  }

  getGitHubInfo(){
    return this.http.get('https://api.github.com/users/gkarumbi/repos?access_token=f58ee917fa6a74198de3eed284bfb62b89bb47cf');
  }
}
