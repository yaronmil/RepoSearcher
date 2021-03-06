import { ApiService } from './../api.service';
import { Observable } from 'rxjs';
import { GitRepoService } from './../git-repo.service';
import { Component, OnInit } from '@angular/core';
import { GitRepo } from '../git-repo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gitRepos: GitRepo[];
  constructor(private gitRepoService: GitRepoService, private apiService: ApiService) { }
  gitRepos$: Observable<GitRepo[]>;
  ngOnInit() {
  }
  search(repoNameToSearch: string) {
     this.gitRepoService.searchGitRepos(repoNameToSearch).subscribe(d => this.gitRepos = d);
  }

}
