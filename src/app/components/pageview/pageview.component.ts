import { Component, OnInit } from '@angular/core';
import {GithubconnectService } from '../../services/githubconnect.service';
import {User} from '../../user';
import {Repository} from '../../repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pageview',
  templateUrl: './pageview.component.html',
  styleUrls: ['./pageview.component.css']
})
export class PageviewComponent implements OnInit {

  gitUserDetails;

  users:User;
  repos: Repository;
  

  constructor(private gitConnect: GithubconnectService, private http: HttpClient) { }

  ngOnInit() {
    // this.gitUserDetails = this.gitConnect.getGitHubInfo();
    interface ApiResponse{
      name:string;
      id:number;
      avatar_url:string;
    }

    this.http.get<ApiResponse>("https://api.github.com/users/gkarumbi?access_token=f58ee917fa6a74198de3eed284bfb62b89bb47cf").subscribe(data=>{
      // Succesful API request
      this.users = new User(data.name, data.id,data.avatar_url)
    })
    interface RepositoryResponse{
      name:string;
      description:string;
    }
    this.http.get<RepositoryResponse>("https://api.github.com/users/gkarumbi/repos").subscribe(data=>{
      // Succesful API request
      this.repos = new Repository(0,data.name,"",data.description,"","","")
    })
  }

}

