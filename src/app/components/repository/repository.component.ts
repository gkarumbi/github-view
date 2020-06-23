import { Component, OnInit } from '@angular/core';
import {GithubconnectService } from '../../services/githubconnect.service';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Repository} from '../../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoInfo:Repository;
  repolist;
  

  constructor(private gitConnect: GithubconnectService,  private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(){
    interface ApiResponse{
      name:string;
      id:number;
      description:string;
      created_at:string;
      full_name:string;
      updated_at:string;
      homepage:string
    }

    this.http.get<ApiResponse>("https://api.github.com/users/gkarumbi/repos?access_token=f58ee917fa6a74198de3eed284bfb62b89bb47cf").subscribe(data=>{
      // Succesful API request
      this.repoInfo = new Repository(data.id, data.name,data.full_name,data.description, data.created_at,data.updated_at,data.homepage)
    }) 

     this.gitConnect.getGitHubInfo().subscribe(repolist =>{
       this.repolist=repolist
     });
  } 
  
}
