import { Component, OnInit } from '@angular/core';
import {GithubconnectService } from '../../services/githubconnect.service';
import {User} from '../../user';
import {environment} from '../../../environments/environment';

import {Repository} from '../../repository';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css']
})
export class PageviewComponent implements OnInit {

  

  users:User;
  repos: Repository;
  repolist;
  

  constructor(private gitConnect: GithubconnectService, private http: HttpClient) { }

  ngOnInit() {
    
    /* let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiKey).toPromise().then(response=>{
        this.users.id = response.id;
        this.users.name = response.name;
        this.users.avatar_url = response.avatar_url;
        resolve()
      }, error=>{
        this.users.name = "User could not be found :-(";

        reject(error)

      }

      )


    })
    
    return promise;
    */

    
    interface ApiResponse{
      name:string;
      id:number;
      avatar_url:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/gkarumbi?access_token=f58ee917fa6a74198de3eed284bfb62b89bb47cf").subscribe(data=>{
      // Succesful API request
      this.users = new User(data.name, data.id,data.avatar_url)
    })
   


    this.repolist = this.gitConnect.getGitHubInfo();


    

    }
}



