import { Component, OnInit } from '@angular/core';
import {GithubconnectService } from '../../services/githubconnect.service';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repoInfo;

  constructor(private gitConnect: GithubconnectService,  private route: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(){
    this.repoInfo = this.gitConnect.getGitHubInfo();
  }

}
